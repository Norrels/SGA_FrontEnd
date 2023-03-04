import {
  NivelStars,
} from "../../style";
import { useFormContext } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { Star } from "phosphor-react";
import { ThemeContext } from "styled-components";

interface SkillsSectionProps {
  index: number | undefined;
  defaultValue?: number | undefined;
}

export function StarsSection({ index, defaultValue }: SkillsSectionProps) {
  const { register, setValue } = useFormContext();

  const themeContext = useContext(ThemeContext)
  const [nivel, setNivel] = useState(defaultValue);
  
  useEffect(() => {
    setValue(`competencia.${index}.nivel`, nivel);
  }, [nivel]);

  return (
    <>
      <NivelStars>
        <Star
          size={37}
          weight="fill"
          color={nivel && nivel >= 1 ? themeContext!.primary_300 : "#E8E8E8"}
          onClick={() => setNivel(1)}
        />
        <Star
          size={37}
          weight="fill"
          color={nivel && nivel >= 2 ? themeContext!.primary_300 : "#E8E8E8"}
          onClick={() => setNivel(2)}
        />
        <Star
          size={37}
          weight="fill"
          color={nivel && nivel >= 3 ? themeContext!.primary_300 : "#E8E8E8"}
          onClick={() => setNivel(3)}
        />
        <Star
          size={37}
          weight="fill"
          color={nivel && nivel >= 4 ? themeContext!.primary_300 : "#E8E8E8"}
          onClick={() => setNivel(4)}
        />
        <Star
          size={37}
          weight="fill"
          color={nivel && nivel == 5 ? themeContext!.primary_300 : "#E8E8E8"}
          onClick={() => setNivel(5)}
        />
      </NivelStars>

      <input
        type="hidden"
        value={nivel}
        {...register(`competencia.${index}.nivel`, {value: nivel})}
      />
    </>
  );
}
