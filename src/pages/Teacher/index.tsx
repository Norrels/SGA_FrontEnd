import { TeacherItem } from "./components/TeacherItem";
import {
  TeacherContainer,
  TeacherContent,
  TeacherTitleContainer,
  TeacherButtonContainer,
  TeacherList,
} from "./style";
import * as Dialog from "@radix-ui/react-dialog";
import { AvaliableModal } from "./components/AvaliableModal";
import NewTeacherModal from "./components/NewTeacherModal";

export function Teacher() {
  const teachers = [
    {
      id: 1,
      nome: "Renata",
      cargaSemanal: 40,
      ausencia: "",
      url: "https://avatars.githubusercontent.com/u/54322854?v=4",
      listaCompetencia: [
        {
          id: 4,
          unidadeCurricular: {
            id: 77,
            nome: "Java",
            curso: {
              id: 14,
              nome: "TEC DEV SIS",
              tipoCurso: "CT",
            },
            horas: 160,
          },
          nivelHabilidade: "5",
        },
      ],
    },
    {
      id: 2,
      nome: "Robertão",
      cargaSemanal: 180,
      ausencia: "",
      url: "https://th.bing.com/th/id/R.a05f5ab335d25627a5eabca1c402c54e?rik=%2faCCWROKTvOsEQ&pid=ImgRaw&r=0",
      listaCompetencia: [
        {
          id: 5,
          unidadeCurricular: {
            id: 78,
            nome: "C#",
            curso: {
              id: 14,
              nome: "TEC DEV SIS",
              tipoCurso: "FIC",
            },
            horas: 40,
          },
          nivelHabilidade: "3",
        },
      ],
    },
    {
      id: 3,
      nome: "Julinha",
      cargaSemanal: 5,
      ausencia: "",
      url: "https://images.redetv.uol.com.br/destaques/imgG_92494.jpg",
      listaCompetencia: [
        {
          id: 4,
          unidadeCurricular: {
            id: 77,
            nome: "C++",
            curso: {
              id: 14,
              nome: "TEC DEV SIS",
              tipoCurso: "CT",
            },
            horas: 160,
          },
          nivelHabilidade: "5",
        },
      ],
    },
  ];

  return (
    <TeacherContainer>
      <TeacherContent>
        <TeacherTitleContainer>
          <h1>Professores</h1>
          <p>Selecione um Professor ou crie um novo!</p>

          <TeacherButtonContainer>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Novo professor</button>
              </Dialog.Trigger>
              
              <NewTeacherModal />
            </Dialog.Root>

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Disponibilidade</button>
              </Dialog.Trigger>
              <AvaliableModal />
            </Dialog.Root>
          </TeacherButtonContainer>
        </TeacherTitleContainer>

        <input type="text" placeholder="Buscar por professor" />

        <TeacherList>
          {teachers.map((value) => (
            <TeacherItem
              key={value.id}
              id={value.id}
              nome={value.nome}
              cargaSemanal={value.cargaSemanal}
              ausencia={value.ausencia}
              url={value.url}
              listaCompetencia={value.listaCompetencia}
            />
          ))}
        </TeacherList>
      </TeacherContent>
    </TeacherContainer>
  );
}
