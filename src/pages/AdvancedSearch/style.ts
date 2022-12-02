import styled, { keyframes } from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Accordion from "@radix-ui/react-accordion";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  } 
`;

const Open = keyframes` 
  from { height: 0; }
  to { height: 'var(--radix-accordion-content-height)'; }
`;

const Close = keyframes` 
  from { height: 'var(--radix-accordion-content-height)'; }
  to { height: 0; }
`;

export const AdvancedContainer = styled.main`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const AdvancedContent = styled.div`
  max-width: 1120px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AdvancedTitleContainer = styled.section`
  margin-top: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  opacity: 0;
  animation: ${fadeIn} 1s ease-in-out forwards;

  h1 {
    width: 100%;
    margin: 0.5rem;

    font-size: 2.813rem;
    font-weight: 800;
    background: linear-gradient(90deg, #0031b0 40.94%, #25b5e9 58.61%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    text-align: center;
  }

  p {
    width: 100%;
    font-size: 1.125rem;
    font-weight: 800;
    color: ${(props) => props.theme["sub-title"]};

    text-align: center;
  }
`;

export const AdvancedButtonContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  gap: 2rem;

  button {
    width: 12.5rem;
    height: 3.75rem;

    border: none;
    border-radius: 8px;

    color: ${(props) => props.theme["white"]};
    font-size: 1.125rem;
    font-weight: bold;

    transition-duration: 0.3s;

    &:first-child {
      background: linear-gradient(180deg, #25b5e9 0%, #5aadd1 100%);
    }

    &:hover {
      box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.2);
      transform: translateY(-5px);
    }
  }
`;

export const AdvancedSearchInput = styled.div`
  margin-top: 4.313rem;

  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: center;

  position: relative;

  gap: 1.8rem;

  opacity: 0;
  animation: ${fadeIn} 1s 0.2s ease-in-out forwards;

  z-index: 1000;

  button {
    width: 6.25rem;
    height: fit-content;
    padding: 15px 0px;

    border-radius: 8px;
    border: 2px solid ${(props) => props.theme["blue-600"]};
    font-size: 1rem;
    color: ${(props) => props.theme["blue-600"]};
    font-weight: 500;

    transition-duration: 0.3s;

    &:hover {
      background: ${(props) => props.theme["blue-600"]};
      color: ${(props) => props.theme["white"]};
    }

    :disabled {
      opacity: 30%;
      background: ${(props) => props.theme["blue-600"]};
      color: ${(props) => props.theme["white"]};
    }
  }
`;

export const AdvancedSearchInputContent = styled.div`
  width: 70%;
  input {
    width: 100%;
    height: 3.75rem;

    padding-left: 1.813rem;

    border: none;
    border-radius: 8px;
    background: #f9f9f9;
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);

    color: ${(props) => props.theme["black"]};
    font-weight: 700;
    font-size: 1rem;

    z-index: 1000;

    &:placeholder {
      font-weight: 500;
      color: ${(props) => props.theme["sub-title"]};
    }
  }
`;

// ARRUMAR ISSO AQUI QUANDO EU TIVER ACESSO AO BACKEND
// Minha idéia é tentar fazer o mais parecido com o yt possivel
// mas acho que vou colocar um overflowY: scroll se passar de determinada altura(height)
export const AdvancedSearchAutocompleteScroll = styled.div`
  width: 784px;
  max-height: 15rem;

  position: absolute;
  transform: translateY(-10px);

  border: none;
  border-radius: 0 0 8px 8px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);

  color: ${(props) => props.theme["black"]};
  font-weight: 700;
  font-size: 1rem;

  overflow: auto;

  z-index: -1;

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
  }
  ::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.9);
  }
`;

export const AdvancedSearchAutocomplete = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;

  gap: 0.6rem;

  p {
    margin-left: 30px;
    &:hover {
      cursor: pointer;
    }

    :first-child {
      margin-top: 30px;
    }

    :last-child {
      margin-bottom: 20px;
    }
  }
`;

export const AdvancedTableContent = styled.main`
  display: flex;

  gap: 2.625rem;
  height: 46.875rem;

  opacity: 0;
  animation: ${fadeIn} 1s 0.4s ease-in-out forwards;

  z-index: 0;

  aside {
    width: 25%;
    border-radius: 8px;
    padding: 1.875rem 1.25rem;
    background-color: ${(props) => props.theme["white"]};
    overflow: auto;
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);

    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.1);
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: rgba(0, 0, 0, 0.2);
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(0, 0, 0, 0.4);
    }
    ::-webkit-scrollbar-thumb:active {
      background: rgba(0, 0, 0, 0.9);
    }
  }
`;

export const AdvancedFilterItens = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 0.4rem;

  opacity: 0;
  animation: ${fadeIn} 0.3s ease-in-out forwards;

  input[type="date"] {
    padding: 5px 20px;

    background: ${(props) => props.theme["white-500"]};
    border: none;
    border-radius: 5px;
  }
`;

export const AdvancedFilterItensIndividual = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;

  span {
    margin: 0 5px;

    font-weight: 400;
    font-size: 0.938rem;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const AdvancedContentTitle = styled(Accordion.Header)`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme["gray-700"]};

  button {
    border: none;
    background: transparent;
    transition: transform 1s;
  }

  svg {
    transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  button[data-state="open"] {
    svg {
      transform: rotate(180deg);
    }
  }

  p {
    font-size: 1.125rem;
  }
`;

export const AdvancedFilterContainer = styled(Accordion.Root)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AdvancedFilterContent = styled(Accordion.Content)`
  &[data-state="open"] {
    animation: ${Open} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }

  &[data-state="close"] {
    animation: ${Close} 300ms cubic-bezier(0.87, 0, 0.13, 1);
  }
`;

export const AdvancedFilterLabel = styled.span`
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  margin-bottom: 1rem;
  gap: 0.3rem;
  align-items: center;
  font-weight: 700;

  opacity: 0;
  animation: ${fadeIn} 1s 0.4s ease-in-out forwards;

  z-index: 0;
`;

export const AdvancedFilterTotal = styled.span`
  display: flex;
  justify-content: right;
  margin: 1rem 0rem;

  p {
    text-align: center;
    width: 72%;
  }
`;

export const TableContaine = styled.section`
  width: 75%;
  height: 46.875rem;
  overflow: auto;
  border-radius: 8px;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  background: transparent;

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    position: absolute;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
  }
  ::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.9);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    height: 50;
    border-radius: 8px;
  }

  tbody {
    height: 10px;
    overflow: auto;
    box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  }

  thead th {
    height: 4.063rem;
    position: sticky;
    top: 0;
    color: ${(props) => props.theme["white"]};

    background: linear-gradient(180deg, #5aadd1 0%, #367fbf 100%);

    &:first-child {
      border-radius: 8px 0px 0px 0px;
    }

    &:last-child {
      border-radius: 0px 8px 0px 0px;
    }
  }

  tr {
    height: 3.438rem;

    background: ${(props) => props.theme["white"]};

    :nth-child(2n) {
      background: ${(props) => props.theme["white-200"]};
    }

    svg {
      cursor: pointer;
    }
  }

  td {
    vertical-align: middle;
    text-align: center;
    font-weight: 500;
  }
`;
