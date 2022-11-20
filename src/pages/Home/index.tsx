import * as Dialog from "@radix-ui/react-dialog";
import { ModalCreateNewClass } from "./components/ModalCreateNewClass";
import { Calender } from "./components/Calenders/PlacesCalender";
import { HomeSearchInput } from "./components/SearchInputHome";
import {
  HomeButtonContainer,
  HomeButtonCreate,
  HomeContainer,
  HomeContent,
  HomeTitleContainer,
  Load,
} from "./style";
import { addDays, eachDayOfInterval, nextDay, previousDay, startOfWeek } from "date-fns";
import { useState } from "react";
import { CalenderTeacher } from "./components/Calenders/TeacherCalender";

export function Home() {
  const today = new Date();
  //Dia de referencia
  const [referenceDay, setReferenceDay] = useState(today);

  const [openRegular, setOpenRegular] = useState(false);
  const [openFic, setOpenFic] = useState(false);
  const [openCustomizavel, setOpenCustomizavel] = useState(false);

  const [title, setTitle] = useState("")
  const [isViewClass, setIsViewClass] = useState("")

  const semana = startOfWeek(referenceDay, { weekStartsOn: 0 });

  function changeView(type : string){
    setIsViewClass(type)
  }

  const daysWeek = eachDayOfInterval({
    start: semana,
    end: addDays(semana, 6),
  });

  function nextDayWeek() {
    const nextWeek = startOfWeek(nextDay(semana, 0));
    setReferenceDay(nextWeek);
  }

  function previousDayWeek() {
    const previousWeekDay = startOfWeek(previousDay(semana, 0));
    setReferenceDay(previousWeekDay);
  }

  function choicedDay(Data : Date) {
    const dayChoiced = startOfWeek(new Date(Data))
    setReferenceDay(dayChoiced)
  }

  function closeModal() {
    setOpenRegular(false);
    setOpenFic(false);
    setOpenCustomizavel(false);
  }


  return (
    <HomeContainer>
      <HomeContent>
        <HomeTitleContainer>
          <h1>Bem Vindo</h1>
          <p>Selecione um tipo de curso e crie uma nova aula</p>
          <HomeButtonContainer>
            <HomeButtonCreate buttonsColor={1}>
              <Dialog.Root open={openRegular} onOpenChange={setOpenRegular}>
                <Dialog.Trigger asChild>
                  <button onClick={() => setTitle("regular")}>Regular</button>
                </Dialog.Trigger>
                <ModalCreateNewClass closeModal={closeModal} name={title} />
              </Dialog.Root>
            </HomeButtonCreate>
            <HomeButtonCreate buttonsColor={2}>
              <Dialog.Root open={openFic} onOpenChange={setOpenFic}>
                <Dialog.Trigger asChild>
                  <button onClick={() => setTitle("FIC")}>FIC</button>
                </Dialog.Trigger>
                <ModalCreateNewClass closeModal={closeModal} name={title} />
              </Dialog.Root>
            </HomeButtonCreate>
            <HomeButtonCreate buttonsColor={3}>
              <Dialog.Root open={openCustomizavel} onOpenChange={setOpenCustomizavel}>
                <Dialog.Trigger asChild>
                  <button onClick={() => setTitle("customizável")}>Customizável</button>
                </Dialog.Trigger>
                <ModalCreateNewClass closeModal={closeModal} name={title} />
              </Dialog.Root>
            </HomeButtonCreate>
          </HomeButtonContainer>
        </HomeTitleContainer>


        <HomeSearchInput  choiceTypeOfViewCalender={changeView} referenceDay={referenceDay} previousDayWeek={previousDayWeek} choiceDayWeek={choicedDay} nextDayWeek={nextDayWeek}/>
        
        {
          isViewClass == 'Professores' ?
          <Calender today={today} days={daysWeek} /> : <CalenderTeacher today={today} days={daysWeek} />
        }
      
      </HomeContent>
    </HomeContainer>
  );
}
