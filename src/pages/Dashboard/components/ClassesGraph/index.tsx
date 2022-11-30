import { getDate, getMonth } from "date-fns";
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

  const [manha, setManha] = useState<Boolean>();
  const [tarde, setTarde] = useState<Boolean>();
  const [noite, setNoite] = useState<Boolean>();
  const [integral, setIntegral] = useState<Boolean>();

  const [qnt, setQnt] = useState<String>("0");

  useEffect(() => {
    if (qnt == "0") {
      handleGetValuesOfMonth();
      handleSetValues();
    }

    setTimeout(() => {
      setQnt("1");
    }, 800);
  }, [data]);

  async function handleGetValuesOfMonth() {
    const result = getDate(new Date());

    const res = await API.get(`aula/analise/${getMonth(result)}`);

    if (res.status == 200) {
      setData(res.data);
    }
  }

  async function handleSetValues() {
    if (data.some((data) => data.periodo == "MANHA")) {
      setManha(true);
    }
    if (data.some((data) => data.periodo == "TARDE")) {
      setTarde(true);
    }
    if (data.some((data) => data.periodo == "NOITE")) {
      setNoite(true);
    }
    if (data.some((data) => data.periodo == "INTEGRAL")) {
      setIntegral(true);
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
          {manha ? (
            data?.map((v) =>
              v.periodo == "MANHA" ? (
                <>
                  <>{v.quantidade == 0 ? "0" : <>{v.quantidade}</>}</>
                  <>
                    {v.maior ? (
                      <ArrowUp size={20} color="#7BD75B" weight="bold" />
                    ) : (
                      <ArrowDown size={20} color="#D75B5B" weight="bold" />
                    )}
                  </>
                </>
              ) : (
                ""
              )
            )
          ) : (
            <>
              0 <ArrowDown size={20} color="#D75B5B" weight="bold" />
            </>
          )}
        </strong>
      </ClassGraphCard>

      <ClassGraphCard>
        <span>
          <SunHorizon size={25} color="#fff" />
        </span>
        <p>Tarde</p>
        <strong>
          {tarde ? (
            data?.map((v) =>
              v.periodo == "TARDE" ? (
                <>
                  <>{v.quantidade == 0 ? "0" : <>{v.quantidade}</>}</>
                  <>
                    {v.maior ? (
                      <ArrowUp size={20} color="#7BD75B" weight="bold" />
                    ) : (
                      <ArrowDown size={20} color="#D75B5B" weight="bold" />
                    )}
                  </>
                </>
              ) : (
                ""
              )
            )
          ) : (
            <>
              0 <ArrowDown size={20} color="#D75B5B" weight="bold" />
            </>
          )}
        </strong>
      </ClassGraphCard>

      <ClassGraphCard>
        <span>
          <Moon size={22} color="#fff" />
        </span>
        <p>Noite</p>
        <strong>
          {noite ? (
            data?.map((v) =>
              v.periodo == "NOITE" ? (
                <>
                  <>{v.quantidade == 0 ? "0" : <>{v.quantidade}</>}</>
                  <>
                    {v.maior ? (
                      <ArrowUp size={20} color="#7BD75B" weight="bold" />
                    ) : (
                      <ArrowDown size={20} color="#D75B5B" weight="bold" />
                    )}
                  </>
                </>
              ) : (
                ""
              )
            )
          ) : (
            <>
              0 <ArrowDown size={20} color="#D75B5B" weight="bold" />
            </>
          )}
        </strong>
      </ClassGraphCard>

      <ClassGraphCard>
        <span>
          <Clock size={20} color="#fff" />
        </span>
        <p>Integral</p>
        <strong>
          {integral ? (
            data?.map((v) =>
              v.periodo == "INTEGRAL" ? (
                <>
                  <>{v.quantidade == 0 ? "0" : <>{v.quantidade}</>}</>
                  <>
                    {v.maior ? (
                      <ArrowUp size={20} color="#7BD75B" weight="bold" />
                    ) : (
                      <ArrowDown size={20} color="#D75B5B" weight="bold" />
                    )}
                  </>
                </>
              ) : (
                ""
              )
            )
          ) : (
            <>
              0 <ArrowDown size={20} color="#D75B5B" weight="bold" />
            </>
          )}
        </strong>
      </ClassGraphCard>
    </ClassGraphContainer>
  );
}
