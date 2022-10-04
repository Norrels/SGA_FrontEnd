import styled from "styled-components";

export const ContainerStar = styled.div`
  span {
    color: ${(props) => props.theme["blue-500"]};
  }

  margin-top: auto;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const ContainerStarFill = styled.span`
  svg {
    color: ${(props) => props.theme["blue-500"]};
  }
`;

export const ContainerStarNotFill = styled.span`
  svg {
    color: ${(props) => props.theme["gray-600"]};
  }
`;
