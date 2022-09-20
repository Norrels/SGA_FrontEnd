import styled from "styled-components";

export const SearchContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SearchContent = styled.div`
  max-width: 1120px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
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
  }
`;

export const SearchButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  button {
    width: 12.75rem;
    height: 3.75rem;

    border-radius: 8px;
    border: none;
    background-color: ${(props) => props.theme["blue-500"]};

    color: ${(props) => props.theme["white"]};
    font-size: 1.125rem;
    font-weight: bold;
  }
`;
export const SearchTitleContainer = styled.div`
  margin-top: 2rem;

  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;

  h1 {
    margin: 0.5rem;

    font-size: 2.813rem;
    font-weight: 800;
    color: ${(props) => props.theme["blue-500"]};
  }

  p {
    font-size: 1.125rem;

    font-weight: 800;
    color: ${(props) => props.theme["sub-title"]};
  }
`;

export const SearchList = styled.section`
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

export const SearchContainerInput = styled.div`
  width: 100%;

  input {
    width: 80%;
    margin-right: 20px;
  }

  button {
    color: #0031b0;
    border: 2px solid #0031b0;
    background-color: none;
    border-radius: 8px;
    width: 108px;
    height: 57px;
  }
`;

export const SearchDupoContainer = styled.div`
  position: absolute;

  left: 50px;
  top: 380px;

  width: 1800px !important;
  display: flex;

  grid-template-columns: 20% 80%;
`;

export const SearchFilterContainer = styled.div`
  width: 250px !important;
`;

export const SearchFilterContent = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 10px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const SearchFilterTitle = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #0031b0;
  }
`;

export const SearchListContainer = styled.div``;
