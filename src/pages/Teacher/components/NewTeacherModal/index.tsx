import * as Dialog from "@radix-ui/react-dialog";
import { startOfWeek } from "date-fns";
import { Plus, X } from "phosphor-react";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { ObjectsContext } from "../../../../Contexts/ObjectsContext";
import { API } from "../../../../lib/axios";
import { Rating } from "./components/Rating";
import {
  CloseButton,
  ContainerButtonCreate,
  ContainerInputStar,
  ContainerNewCompt,
  Content,
  ContentSelect,
  InputContainer,
  InputContent,
  InputContentDupo,
  InputContentScroll,
  NewCompt,
  Overlay,
} from "./style";

// Object Professor com Zod
export const teacherInput = z.object({
  id: z.number(),
  nome: z
    .string()
    .max(36, { message: "O nome não deve ter mais de 20 caracteres" })
    .min(3, { message: "O nome deve ser maior que 3 caracteres" }),
  cargaSemanal: z.number().gte(6, { message: "A hora deve ser maior que 15" }),
  foto: z.string(),
  ativo: z.boolean(),
  email: z
    .string()
    .max(36, { message: "O Email não deve ter mais de 20 caracteres" })
    .min(3, { message: "O Email deve ser maior que 3 caracteres" }),
  competencia: z
    .object({
      id: z.number(),
      professor: z.object({
        id: z.number(),
        nome: z.string(),
      }),
      unidadeCurricular: z.object({
        id: z.number(),
        nome: z.string(),
        horas: z.string(),
      }),
      nivel: z.number(),
    })
    .array(),
});

export type TeacherType = z.infer<typeof teacherInput>;

interface NewTeacherModalProps {
  closeModal: () => void;
}

// Gambiarra para Recurar id e nota da Competencia =)
interface StarProps {
  idCompetencia: number;
  nota: number;
}
[];

// Interface para as Unidades Curriculares
interface UnidadeCurricularProps {
  id: number;
  nome: string;
  horas: string;
}
[];

export default function NewTeacherModal({ closeModal }: NewTeacherModalProps) {
  const [input, setInput] = useState([1]);
  const [star, setStar] = useState<StarProps[]>([]);
  const [unidadeCurricular, setUnidadeCurricular] = useState<
    UnidadeCurricularProps[]
  >([]);
  //Pegando os métodos do UseForm
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<TeacherType>();
  //Gambiara ? :D
  const [baseImage, setBaseImage] = useState("");
  //Pwgando os professores do context
  const { createTeacherAPI } = useContext(ObjectsContext);
  function handleCreateNewTeacher(data: TeacherType) {
    data.ativo = true;
    data.foto = baseImage;
    data.competencia.shift();
    star.filter((value) => {
      data.competencia.map((valueMap) => {
        // adicionando as notas na competencia
        if (value.idCompetencia == Number(valueMap.id)) {
          valueMap.nivel = value.nota;
        }
        // mapeando as unidades curriculares
        unidadeCurricular.map((unit) => {
          // verificando pelo nome da unidade e setando
          if (unit.nome == valueMap.unidadeCurricular.nome) {
            valueMap.unidadeCurricular.id = unit.id;
            valueMap.unidadeCurricular.horas = unit.horas;
          }
        });
      });
    });
    console.log(data);
    createTeacherAPI(data);
    reset();
    closeModal();
  }

  useEffect(() => {
    handleGetUnidadeCurricular();
  }, []);

  async function handleGetUnidadeCurricular() {
    const response = await API.get("/unidade");
    if (response.status == 200) {
      setUnidadeCurricular(response.data);
    }
  }

  function handleGetValue(notaEscolhida: number, idCompetencia: number) {
    setStar([...star, { idCompetencia: idCompetencia, nota: notaEscolhida }]);
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
      <form onSubmit={handleSubmit(handleCreateNewTeacher)}>
        <Content>
          <CloseButton>
            <X size={24} />
          </CloseButton>

          <Dialog.Title>Novo Professor</Dialog.Title>

          <InputContainer>
            <InputContent>
              <label>Nome</label>
              <input
                type="text"
                placeholder="digite o nome do professor"
                required
                {...register("nome", { required: true })}
              />
              {errors.nome && <p>{errors.nome.message}</p>}
            </InputContent>
            <InputContent>
              <label>Email</label>
              <input
                type="email"
                placeholder="digite o email do professor"
                required
                {...register("email", { required: true })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </InputContent>
            <InputContentDupo>
              <div>
                <label>Carga horária Semanal</label>
                <input
                  type="text"
                  placeholder="digite as horas"
                  required
                  {...register("cargaSemanal", { required: true })}
                />
                {errors.cargaSemanal && <p>{errors.cargaSemanal.message}</p>}
              </div>
              <div>
                <label>Foto</label>
                <input
                  type="file"
                  id="file"
                  multiple={false}
                  accept="image/*"
                  placeholder="envie uma foto do professor"
                  onChange={uploadImage}
                  // required
                  // {...register("foto")}
                />
              </div>
            </InputContentDupo>
            <InputContentScroll>
              {input.map((v) => (
                <ContainerInputStar key={v}>
                  <ContentSelect>
                    <label>Competência</label>
                    <input
                      {...register(`competencia.${v}.id`, { required: true })}
                      type="hidden"
                      value={v}
                    />
                    <select
                      key={v}
                      {...register(`competencia.${v}.unidadeCurricular.nome`)}
                    >
                      {unidadeCurricular.map((value) => (
                        <option key={value.id} value={value.nome}>
                          {value.nome}
                        </option>
                      ))}
                    </select>
                  </ContentSelect>
                  <Rating
                    {...register(`competencia.${v}.nivel`)}
                    handleGetValue={handleGetValue}
                    id={v}
                  />
                </ContainerInputStar>
              ))}
            </InputContentScroll>
            <ContainerNewCompt
              onClick={(e) => {
                setInput([...input, 1 + input.length]);
              }}
            >
              <NewCompt>
                <div>
                  <Plus size={32} />
                  <br />
                  <span>Adicionar Competência</span>
                </div>
              </NewCompt>
            </ContainerNewCompt>
          </InputContainer>
          <ContainerButtonCreate>
            <button>Criar</button>
          </ContainerButtonCreate>
        </Content>
      </form>
    </Dialog.Portal>
  );
}
