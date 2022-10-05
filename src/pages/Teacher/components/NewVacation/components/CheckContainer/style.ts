import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const CheckContainerr = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 1.25rem 0;
`;

export const CheckContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.313rem;
`;

export const CheckIndividual = styled.div`
  display: flex;
  align-items: center;
  label {
    font-weight: 300;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.4);
    margin: 0 5px;
  }

  input {
    width: 20px;
    height: 20px;
  }
`;