import {
  NivelStars,
} from "../../style";
import { useFormContext } from "react-hook-form";
import { useEffect, useState } from "react";
import { Star } from "phosphor-react";

interface SkillsSectionProps {
  index: number | undefined;
}

export function StarsSection({ index }: SkillsSectionProps) {
  const { register, setValue } = useFormContext();

  const [nivel, setNivel] = useState(1);

  
  useEffect(() => {
    setValue(`competencia.${index}.nivel`, nivel);
  }, [nivel]);

  return (
    <>
      <NivelStars>
        <Star
          size={37}
          weight="fill"
          color={nivel >= 1 ? " #25B5E9" : "#E8E8E8"}
          onClick={() => setNivel(1)}
        />
        <Star
          size={37}
          weight="fill"
          color={nivel >= 2 ? " #25B5E9" : "#E8E8E8"}
          onClick={() => setNivel(2)}
        />
        <Star
          size={37}
          weight="fill"
          color={nivel >= 3 ? " #25B5E9" : "#E8E8E8"}
          onClick={() => setNivel(3)}
        />
        <Star
          size={37}
          weight="fill"
          color={nivel >= 4 ? " #25B5E9" : "#E8E8E8"}
          onClick={() => setNivel(4)}
        />
        <Star
          size={37}
          weight="fill"
          color={nivel == 5 ? " #25B5E9" : "#E8E8E8"}
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
