import styled from "styled-components";

const DISPONIBILIDADE = {
  emAula: 'blue-300',
  livre: 'blue-500'
} as const

interface DisponibilidadeProps {
  disponibilidade: keyof typeof DISPONIBILIDADE
}

export const TeacherCardContainer = styled.article<DisponibilidadeProps>`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  img {
    border-radius: 99999px;

    width: 50px;
    height: 50px;
  }

  span {
    font-size: 14px;
    font-weight: bold;
    color: ${(props) => props.theme[DISPONIBILIDADE[props.disponibilidade]]};
  }
`;

export const TeacherCardText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.2rem;

    strong {
        font-size: 1rem;
    }
  }

  p {
    font-weight: 500;
  }
`;
