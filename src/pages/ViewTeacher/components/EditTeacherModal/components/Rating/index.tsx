import { Star } from "phosphor-react";
import React, { useState } from "react";
import {
  ContainerStar,
  ContainerStarFill,
  ContainerStarNotFill,
} from "./style";

interface rateValue {
  nivelHabilidade: number;
  edit_: boolean;
}

export function Rating({ nivelHabilidade, edit_ }: rateValue) {
  // console.log(nivelHabilidade);

  const [rating, setRating] = useState(nivelHabilidade || 0);
  const setValueRating = (e: React.ChangeEvent<any>) => {
    // console.log(e.target.getAttribute("a-key"));
    var value = e.target.getAttribute("a-key");
    setRating(value);
  };

  return (
    <ContainerStar>
      {edit_ ? [...Array(5)].map((_, i) => (
        <span key={i}>
          {rating > i ? (
            <ContainerStarFill>
              <Star
                onClick={setValueRating}
                a-key={i + 1}
                weight="fill"
                size={40}
              />
            </ContainerStarFill>
          ) : (
            <ContainerStarNotFill>
              <Star onClick={setValueRating} a-key={i + 1} size={40} />
            </ContainerStarNotFill>
          )}
        </span>
      )) : [...Array(5)].map((_, i) => (
        <span key={i}>
          {rating > i ? (
            <ContainerStarFill>
              <Star
                a-key={i + 1}
                weight="fill"
                size={40}
              />
            </ContainerStarFill>
          ) : (
            <ContainerStarNotFill>
              <Star a-key={i + 1} size={40} />
            </ContainerStarNotFill>
          )}
        </span>
      ))}
    </ContainerStar>
  );
}
