import * as Dialog from "@radix-ui/react-dialog";
import { Plus, Trash, X } from "phosphor-react";
import { useContext, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ResourcesContext } from "../../../../contexts/ResourcesContext";
import {
  ButtonNewUnidadeCurricular,
  Content,
  FinalButton,
  HeaderButtons,
  InputContainer,
  InputContent,
  InputIndividual,
  InputScroll,
  ModalHeader,
  Overlay,
} from "./style";
import { Notification } from "../../../../components/Notification";

//Varivel de validação
export const coursesInputs = z.object({
  id: z.string().optional(),
  nome: z
    .string()
    .max(100, { message: "* O nome deve ser menor que 100 caracteres..." })
    .min(4, { message: "* O nome deve ser maior que 3 caracteres..." }),
  tipo: z.enum(["FIC", "REGULAR"]),
  unidadeCurricular: z
    .object({
      id: z.number().optional().nullable(),
      nome: z
        .string()
        .max(70, { message: "* O nome deve ser menor que 70 caracteres..." })
        .min(4, { message: "* O nome deve ser maior que 3 caracteres..." }),
      horas: z
        .number({ invalid_type_error: "Insira as horas..." })
        .positive({ message: "* As horas devem sem maior que 3..." })
        .gte(4, { message: "* As horas devem sem maior que 3..." }),
    })
    .array(),
  ativo: z.boolean().optional(),
});

//Transformando a variavel de validação em uma interface
export type CourseType = z.infer<typeof coursesInputs>;

//Método utilizado para fecha a modal após o submit
interface NewCourseModalProps {
  closeModal: () => void;
}

export default function NewCourseModal({ closeModal }: NewCourseModalProps) {
  const {
    //Variavel para pega o valor dos input
    register,
    //Metodo que é acionado ao fazer o submit do forms
    handleSubmit,
    //Metodo para limpar os campos do formulario
    reset,
    control,
    //Variavel utilizada para acessar os erros do formulario
    formState: { errors },
  } = useForm<CourseType>({
    resolver: zodResolver(coursesInputs),
    defaultValues: {
      unidadeCurricular: [{ nome: "", horas: 0 }],
    },
  });

  //Variavel para usado para exibir a notificaçãp
  const [open, setOpen] = useState(false);

  // Váriavel para controlar oque vai ser exibido na notificação
  const [notificationStataus, setNotificationStataus] = useState(false);

  //Método do context que faz a requisição para API e adiciona o valor no state
  const { createCourseAPI } = useContext(ResourcesContext);

  //Variavel para criar a logica de adicionar uma nova unidade curricular
  const { fields, append, remove } = useFieldArray({
    name: "unidadeCurricular",
    control,
    rules: {
      required: "O curso deve ter pelo menos uma unidade curricular",
    },
  });

  //Criando o curso e setando a primeira letra em maiusculo
  function handleCreateNewCourse(data: CourseType) {
    data.ativo = true;
    createCourseAPI(data)
      .then(() => {
        reset();
        closeModal();
      })
      .catch(() => setNotificationStataus(true));

    setOpen(true);
  }

  function openNotificantionMethod() {
    setOpen(false);
  }

  return (
    <>
      <Dialog.Portal>
        <Overlay />
        <Content onCloseAutoFocus={() => reset()}>
          <ModalHeader>
            <Dialog.Title>Novo curso</Dialog.Title>
            <HeaderButtons>
              <Dialog.Close>
                <X size={50} weight="light" />
              </Dialog.Close>
            </HeaderButtons>
          </ModalHeader>

          <form onSubmit={handleSubmit(handleCreateNewCourse)}>
            <InputScroll>
              <InputContainer>
                <InputContent>
                  <label>Nome</label>
                  <input
                    type="text"
                    placeholder="Digite o nome do curso"
                    {...register("nome", {
                      required: true,
                    })}
                    minLength={4}
                    maxLength={101}
                    required
                  />
                  {errors.nome && <p>{errors.nome.message}</p>}
                </InputContent>
                <InputContent>
                  <label>Tipo</label>
                  <select
                    {...register("tipo", { required: true })}
                    defaultValue={""}
                    required
                  >
                    <option value="" disabled>
                      Selecione o tipo do curso
                    </option>
                    <option value="REGULAR">Regular</option>
                    <option value="FIC">FIC</option>
                  </select>
                  {errors.tipo && <p>* Selecione um valor válido...</p>}
                </InputContent>
                {fields.map((field, index) => {
                  return (
                    <InputContent key={field.id}>
                      <InputIndividual>
                        {/* aparecer a label apenas no primeiro componente, validar com o time */}
                        {/* {index == 0 ? <label>Unidade Curricular</label> : <></>} */}
                        <label>Unidade Curricular</label>
                        <input
                          type="text"
                          placeholder="Digite a unidade curricular"
                          {...register(`unidadeCurricular.${index}.nome`, {
                            required: true,
                          })}
                          minLength={4}
                          maxLength={71}
                          required
                        />
                        {errors.unidadeCurricular && (
                          <p>
                            {errors.unidadeCurricular[index]?.nome?.message}
                          </p>
                        )}
                      </InputIndividual>
                      <InputIndividual>
                        {/* {index == 0 ? <label>Horas</label> : <></>} */}
                        <label>Horas</label>
                        <input
                          type="number"
                          placeholder="Digite as horas"
                          {...register(`unidadeCurricular.${index}.horas`, {
                            valueAsNumber: true,
                            required: true,
                          })}
                          min="4"
                          required
                        />
                        {errors.unidadeCurricular && (
                          <p>
                            {errors.unidadeCurricular[index]?.horas?.message}
                          </p>
                        )}
                      </InputIndividual>
                      {index !== 0 && (
                        <Trash
                          size={40}
                          weight="light"
                          onClick={() => remove(index)}
                        />
                      )}
                    </InputContent>
                  );
                })}
                <ButtonNewUnidadeCurricular
                  onClick={() => {
                    append({
                      nome: "",
                      horas: 4,
                    });
                  }}
                  type="button"
                >
                  <Plus size={32} />
                  <p>Adicionar unidade curricular</p>
                </ButtonNewUnidadeCurricular>
                <FinalButton>
                  <button
                    type="submit"
                    onClick={() => setNotificationStataus(false)}
                  >
                    Criar
                  </button>
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
        title="Curso"
        openNotification={open}
        openNotificationMethod={openNotificantionMethod}
      />
    </>
  );
}
