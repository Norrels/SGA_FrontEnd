import styled from "styled-components";

export const TeacherBlockContent = styled.div`
    display: grid;
    grid-template-columns: 20% 50% 30%;

    img {
        border-radius: 50px;

        width: 50px;
        height: 50px;
    }

    margin: 0px 0 10px 0;

    margin-bottom: 50px;

    :last-child{
        margin-bottom: 0;
    }

    span {
        margin-top: -25px;

        font-size: 14px;
        font-weight: bold;
        color: ${(props) => props.theme["blue-400"]};
    }

    align-items: center;
`;

export const TeacherText = styled.div`
    margin: 10px 0 0 10px;

    
`;