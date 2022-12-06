import { Confetti, Lightbulb, Warning, WarningOctagon } from "phosphor-react";
import { ChangeEvent, useContext } from "react";
import { ObjectsContext } from "../../../../contexts/ObjectsContext";
import {
  TeacherGraphContainer,
  TeacherGraphDescription,
  TeacherGraphLabel,
  TeacherGraphs,
  TeacherGraphSelects,
  TeacherGraphSubtitle,
  TeacherGraphSubtitles,
  TeacherGraphSubtitleSpan,
  TeacherGraphTextContainer,
} from "./styles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { API } from "../../../../lib/axios";
import { endOfMonth, format } from "date-fns";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);


export function TeacherGraph() {
  const { teachers } = useContext(ObjectsContext);
  const [hoursThisMounth, setHoursThisMounth] = useState(0)
  const [teacherName, setTeacherName] = useState<any>()
  const [teacherId, setTeacherId] = useState(0)
  const today = new Date();
  let semestreAtual = [""]

  if (today.getMonth() <= 6) {
    semestreAtual = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Março",
      "Junho",
    ];
  } else {
    semestreAtual = [
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
  }

  const [labels, setLabelss] = useState(semestreAtual);

  // const [title, setTitle] = useState("");

  // function handleBackToSemester() {
  //   setLabelss(semestreAtual), setTitle("");
  // }

  const [horasContratuais, setHorasContratuais] = useState([0])
  const [horasCadastradas, setHorasCadastradas] = useState([0])

  async function fetchHoras(semestre: number, teacherId: string) {
    let arrayToSave = []
    let arrayTosave2 = []

    const ultimaDataPriSemestre = [
      endOfMonth(new Date(today.getFullYear(), 0, 1)),
      endOfMonth(new Date(today.getFullYear(), 1, 1)),
      endOfMonth(new Date(today.getFullYear(), 2, 1)),
      endOfMonth(new Date(today.getFullYear(), 3, 1)),
      endOfMonth(new Date(today.getFullYear(), 4, 1)),
      endOfMonth(new Date(today.getFullYear(), 5, 1)),
    ]

    const ultimaDataSegSemestre = [
      endOfMonth(new Date(today.getFullYear(), 7 - 1, 1)),
      endOfMonth(new Date(today.getFullYear(), 8 - 1, 1)),
      endOfMonth(new Date(today.getFullYear(), 9 - 1, 1)),
      endOfMonth(new Date(today.getFullYear(), 10 - 1, 1)),
      endOfMonth(new Date(today.getFullYear(), 11 - 1, 1)),
      endOfMonth(new Date(today.getFullYear(), 12 - 1, 1)),
    ]


    for (let index = 0; index < semestreAtual.length; index++) {
      if (semestre == 1) {
        const res = await API.get(`/professor/diaria?id=${teacherId}&data_inicio=01/${index + 1}/${today.getFullYear()}&data_final=${format((ultimaDataPriSemestre[index]), "dd/MM/yyyy")}`)
        arrayToSave[index] = res.data[0]
        arrayTosave2[index] = res.data[1] * 4

      } else {
        const res = await API.get(`/professor/diaria?id=${teacherId}&data_inicio=01/0${index + 7}/${today.getFullYear()}&data_final=${format((ultimaDataSegSemestre[index]), "dd/MM/yyyy")}`)
        console.log(res.data)
        arrayToSave[index] = res.data[0]
        arrayTosave2[index] = res.data[1] * 4
        if (today.getMonth() == (index + 6)) {
          console.log("pasou")
          setHoursThisMounth(index)
        }

      }
    }
    setHorasCadastradas(arrayToSave)
    setHorasContratuais(arrayTosave2)
  }

  function onChageSelectProfessor(event: ChangeEvent<HTMLSelectElement>) {
    setTeacherId(parseInt(event.target.value))
    const TeacherName = teachers.find((teacher) => {
      if (teacher.id == parseInt(event.target.value)) {
        return teacher
      }
    })
    setTeacherName(TeacherName?.nome)
    console.log(TeacherName)

    today.getMonth()
    if (today.getMonth() <= 6) {
      fetchHoras(1, event.target.value)
    } else {
      fetchHoras(2, event.target.value)
    }
  }




  const options = {
    responsive: true,
    //Gambiarra Total aqui :D
    // onClick: async (e: any, elements: string | any[]) => {
    //   if (elements.length != 0 && labels.length > 4) {
    //     console.log(e)
    //     setLabelss(["Semana 1", "Semana 2", "Semana 3", "Semana 4"]);
    //     setHorasCadastradas([])
    //     setTitle(labels[elements[0].index]);
    //   }
    // },
    scales: {
      y: {
        max: 200,
        min: 0,
        ticks: {
          stepSize: 40,
        },
      },
    },
  };

  //Definindo as barras do grafico
  const data = {
    labels,
    datasets: [
      {
        label: "Horas Cadastradas",
        data: horasCadastradas.map((dataset) => dataset),
        backgroundColor: "#25B5E9",
      },
      {
        label: "Horas Contratuais",
        data: horasContratuais.map((dataset) => dataset),
        backgroundColor: "#D9D9D9",
      },
    ],
  };



  return (
    <TeacherGraphContainer>
      <TeacherGraphTextContainer>
        <TeacherGraphLabel>
          <h3>Professores</h3>
          <p>
            Carga horária dos professores, com base nas aulas cadastradas no
            sistema
          </p>
        </TeacherGraphLabel>
        <TeacherGraphSelects>
          <select
            onChange={onChageSelectProfessor}
            defaultValue=""
          >
            <option value={""} disabled>Selecione</option>
            {teachers.map((teacher) =>
              teacher.ativo && (
                <option key={teacher.id} value={teacher.id}>{teacher.nome}</option>
              )
            )}
          </select>
        </TeacherGraphSelects>
      </TeacherGraphTextContainer>

      <TeacherGraphs>
        <Bar data={data} options={options} />
      </TeacherGraphs>

      <footer>
        {
          teacherId != 0 ?
            <>
              <TeacherGraphDescription>
                {
                  horasContratuais[hoursThisMounth] >= horasCadastradas[hoursThisMounth] &&
                  <h5>
                    <Lightbulb size={18} /> {teacherName} precisa fazer {horasContratuais[hoursThisMounth] - horasCadastradas[hoursThisMounth]}h para completar {horasContratuais[hoursThisMounth]}h
                    nesse mês
                  </h5>
                }
                {
                  horasContratuais[hoursThisMounth] >= horasCadastradas[hoursThisMounth] &&
                  <h5>
                    <Warning size={18} /> {teacherName} não possui aulas o suficiente para
                    completar {horasContratuais[hoursThisMounth]}h
                  </h5>
                }
                {
                  horasContratuais[hoursThisMounth] == horasCadastradas[hoursThisMounth] &&
                  <h5>
                    <Confetti size={18} /> Uuuhuu! O professor(a) bateu a meta a diária de {horasContratuais[hoursThisMounth]}h esse mês
                  </h5>
                }
                {
                  horasContratuais[hoursThisMounth] <= horasCadastradas[hoursThisMounth] &&
                  <strong>
                    <WarningOctagon size={25} /> O professor possui mais aulas cadastradas do que deveria esse mês
                  </strong>
                }
              </TeacherGraphDescription>
              <TeacherGraphSubtitles>
                <TeacherGraphSubtitle>
                  <p>Horas cadastradas</p>
                  <p>Horas contratuais</p>
                </TeacherGraphSubtitle>

                <TeacherGraphSubtitleSpan>
                  <span></span>
                  <span></span>
                </TeacherGraphSubtitleSpan>
              </TeacherGraphSubtitles>
            </>
            :
            <h4><Lightbulb size={18} /> Selecione um(a) professor(a)...</h4>
        }
      </footer>
    </TeacherGraphContainer>
  );
}
