import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { Info, Plus, Trash, Upload, X } from "phosphor-react";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useFieldArray, useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { Notification } from "../../../../components/Notification";
import { ObjectsContext } from "../../../../contexts/ObjectsContext";
import { API } from "../../../../lib/axios";
import { StarsSection } from "./components/StarsSection";

import {
  ButtonNewCompetencia,
  Content,
  FinalButton,
  HeaderButtons,
  InputContainer,
  InputContent,
  InputFile,
  InputFileContent,
  InputIndividual,
  InputName,
  InputScroll,
  ModalHeader,
  Overlay,
  PhotoRecommendation,
} from "./style";
import { PhotoRecommendationAlert } from "./components/PhotoRecommendationAlert";

export const teacherInput = z.object({
  id: z.number().optional(),
  nome: z
    .string()
    .max(25, { message: "* O nome deve ser menor que 30 caracteres..." })
    .min(3, { message: "* O nome deve ser maior que 3 carecteres..." }),
  email: z.string().email({ message: "* Informe um email válido..." }),
  cargaSemanal: z
    .number({ invalid_type_error: "* Informe um valor..." })
    .gte(10, { message: "* Deve ser no mínimo 20 horas..." })
    .lte(40, { message: "* Deve ser no máximo 40 horas..." }),
  foto: z.string().optional(),
  competencia: z
    .object({
      nivel: z.number(),
      unidadeCurricular: z.object({
        id: z
          .number()
          .positive({ message: "* Selecione uma unidade curricular..." }),
        nome: z.string().optional(),
      }),
    })
    .array(),
  ativo: z.boolean().optional(),
});

export type TeacherType = z.infer<typeof teacherInput>;

interface NewTeacherModalProps {
  closeModal: () => void;
}

interface CurricularUnit {
  id: number;
  nome: string;
  horas: string;
}

