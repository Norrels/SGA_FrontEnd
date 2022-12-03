import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  } 
`;

export const Main = styled.main`
  width: 70rem;
  margin: 4rem auto;
`;

export const TeacherMain = styled.div`
  width: 70rem;

  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-between;

  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;
`;

export const TeacherMainProfile = styled.div`
  width: 43.75rem;
  padding: 1rem 2.8rem 1.563rem 2.8rem;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;

  background: ${(props) => props.theme["white"]};
  box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  svg {
    transition-duration: 0.3s;
    &:hover {
      color: ${(props) => props.theme["blue-300"]}
    }
  }
`;

export const TeacherProfileContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const DISPONIBILIDADE = {
  emAula: "blue-300",
  livre: "blue-500",
} as const;

interface DisponibilidadeProps {
  disponibilidade: keyof typeof DISPONIBILIDADE;
}

export const TeacherProfileLeft = styled.div<DisponibilidadeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    width: 150px;
    margin-top: 1rem;

    font-weight: 800;
    font-size: 25px;
    text-align: center;
    color: ${(props) => props.theme[DISPONIBILIDADE[props.disponibilidade]]};
  }

  span {
    background-color: ${(props) =>
      props.theme[DISPONIBILIDADE[props.disponibilidade]]};
  }

  img {
    border: 5px solid
      ${(props) => props.theme[DISPONIBILIDADE[props.disponibilidade]]};
  }
`;

export const TeacherProfileLeftPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    color: ${(props) => props.theme["white"]};
    font-weight: 700;
    padding: 0.1rem 1.3rem 0.2rem 1.3rem;
    border-radius: 30px;
    margin-bottom: -6px;
  }

  p {
    width: 100px;
  }

  img {
    width: 9.375rem;
    height: 9.375rem;
    display: block;
    filter: drop-shadow(0px 4px 4px rgba(37, 181, 233, 0.25));
    border-radius: 100px;
  }
`;

export const TeacherProfileSeparator = styled.div`
  width: 0.188rem;
  height: 18.75rem;
  background: ${(props) => props.theme["black"]};
  opacity: 0.1;
  border-radius: 2px;
`;

export const TeacherProfileSkills = styled.div`
  width: 25rem;
  height: 300px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  overflow-y: auto;

  h3 {
    font-weight: 800;
    font-size: 20px;
    margin-bottom: 1rem;
    color: ${(props) => props.theme["gray-700"]};
  }

  p {
    width: 50%;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    direction: ltr;
  }
`;

export const TeacherSkillsIndividual = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border-bottom: 2px solid ${(props) => props.theme["gray-400"]};

  p {
    font-weight: 600;
    font-size: 18px;
    color: ${(props) => props.theme["gray-700"]};
  }

  :nth-last-child(1) {
    border: none;
  }
`;

export const TeacherIndividualStars = styled.div`
  width: 11.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Absense = styled.div`
  width: 100%;
  margin: 2rem auto;
  input {
    width: 100%;
    height: 3.75rem;
    margin-top: 4.313rem;
    padding-left: 1.813rem;

    border: none;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);

    color: ${(props) => props.theme["black"]};
    font-weight: 700;
    font-size: 1rem;

    &:placeholder {
      font-weight: 500;
      color: ${(props) => props.theme["sub-title"]};
    }

    opacity: 0;
    animation: ${fadeIn} 1s 0.2s ease-in-out forwards;
  }
`;

export const AbsenseList = styled.div`
  width: 70rem;
  margin-top: 2rem;
  margin-bottom: 3rem;

  opacity: 0;
  animation: ${fadeIn} 1s 0.4s ease-in-out forwards;
`;
