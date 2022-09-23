import { ArrowDown, ArrowUp, Clock, Moon, Sun, SunHorizon } from "phosphor-react";
import { BlockDay, SecondBlock, SecondBlockContainer, SecondBlockContent } from "../../style";
import { ClassGraphContainer, ClassGraphText } from "./style";

export function ClassGraph() {
  return (
    <ClassGraphContainer>
   
      <ClassGraphText>
        <h3>Aulas</h3>
        <p>
          Estáticas gerais
           por aulas em relação
           ao mes anterior
        </p>
      </ClassGraphText>

      <SecondBlockContent>
        <BlockDay arrow={1}>
          <span>
            <Sun size={24} />
          </span>
          <p>Manhã</p>
          <h2>
            20 <ArrowUp size={20} />
          </h2>
        </BlockDay>
      </SecondBlockContent>
      <SecondBlockContent>
        <BlockDay arrow={1}>
          <span>
            <SunHorizon size={24} />
          </span>
          <p>Tarde</p>
          <h2>
            22 <ArrowUp size={20} />
          </h2>
        </BlockDay>
      </SecondBlockContent>
      <SecondBlockContent>
        <BlockDay arrow={2}>
          <span>
            <Moon size={24} />
          </span>
          <p>Noite</p>
          <h2>
            9 <ArrowDown size={20} />
          </h2>
        </BlockDay>
      </SecondBlockContent>
      <SecondBlockContent>
        <BlockDay arrow={1}>
          <span>
            <Clock size={24} />
          </span>
          <p>Integral</p>
          <h2>
            5 <ArrowUp size={20} />
          </h2>
        </BlockDay>
      </SecondBlockContent>
  </ClassGraphContainer>
  )
}