export default function NewTeacherModal({ closeModal }: NewTeacherModalProps) {
  const [unidadeCurricular, setUnidadeCurricular] = useState<CurricularUnit[]>(
    []
  );

  const newTeacherForm = useForm<TeacherType>({
    resolver: zodResolver(teacherInput),
    defaultValues: {
      competencia: [
        {
          nivel: 1,
          unidadeCurricular: {
            nome: "",
          },
        },
      ],
    },
  });

  const {
    register,
    reset,
    watch,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = newTeacherForm;

  const { fields, append, remove } = useFieldArray({
    name: "competencia",
    control,
    rules: {
      required: "O curso deve ter pelo menos uma unidade curricular",
    },
  });

  //Variavel para usado para exibir a notificaçãp
  const [open, setOpen] = useState(false);

  // Váriavel para controlar oque vai ser exibido na notificação
  const [notificationStataus, setNotificationStataus] = useState(false);

  useEffect(() => {
    handleGetUnidadeCurricular();
  }, []);

  async function handleGetUnidadeCurricular() {
    const response = await API.get("/unidade");
    if (response.status == 200) {
      setUnidadeCurricular(response.data);
    }
  }

  //Pegando os professores do context
  const { createTeacherAPI } = useContext(ObjectsContext);

  function handleCreateNewTeacher(data: TeacherType) {
    data.ativo = true;
    createTeacherAPI(data)
      .then(() => {
        reset();
        closeModal();
      })
      .catch(() => setNotificationStataus(true));
    setOpen(true);
    onCloseModalTeacher();
  }

  function openNotificantionMethod() {
    setOpen(false);
  }

  function onCloseModalTeacher() {
    closeModal();
    reset();
  }

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    console.log(file);
    const base64 = await convertBase64(file);
    setValue("foto", String(base64));
    console.log(String(base64).length);
  };

  function convertBase64(file: Blob) {
    return new Promise((resolve, reject) => {
      const fileRender = new FileReader();
      fileRender.readAsDataURL(file);

      fileRender.onload = function () {
        resolve(fileRender.result);
      };

      fileRender.onerror = function (error) {
        reject(error);
      };
    });
  }

  function isValidOption(id: number) {
    const options = watch("competencia").map(
      (value) => value.unidadeCurricular.id
    );
    if (options.find((ids) => ids == id)) {
      return true;
    }
    return false;
  }

  function firstLetterUppercase(value: string) {
    value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    return value;
  }

  return (
    <>
      <Dialog.Portal>
        <Overlay />
        <Content onCloseAutoFocus={() => onCloseModalTeacher()}>
          <ModalHeader>
            <Dialog.Title>Novo professor</Dialog.Title>
            <HeaderButtons>
              <Dialog.Close>
                <X size={50} weight="light" />
              </Dialog.Close>
            </HeaderButtons>
          </ModalHeader>
          <form onSubmit={handleSubmit(handleCreateNewTeacher)}>
            <InputScroll>
              <InputContainer>
                <InputContent>
                  <label>Nome</label>
                  <InputName
                    type="text"
                    placeholder="Digite o nome do professor"
                    {...register("nome")}
                    minLength={4}
                    maxLength={25}
                    required
                  />
                  {errors.nome && <p>{errors.nome.message}</p>}
                </InputContent>
                <InputContent>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="Digite o email do professor"
                    {...register("email", {
                      setValueAs: (v) => firstLetterUppercase(v),
                    })}
                    required
                  />
                  {errors.email && <p>{errors.email.message}</p>}
                </InputContent>
                <InputContent>
                  <InputIndividual>
                    <label>Carga horária semanal</label>
                    <input
                      type="number"
                      placeholder="Digite as horas"
                      {...register("cargaSemanal", { valueAsNumber: true })}
                      min="20"
                      max="40"
                      required
                    />
                    {errors.cargaSemanal && (
                      <p>{errors.cargaSemanal.message}</p>
                    )}
                  </InputIndividual>
                  <InputIndividual>
                    <header>
                      <label>Foto</label>
                      <AlertDialog.Root>
                        <AlertDialog.Trigger asChild>
                          <Info size={25} />
                        </AlertDialog.Trigger>
                        <PhotoRecommendationAlert />
                      </AlertDialog.Root>
                    </header>

                    <InputFile>
                      <InputFileContent>
                        <span>Nome do arquivo...</span>
                        <div>
                          <Upload size={40} weight="light" />
                        </div>
                      </InputFileContent>
                      <input
                        type="file"
                        id="file"
                        multiple={false}
                        accept="image/*"
                        onChange={uploadImage}
                      />
                    </InputFile>
                  </InputIndividual>
                </InputContent>
                {fields.map((field, index) => {
                  return (
                    <InputContent key={field.id}>
                      <InputIndividual>
                        <label>Competência</label>
                        <select
                          {...register(
                            `competencia.${index}.unidadeCurricular.id`,
                            { valueAsNumber: true, required: true }
                          )}
                          defaultValue=""
                          required
                        >
                          <option value="" disabled>
                            Selecione uma unidade curricular
                          </option>
                          {unidadeCurricular.map((value, index) => {
                            return (
                              <option
                                key={value.id}
                                value={value.id}
                                disabled={isValidOption(value.id)}
                              >
                                {value.nome}
                              </option>
                            );
                          })}
                        </select>

                        {errors.competencia && (
                          <p>
                            {
                              errors.competencia[index]?.unidadeCurricular?.id
                                ?.message
                            }
                          </p>
                        )}
                      </InputIndividual>
                      <InputIndividual>
                        <header>
                          <label>Nível</label>
                          {index !== 0 && (
                            <Trash size={24} onClick={() => remove(index)} />
                          )}
                        </header>
                        <FormProvider {...newTeacherForm}>
                          <StarsSection index={index} />
                        </FormProvider>
                      </InputIndividual>
                    </InputContent>
                  );
                })}

                <ButtonNewCompetencia
                  onClick={() => {
                    append({
                      nivel: 1,
                      unidadeCurricular: {
                        nome: "",
                        id: 0,
                      },
                    });
                  }}
                  type="button"
                >
                  <Plus size={32} />
                  <p>Adicionar competência</p>
                </ButtonNewCompetencia>

                <FinalButton>
                  <button type="submit">Criar</button>
                </FinalButton>
              </InputContainer>
            </InputScroll>
          </form>
        </Content>
      </Dialog.Portal>
      <Notification
        tipe={notificationStataus ? "Erro" : "Sucesso"}
        description={
          notificationStataus ? "Falha ao criar." : "Criado com sucesso."
        }
        title="Professor"
        openNotification={open}
        openNotificationMethod={openNotificantionMethod}
      />
    </>
  );
}
