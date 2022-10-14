import { Star } from "phosphor-react";
import React, { useEffect, useState } from "react";
import {
  ContainerStar,
  ContainerStarFill,
  ContainerStarNotFill,
} from "./style";

export function Rating({ handleGetValue, id }: any) {
  const [rating, setRating] = useState(1);

  useEffect(() => {
    handleGetValue(rating, id);
  }, [rating])

  const setValueRating = (e: React.ChangeEvent<any>) => {
    var value = e.target.getAttribute("a-key");
    setRating(value);
  };

  return (
    <ContainerStar>
      {[...Array(5)].map((_, i) => (
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
              <Star
                onClick={setValueRating}
                a-key={i + 1}
                size={40}
              />
            </ContainerStarNotFill>
          )}
        </span>
      ))}
    </ContainerStar>
  );
}
