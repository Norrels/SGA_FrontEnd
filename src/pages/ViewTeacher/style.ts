import styled from "styled-components";

export const TeacherMain = styled.main `
    width: 70rem;
    margin: 8rem auto;
    
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-between;
`;

export const TeacherMainProfile = styled.div `
    width: 40.625rem;
    padding: 1rem 2.8rem 1.563rem 2.8rem;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    background: ${(props) => props.theme["white"]};
    box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`;

export const TeacherProfileContent = styled.div `
    width: 100%;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TeacherProfileLeft = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        margin-top: 1rem;

        font-weight: 800;
        font-size: 30px;
        text-align: center;
        color: ${(props) => props.theme["blue-300"]};
    }
`;

export const TeacherProfileLeftPhoto = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
        color: ${(props) => props.theme["white"]};
        background-color: ${(props) => props.theme["blue-300"]};
        font-weight: 700;
        padding: 0.1rem 1.3rem 0.2rem 1.3rem;
        border-radius: 30px;
        margin-bottom: -6px;
    }

    img {
        width: 9.375rem;
        height: 9.375rem;
        display: block;
        border: 5px solid #25B5E9;
        filter: drop-shadow(0px 4px 4px rgba(37, 181, 233, 0.25));
        border-radius: 100px;
    }
`;

export const TeacherProfileSeparator = styled.div `
    width: 0.188rem;
    height: 18.75rem;
    background: ${(props) => props.theme["black"]};
    opacity: 0.1;
    border-radius: 2px;
`;

export const TeacherProfileSkills = styled.div `
    width: 21.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h3 {
        font-weight: 800;
        font-size: 20px;
        margin-bottom: 1rem;;

        color: ${(props) => props.theme["gray-700"]};
    }
`;

export const TeacherSkillsIndividual = styled.div `
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

export const TeacherIndividualStars = styled.div `
    width: 11.25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
`;