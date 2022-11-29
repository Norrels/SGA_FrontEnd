import { ArrowClockwise, Lightbulb, Warning } from "phosphor-react";
import { ChangeEvent, useContext } from "react";
import { ObjectsContext } from "../../../../contexts/ObjectsContext";
import NotFound from "../../../../assets/bro.svg";
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export function TeacherGraph() {
  const today = new Date();
  let semestreAtual = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Março",
    "Junho",
  ];

  const [labels, setLabelss] = useState([
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Março",
    "Junho",
  ]);
  const [title, setTitle] = useState("");

  function handleBackToSemester() {
    setLabelss(semestreAtual), setTitle("");
  }

  // professor/emAula

  function handleSelectSemestre(event: ChangeEvent<HTMLSelectElement>) {
    if (event.target.value === "1") {
      setLabelss(["Janeiro", "Fevereiro", "Março", "Abril", "Março", "Junho"]);
      setTitle("");
      semestreAtual = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Março",
        "Junho",
      ];
    }
    if (event.target.value === "2") {
      setLabelss([
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ]);
      setTitle("");
      semestreAtual = [
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ];
    }
  }

  const datas = [35, 56, 60, 4, 5, 6, 7, 8];

  const options = {
    responsive: true,
    //Gambiarra Total aqui :D
    onClick: async (e: any, elements: string | any[]) => {
      if (elements.length != 0 && labels.length > 4) {
        setLabelss(["Semana 1", "Semana 2", "Semana 3", "Semana 4"]);
        setTitle(labels[elements[0].index]);
      }
    },
    scales: {
      y: {
        max: 100,
        min: 0,
        ticks: {
          stepSize: 20,
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
        data: datas.map((dataset) => dataset),
        backgroundColor: "#25B5E9",
      },
      {
        label: "Horas Feitas",
        data: datas.map((dataset) => dataset),
        backgroundColor: "#D9D9D9",
      },
    ],
  };

  const { teachers } = useContext(ObjectsContext);

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
          <select>
            {teachers.map((teacher) =>
              teacher.ativo ? (
                <option key={teacher.id}>{teacher.nome}</option>
              ) : (
                <></>
              )
            )}
          </select>

          <select onChange={handleSelectSemestre}>
            <option value="1">1º Semestre</option>
            <option value="2">2º Semestre</option>
          </select>

          <select>
            <option value="1">{today.getFullYear()}</option>
          </select>
        </TeacherGraphSelects>
      </TeacherGraphTextContainer>

      <TeacherGraphs>
        <div>
          {title && <ArrowClockwise onClick={handleBackToSemester} />}
          <h4>{title}</h4>
        </div>

        <Bar data={data} options={options} />
      </TeacherGraphs>

      <footer>
        <TeacherGraphDescription>
          <h5>
            <Lightbulb size={18} /> Jessica precisa fazer 39h para completar 80h
            nesse mês
          </h5>
          <h5>
            <Warning size={18} /> Jessica não possui aulas o suficiente para
            completar 80h
          </h5>
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
      </footer>
    </TeacherGraphContainer>
  );
}
