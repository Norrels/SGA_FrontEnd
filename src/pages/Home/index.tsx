import * as Dialog from "@radix-ui/react-dialog";
import { ModalCreateNewClass } from "./components/ModalCreateNewClass";
import { Calender } from "./components/Calender";
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
import Engrenagem from "../../assets/engrenagem.svg";


export function Home() {
  const today = new Date();
  //Dia de referencia
  const [referenceDay, setReferenceDay] = useState(today);
  const [open, setOpen] = useState(false);

  const semana = startOfWeek(referenceDay, { weekStartsOn: 0 });

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
    setOpen(false);
  }

  return (
    <HomeContainer>
      {/* <Load>
        <img src={Engrenagem}/>
      </Load> */}
      <HomeContent>
        <HomeTitleContainer>
          <h1>Bem Vindo</h1>
          <p>Selecione um tipo de curso e crie uma nova aula</p>
          <HomeButtonContainer>
            <HomeButtonCreate buttonsColor={1}>
              <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                  <button>Regular</button>
                </Dialog.Trigger>
                <ModalCreateNewClass closeModal={closeModal} name="Regular" />
              </Dialog.Root>
            </HomeButtonCreate>
            <HomeButtonCreate buttonsColor={2}>
              <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                  <button>FIC</button>
                </Dialog.Trigger>
                <ModalCreateNewClass closeModal={closeModal} name="FIC" />
              </Dialog.Root>
            </HomeButtonCreate>
            <HomeButtonCreate buttonsColor={3}>
              <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger asChild>
                  <button>Customizavel</button>
                </Dialog.Trigger>
                <ModalCreateNewClass closeModal={closeModal} name="customizável" />
              </Dialog.Root>
            </HomeButtonCreate>
          </HomeButtonContainer>
        </HomeTitleContainer>


        <HomeSearchInput referenceDay={referenceDay} previousDayWeek={previousDayWeek} choiceDayWeek={choicedDay} nextDayWeek={nextDayWeek}/>
        <Calender today={today} days={daysWeek} />
      </HomeContent>
    </HomeContainer>
  );
}
