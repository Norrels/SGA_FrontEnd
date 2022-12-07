import { endOfMonth, format } from "date-fns";
import {
  ArrowDown,
  ArrowUp,
  Clock,
  Moon,
  Sun,
  SunHorizon,
} from "phosphor-react";
import { useEffect, useState } from "react";
import { API } from "../../../../lib/axios";
import { ClassGraphCard, ClassGraphContainer, ClassGraphText } from "./style";

interface DataValues {
  maior: true;
  periodo: string;
  quantidade: number;
}

export function ClassGraph() {
  const [data, setData] = useState<DataValues[]>([]);
  const today = new Date()



  useEffect(() => {
    handleGetValuesOfMonth();
  }, []);


  async function handleGetValuesOfMonth() {
    const lastDay = endOfMonth(today)
    const res = await API.get(`aula/analise/mes/2022-${today.getMonth() + 1}-01/fimMes/${format((lastDay), "yyyy-MM-dd")}`);
    if (res.status == 200) {
      setData(res.data);
    }
  }


  return (
    <ClassGraphContainer>
      <ClassGraphText>
        <h3>Aulas</h3>
        <p>Quantidade geral de aulas por período em relação ao mês anterior</p>
      </ClassGraphText>

      <ClassGraphCard>
        <span>
          <Sun size={22} color="#fff" />
        </span>
        <p>Manhã</p>
        <strong>
          {data.find((data) => { return (data.periodo == "MANHA") })?.quantidade ? data.find((data) => { return (data.periodo == "MANHA") })?.quantidade : "0"}
          {data.find((data) => { return (data.periodo == "MANHA") })?.periodo == "MANHA" && data.find((data) => { return (data.periodo == "MANHA") })?.maior ?
            <ArrowUp size={20} color="#7BD75B" weight="bold" /> :
            <ArrowDown size={20} color="#D75B5B" weight="bold" />
          }
        </strong>

      </ClassGraphCard>

      <ClassGraphCard>
        <span>
          <SunHorizon size={22} color="#fff" />
        </span>
        <p>Tarde</p>
        <strong>
          {data.find((data) => { return (data.periodo == "TARDE") })?.quantidade ? data.find((data) => { return (data.periodo == "TARDE") })?.quantidade : "0"}
          {data.find((data) => { return (data.periodo == "TARDE") })?.periodo == "TARDE" && data.find((data) => { return (data.periodo == "TARDE") })?.maior ?
            <ArrowUp size={20} color="#7BD75B" weight="bold" /> :
            <ArrowDown size={20} color="#D75B5B" weight="bold" />
          }
        </strong>

      </ClassGraphCard>
      <ClassGraphCard>
        <span>
          <Moon size={22} color="#fff" />
        </span>
        <p>Noite</p>
        <strong>
          {data.find((data) => { return (data.periodo == "NOITE") })?.quantidade ? data.find((data) => { return (data.periodo == "NOITE") })?.quantidade : "0"}
          {data.find((data) => { return (data.periodo == "NOITE") })?.periodo == "NOITE" && data.find((data) => { return (data.periodo == "NOITE") })?.maior ?
            <ArrowUp size={20} color="#7BD75B" weight="bold" /> :
            <ArrowDown size={20} color="#D75B5B" weight="bold" />
          }
        </strong>

      </ClassGraphCard>
      <ClassGraphCard>
        <span>
          <Clock size={22} color="#fff" />
        </span>
        <p>Integral</p>
        <strong>
          {data.find((data) => { return (data.periodo == "INTEGRAL") })?.quantidade ? data.find((data) => { return (data.periodo == "INTEGRAL") })?.quantidade : "0"}
          {data.find((data) => { return (data.periodo == "INTEGRAL") })?.periodo == "INTEGRAL" && data.find((data) => { return (data.periodo == "INTEGRAL") })?.maior ?
            <ArrowUp size={20} color="#7BD75B" weight="bold" /> :
            <ArrowDown size={20} color="#D75B5B" weight="bold" />
          }
        </strong>
      </ClassGraphCard>
    </ClassGraphContainer >
  );
}