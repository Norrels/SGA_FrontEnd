import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { startOfWeek } from "date-fns";
import { Plus, Star, Trash, Upload, X } from "phosphor-react";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { ObjectsContext } from "../../../../Contexts/ObjectsContext";
import { API } from "../../../../lib/axios";
import { Rating } from "./components/Rating";
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

// Object Professor com Zod .max(36, { message: "O Email não deve ter mais de 20 caracteres" })
// .min(3, { message: "O Email deve ser maior que 3 caracteres" }),

/* 
    
.max(36, { message: "O nome não deve ter mais de 20 caracteres" })
    .min(3, { message: "O nome deve ser maior que 3 caracteres" }),
    
    */
export const teacherInput = z.object({
  id: z.number(),
  nome: z
    .string()
    .min(3, { message: "O nome não deve ser menor que 3 carecteres" }),
  cargaSemanal: z.number(),
  foto: z.string(),
  ativo: z.boolean(),
  email: z.string(),
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
    formState: { errors },
    register,
    reset,
    watch,
    handleSubmit,
  } = useForm<TeacherType>({
    resolver: zodResolver(teacherInput),
  });

  console.log(watch());
  console.log(errors);

  //Gambiara ? :D
  const [baseImage, setBaseImage] = useState("");
  //Pwgando os professores do context
  const { createTeacherAPI } = useContext(ObjectsContext);
  function handleCreateNewTeacher(data: TeacherType) {
    console.log(data);

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
                {/* {errors.nome && <p>{errors.nome.message}</p>} */}
              </InputContent>
              <InputContent>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Digite o email do professor"
                  required
                  {...register("email")}
                />
                {/* {errors.email && <p>{errors.email.message}</p>} */}
              </InputContent>
              <InputContent>
                <InputIndividual>
                  <label>Carga horária semanal</label>
                  <input
                    type="number"
                    placeholder="Digite as horas"
                    required
                    {...register("cargaSemanal")}
                  />
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
              <InputContent>
                <InputIndividual>
                  <label>Competência</label>
                  <select>
                    <option value="" selected disabled>
                      Selecione uma unidade curricular
                    </option>
                    {unidadeCurricular.map((value) => (
                      <option key={value.id} value={value.nome}>
                        {value.nome}
                      </option>
                    ))}
                  </select>
                </InputIndividual>
                <InputIndividual>
                  <header>
                    <label>Nível</label>
                    {/* quando fizer a logica descomentar codigo abaixo :D */}
                    {/* {index !== 0 ? <Trash size={24} /> : <></>} */}
                  </header>
                  <NivelStars>
                    <Star size={37} weight="fill" />
                    <Star size={37} weight="fill" />
                    <Star size={37} weight="fill" />
                    <Star size={37} weight="fill" />
                    <Star size={37} weight="fill" />
                  </NivelStars>
                </InputIndividual>
              </InputContent>
              <ButtonNewCompetencia onClick={() => {}} type="button">
                <Plus size={32} />
                <p>Adicionar competência</p>
              </ButtonNewCompetencia>
              {/* <InputContentScroll>
                {input.map((v) => (
                  <ContainerInputStar key={v}>
                    <ContentSelect>
                      <label>Competência</label>
                      <input
                        {...register(`competencia.${v}.id`)}
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
              </InputContentScroll> */}
              {/* <ContainerNewCompt
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
              </ContainerNewCompt> */}
              <FinalButton>
                <button>Criar</button>
              </FinalButton>
            </InputContainer>
          </InputScroll>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
