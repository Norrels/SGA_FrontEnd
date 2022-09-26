import {
  ArrowDown,
  ArrowUp,
  Clock,
  Moon,
  Sun,
  SunHorizon,
} from "phosphor-react";
import { ClassGraphCard, ClassGraphContainer, ClassGraphText } from "./style";

export function ClassGraph() {
  return (
    <ClassGraphContainer>
      <ClassGraphText>
        <h3>Aulas</h3>
        <p>Estáticas gerais por aulas em relação ao mes anterior</p>
      </ClassGraphText>

      <ClassGraphCard>
        <span>
          <Sun size={22} color="#fff" />
        </span>
        <p>Manhã</p>
        <strong>
          20 <ArrowUp size={20} color="#7BD75B" weight="bold"/>
        </strong>
      </ClassGraphCard>

      <ClassGraphCard>
        <span>
          <SunHorizon size={25} color="#fff" />
        </span>
        <p>Tarde</p>
        <strong>
          22 <ArrowUp size={20} color="#7BD75B" weight="bold"/>
        </strong>
      </ClassGraphCard>

      <ClassGraphCard>
        <span>
          <Moon size={22} color="#fff"  />
        </span>
        <p>Noite</p>
        <strong>
          9 <ArrowDown size={20} color="#D75B5B" weight="bold"/>
        </strong>
      </ClassGraphCard>

      <ClassGraphCard>
        <span>
          <Clock size={20} color="#fff"/>
        </span>
        <p>Integral</p>
        <strong>
          5 <ArrowUp size={20} color="#7BD75B" weight="bold"/>
        </strong>
      </ClassGraphCard>
    </ClassGraphContainer>
  );
}
