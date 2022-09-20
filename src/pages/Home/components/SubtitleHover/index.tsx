import * as HoverCard from "@radix-ui/react-hover-card";
import { HoverCardContainer, HoverCardSubtitleColor } from "./style";

export function SubtitlteHover() {
  return (
    <HoverCard.Portal>
      <HoverCardContainer>
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
      </HoverCardContainer>
    </HoverCard.Portal>
  );
}
