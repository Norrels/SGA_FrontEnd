import * as Dialog from "@radix-ui/react-dialog";
import { ModalCreateNewClass } from "./components/ModalCreateNewClass";
import { Calender } from "./components/Calenders/PlacesCalender";
import { HomeSearchInput } from "./components/SearchInputHome";
import {
  ButtonTitle,
  HomeButtonContainer,
  HomeContainer,
  HomeContent,
  HomeTitleContainer,
} from "./style";
import {
  addDays,
  eachDayOfInterval,
  nextDay,
  previousDay,
  startOfWeek,
} from "date-fns";
import { useEffect, useState } from "react";
import { CalenderTeacher } from "./components/Calenders/TeacherCalender";
import { API } from "../../lib/axios";
import { AulaTypeSuper } from "../AdvancedSearch";

export function Home() {
  document.title = "Início | SGA";

  const today = new Date();
  //Dia de referencia
  const [referenceDay, setReferenceDay] = useState(today);

  const [openRegular, setOpenRegular] = useState(false);
  const [openFic, setOpenFic] = useState(false);
  const [openCustomizavel, setOpenCustomizavel] = useState(false);

  const [title, setTitle] = useState("");
  const [isViewClass, setIsViewClass] = useState("");

  /*   const [dayTypeMatch, setDayTypeMatch] = useState<String[]>([]);
  const [aula, setAula] = useState<AulaTypeSuper[]>([]);
  const [saveClassMatch, setSaveClassMatch] = useState<AulaTypeSuper[]>([]);

  const [classMatch, setClassMatch] = useState<AulaTypeSuper[]>([]); */

  const semana = startOfWeek(referenceDay, { weekStartsOn: 0 });

  function changeView(type: string) {
    setIsViewClass(type);
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

  function choicedDay(Data: Date) {
    const dayChoiced = startOfWeek(new Date(Data));
    setReferenceDay(dayChoiced);
  }

  function closeModal() {
    setOpenRegular(false);
    setOpenFic(false);
    setOpenCustomizavel(false);
  }

  /* useEffect(() => {
    handleGet();
  }, []);

  useEffect(() => {
    const saveDup = saveClassMatch.filter(
      (val, id) => saveClassMatch.indexOf(val) == id
    );

    setClassMatch(saveDup);
  }, [saveClassMatch]);

  async function handleGet() {
    const res = await API.get("aula");

    if (res.status == 200) {
      setAula(res.data);
      setClassMatch(res.data);
    }
  }

  function handleCreateArrayDayType(value: String) {
    if (dayTypeMatch.some((v) => v == value)) {
      setDayTypeMatch(dayTypeMatch.filter((c) => c !== value));
    } else {
      setDayTypeMatch([...dayTypeMatch, value]);
    }
  }

  useEffect(() => {
    handleMapArray();
    console.log(dayTypeMatch);
  }, [dayTypeMatch]);

  function handleMapArray() {
    let lastDayType = [...dayTypeMatch].pop();

    if (dayTypeMatch.length > 0) {
      const regex = new RegExp(`${lastDayType}`);
      var _l = aula.filter((value) => value.periodo.match(regex));

      if (_l.length == 0) {
        setSaveClassMatch([]);
      }

      if (_l.length > 0 && saveClassMatch.length == _l.length) {
        setSaveClassMatch([...saveClassMatch, ..._l]);
      }

      if(_l.length > 0) {
        setSaveClassMatch(_l);
      }

    } else {
      setSaveClassMatch(aula);
    }
  } */

  return (
    <HomeContainer>
      <HomeContent>
        <HomeTitleContainer>
          <h1>Bem Vindo</h1>
          <p>Selecione um tipo de curso e crie uma nova aula</p>
          <HomeButtonContainer>
            <Dialog.Root open={openRegular} onOpenChange={setOpenRegular}>
              <Dialog.Trigger asChild>
                <ButtonTitle onClick={() => setTitle("regular")}>
                  Regular
                </ButtonTitle>
              </Dialog.Trigger>
              <ModalCreateNewClass closeModal={closeModal} name={title} />
            </Dialog.Root>
            <Dialog.Root open={openFic} onOpenChange={setOpenFic}>
              <Dialog.Trigger asChild>
                <ButtonTitle onClick={() => setTitle("FIC")}>FIC</ButtonTitle>
              </Dialog.Trigger>
              <ModalCreateNewClass closeModal={closeModal} name={title} />
            </Dialog.Root>
            <Dialog.Root
              open={openCustomizavel}
              onOpenChange={setOpenCustomizavel}
            >
              <Dialog.Trigger asChild>
                <ButtonTitle onClick={() => setTitle("customizável")}>
                  Customizável
                </ButtonTitle>
              </Dialog.Trigger>
              <ModalCreateNewClass closeModal={closeModal} name={title} />
            </Dialog.Root>
          </HomeButtonContainer>
        </HomeTitleContainer>

        <HomeSearchInput
          /* handleCreateArrayDayType={handleCreateArrayDayType} */
          choiceTypeOfViewCalender={changeView}
          referenceDay={referenceDay}
          previousDayWeek={previousDayWeek}
          choiceDayWeek={choicedDay}
          nextDayWeek={nextDayWeek}
        />

        {isViewClass == "Professores" ? (
          <Calender today={today} days={daysWeek} />
        ) : (
          <CalenderTeacher today={today} days={daysWeek} />
        )}
      </HomeContent>
    </HomeContainer>
  );
}
