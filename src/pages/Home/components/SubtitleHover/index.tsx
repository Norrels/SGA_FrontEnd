import * as HoverCard from "@radix-ui/react-hover-card";
import { CaretUp } from "phosphor-react";
import { CaretUpContainer, HoverCardContainer, HoverCardSubtitleColor } from "./style";

export function SubtitlteHover() {
  return (
    <HoverCard.Portal>
      <HoverCardContainer>
        <CaretUpContainer><CaretUp color="#fff" size="30" weight="fill"/></CaretUpContainer>
        <h4>Legendas</h4>
        <hr />
        <p>
          <HoverCardSubtitleColor period="morning"></HoverCardSubtitleColor > Manhã
        </p>
        <p>
          <HoverCardSubtitleColor period="afternoon"></HoverCardSubtitleColor > Tarde
        </p>
        <p>
          <HoverCardSubtitleColor period="night"></HoverCardSubtitleColor > Noite
        </p>
        <p>
          <HoverCardSubtitleColor period="integral"></HoverCardSubtitleColor > Integral
        </p>
      </HoverCardContainer>
    </HoverCard.Portal>
  );
}
