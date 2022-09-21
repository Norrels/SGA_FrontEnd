import styled from "styled-components";

export const HomeCalenderContainer = styled.section`
display: flex;
flex-direction: column;
gap: 2rem;
`;

export const HomeCalenderHeader = styled.header`
display: flex;
flex-direction: row;
justify-content: space-between;
position: sticky;
padding-top: 1rem;
padding-bottom: 1rem;
top: 0;

background: ${(props) => props.theme["background"]};
`;

export const HomeCalenderOrderBy = styled.span`
width: 15rem;

background: ${(props) => props.theme["white-400"]};
border-radius: 9px;

display: flex;
justify-content: center;
align-items: center;

p {
  background: linear-gradient(180deg, #25b5e9 45.83%, #367fbf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  font-family: "Inter";
  font-weight: 700;
  font-size: 1.25rem;
}
`;

export const HomeCalenderHeaderDays = styled.div`
display: grid;
grid-template-columns: repeat(7, 6.6rem);
flex-direction: row;
gap: 1.25rem;
`;

const DAY = {
today: "today",
notToday: 'notToday'
} as const;

interface DayProps {
days: keyof typeof DAY;
}

export const HomeCalenderDay = styled.span<DayProps>`
height: 6rem;
background: ${(props) => props.theme["white-400"]};

display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
border-radius: 9px;
gap: 0.563rem;

strong {
  background: ${(props) => {
    if (DAY[props.days] == "today") {
      return "#0031B0";
    } else if (DAY[props.days] == "notToday") {
      return "linear-gradient(180deg, #25B5E9 45.83%, #367FBF 100%);";
    }
  }};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  font-weight: 600;
  font-size: 2rem;
}

p {
  text-transform: capitalize; 
  font-weight: 700;
  font-size: 0.75rem;
}
`;


export const HomeCalenderContent = styled.main`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const HomePlaces = styled.span`
width: 15rem;
height: 10.3rem;

background: rgba(255, 255, 255, 0.5);
border-radius: 9px;

display: flex;
justify-content: center;
align-items: center;

p {
  color: ${(props) => props.theme["blue-500"]};

  font-family: "Inter";
  font-weight: 700;
  font-size: 1.25rem;
}
`;

export const HomeClassesContainer = styled.article`
display: grid;
grid-template-columns: repeat(7, 6.6rem);
flex-direction: row;
gap: 1.25rem;
`;

const PERIOD = {
morning: "blue-400",
afternoon: "blue-500",
night: "blue-600",
} as const;

interface ClassProps {
period: keyof typeof PERIOD;
}

export const HomeClasses = styled.div`
height: 10.3rem;
background: rgba(255, 255, 255, 0.5);

border-radius: 9px;

display: flex;
flex-direction: column;
justify-content: space-between;
gap: 0.5rem;

span {
  &:first-child {
    div {
      border-radius: 8px 8px 0px 0px;
    }
  }

   &:last-child {
    div {
      border-radius: 0px 0px 8px 8px;
    }
   
  }
}


`;

export const HomeClass = styled.div<ClassProps>`
display: flex;
flex-direction: column;
justify-content: center;
padding: 0.4rem;
border-radius: 0;

background-color: ${(props) => props.theme[PERIOD[props.period]]};
color: ${(props) => props.theme["white"]};


&:not(:has(p)) {
  background: transparent;
}

p {
  font-size: 1rem;
  font-weight: 700;
}
`;


export const HomeDivider = styled.span`
  opacity: 0.2;
  background-color: ${(props) => props.theme["gray-700"]};
  display: block;
  height: 1px;
  width: 100%;
  z-index: -1;
`;
