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
      console.log(res)
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
          <Sun size={22} color="#fff" /> :
        </span>
        <p>Manhã</p>
        <strong>
          {data.find((data) => {return(data.periodo == "MANHA")})?.quantidade}
        </strong>
        {data[1]?.periodo == "MANHA" && data[1]?.maior &&
          <ArrowUp size={20} color="#7BD75B" weight="bold" />
        }
      </ClassGraphCard>
      <ClassGraphCard>
        <span>
          <Sun size={22} color="#fff" /> :
        </span>
        <p>Manhã</p>
        <strong>
          {data.find((data) => {return(data.periodo == "TARDE")})?.quantidade}
        </strong>
        {data[1]?.periodo == "MANHA" && data[1]?.maior &&
          <ArrowUp size={20} color="#7BD75B" weight="bold" />
        }
      </ClassGraphCard>
      <ClassGraphCard>
        <span>
          <Sun size={22} color="#fff" /> :
        </span>
        <p>Manhã</p>
        <strong>
          {data[1]?.periodo == "MANHA" && data[1]?.quantidade}
        </strong>
        {data[1]?.periodo == "MANHA" && data[1]?.maior &&
          <ArrowUp size={20} color="#7BD75B" weight="bold" />
        }
      </ClassGraphCard>
      <ClassGraphCard>
        <span>
          <Sun size={22} color="#fff" /> :
        </span>
        <p>Manhã</p>
        <strong>
          {data[1]?.periodo == "MANHA" && data[1]?.quantidade}
        </strong>
        {data[1]?.periodo == "MANHA" && data[1]?.maior &&
          <ArrowUp size={20} color="#7BD75B" weight="bold" />
        }
      </ClassGraphCard>
    </ClassGraphContainer >
  );
}