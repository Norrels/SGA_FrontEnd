import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { startOfWeek } from "date-fns";
import { Plus, Star, Trash, Upload, X } from "phosphor-react";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useFieldArray, useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { ObjectsContext } from "../../../../Contexts/ObjectsContext";
import { API } from "../../../../lib/axios";
import { SkillsSection } from "./components/SkillsSection";

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
  InputScroll,
  ModalHeader,
  NivelStars,
  Overlay,
} from "./style";

export const teacherInput = z.object({
  id: z.number().optional(),
  nome: z
    .string()
    .min(3, { message: "* O nome não deve ser menor que 3 carecteres" }),
  cargaSemanal: z
    .number({ invalid_type_error: "* Informe um valor" })
    .gte(10, { message: "* Deve ser no minimo 10 horas" })
    .lte(40, { message: "* Não deve passar de 40 horas" }),
  foto: z.string().optional(),
  ativo: z.boolean().optional(),
  email: z.string().email(),
  competencia: z
    .object({
      nivel: z.number(),
      unidadeCurricular: z.object({
        id: z.number(),
        nome: z.string(),
      }),
    })
    .array(),
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
  //Pegando os métodos do UseForm
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

  useEffect(() => {
    handleGetUnidadeCurricular();
  }, []);

  async function handleGetUnidadeCurricular() {
    const response = await API.get("/unidade");
    if (response.status == 200) {
      setUnidadeCurricular(response.data);
    }
  }

  const [unidadeCurricular, setUnidadeCurricular] = useState<CurricularUnit[]>(
    []
  );

  const {
    register,
    reset,
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = newTeacherForm;

  const { fields, append, remove } = useFieldArray({
    name: "competencia",
    control,
    rules: {
      required: "O curso deve ter pelo menos uma unidade curricular",
    },
  });

  console.log(watch());
  console.log(errors);

  //Gambiara ? :D
  const [baseImage, setBaseImage] = useState("");
  //Pwgando os professores do context
  const { createTeacherAPI } = useContext(ObjectsContext);

  function handleCreateNewTeacher(data: TeacherType) {
    data.ativo = true;
    console.log(data);
    data.foto = baseImage;
    createTeacherAPI(data);
    reset();
    closeModal();
  }

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    const base64 = await convertBase64(file);
    setBaseImage(String(base64));
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

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
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
                <input
                  type="text"
                  placeholder="Digite o nome do professor"
                  required
                  {...register("nome")}
                />
                {errors.nome && <p>{errors.nome.message}</p>}
              </InputContent>
              <InputContent>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Digite o email do professor"
                  required
                  {...register("email")}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </InputContent>
              <InputContent>
                <InputIndividual>
                  <label>Carga horária semanal</label>
                  <input
                    type="number"
                    placeholder="Digite as horas"
                    required
                    {...register("cargaSemanal", { valueAsNumber: true })}
                  />
                  {errors.cargaSemanal && <p>{errors.cargaSemanal.message}</p>}
                </InputIndividual>
                <InputIndividual>
                  <label>Foto</label>
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
                      // required
                      // {...register("foto")}
                    />
                  </InputFile>
                </InputIndividual>
              </InputContent>

              {fields.map((field, index) => {
                return (
                  <InputContent key={field.id}>
                    <InputIndividual>
                      <label>Competência</label>
                      <select defaultValue={""}>
                        <option value="" disabled>
                          Selecione uma unidade curricular
                        </option>
                        {unidadeCurricular.map((value) => {
                          return (
                            <option
                              key={value.id}
                              {...register(
                                `competencia.${index}.unidadeCurricular.id`,
                                { setValueAs: (v) => (v = value.id) }
                              )}
                            >
                              {value.nome}
                            </option>
                          );
                        })}
                      </select>

                      {errors.competencia && (
                        <p>Selecione uma unidade curricular</p>
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
                        <SkillsSection index={index}/>
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
  );
}
