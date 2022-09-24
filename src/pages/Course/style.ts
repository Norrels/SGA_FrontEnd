import styled from "styled-components";

export const CourseContainer = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CourseContent = styled.div`
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

export const CourseButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;

  button {
    width: 12.75rem;
    height: 3.75rem;

    border-radius: 8px;
    border: none;
    background: linear-gradient(180deg, #25B5E9 0%, #5AADD1 100%);

    color: ${(props) => props.theme["white"]};
    font-size: 1.125rem;
    font-weight: bold;
  }
`;

export const CourseTitleContainer = styled.div`
  margin-top: 2rem;

  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;

  h1 {
    width: 100%;
    margin: 0.5rem;

    font-size: 2.813rem;
    font-weight: 800;
    background: linear-gradient(
      90deg,
      #0f62ab 38.16%,
      #0031b0 38.16%,
      #25b5e9 64.48%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1.125rem;

    font-weight: 800;
    color: ${(props) => props.theme["sub-title"]};
  }
`;

export const CourseList = styled.section`
  margin-top: 2rem;
  margin-bottom: 3rem;
`;
