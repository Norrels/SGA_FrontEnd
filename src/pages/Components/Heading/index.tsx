import { TitleContainer } from "./style";

interface IHeadingProps {
  title: string;
  subtitle: string;
}

export function Heading({title, subtitle} : IHeadingProps) {
  return (
    <TitleContainer>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </TitleContainer>
  );
}
