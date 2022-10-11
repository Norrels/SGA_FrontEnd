import styled from "styled-components";

export const TeacherGraphContainer = styled.section`
  background-color: ${(props) => props.theme["white-200"]};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 9px;
  padding: 1.875rem 2.813rem;

  footer {
    display: flex;
    justify-content: space-between;
    
    article {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    div {
      display: flex;
      flex-direction: row;
    }
  }
`;

export const TeacherGraphTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TeacherGraphLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: ${(props) => props.theme["blue-300"]};
    font-size: 1.563rem;
    font-weight: 700;
  }

  p {
    font-weight: 700;
  }
`;

export const TeacherGraphSelects = styled.div`
  display: flex;
  align-items: center;
  gap: 1.063rem;

  select {
    width: 7.5rem;
    height: 2.813rem;
    border: none;
    border-radius: 8px;
    text-align: center;
    color: ${(props) => props.theme["white"]};
    font-weight: 500;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    :first-child {
      background-color: ${(props) => props.theme["blue-300"]}
    }

    :last-child {
      background-color: ${(props) => props.theme["blue-400"]}
    }
  }
`;

export const TeacherGraphs = styled.div`
  height: auto;
  padding: 3rem 0;

  div {
    position: relative;
    display: flex;

    padding-left: 0.3rem;
  }

  h4 {
    width: 100%;
    text-align: center
  }
`;


export const TeacherGraphDescription = styled.article`
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  h5 {
    display: flex;
    align-items: center;

    :first-child {
      color: ${(props) => props.theme["blue-500"]}
    }

    :last-child {
      color: ${(props) => props.theme["gray-500"]}
    }
  }

 svg {
    margin-right: 10px;
    align-items: center;
  }

  p {
    display: flex;
  }
`

export const TeacherGraphSubtitle = styled.article`
  display: flex;
  justify-content: left;
  flex-direction: column;

  p {
    font-size: 0.9rem;
    font-weight: 600;
    gap: 1rem;
    text-align: right;
  }
`

export const TeacherGraphSubtitleSpan = styled.article`
    span {
    height: 1.25rem;
    width: 1.25rem;
    display: block;
    
    :first-child {
      background-color: ${(props) => props.theme["blue-300"]}
    }

    :last-child {
      background-color: ${(props) => props.theme["gray-400"]}
    }
  }
`

export const TeacherGraphSubtitles = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`
