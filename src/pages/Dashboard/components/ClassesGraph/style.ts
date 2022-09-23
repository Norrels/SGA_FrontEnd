import styled from "styled-components"

export const ClassGraphContainer = styled.section`
  margin-top: 1.188rem;
  padding: 1.875rem;

  background: ${(props) => props.theme['white']};
  border-radius: 8px;
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ClassGraphText = styled.article`
  width: 10.375rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    color: ${(props) => props.theme['blue-300']};
    font-size: 1.563rem;
  }
`
