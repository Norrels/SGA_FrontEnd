import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Notification } from "../../../../components/Notification";
import { PlaceProps, TeacherProps } from "../../../../contexts/ResourcesContext";
import { API } from "../../../../lib/axios";
import { FirstStepContent } from "./components/FirstStepContent";
import { SecondStepContent } from "./components/SecondStepContent";
import { ThirdStepContent } from "./components/ThirdStepContent";
import {
  Content,
  HeaderButtons,
  InputMain,
  InputOverflow,
  InputScroll,
  ModalHeader,
  Overlay,
} from "./style";


export interface classPropsFirstStep {
  curso: {
    id: any;
  };
  unidadeCurricular: any;
  codTurma: any;
  periodo: any;
  dataInicio: string;
  diaSemana: boolean[];
  cargaDiaria: any;
}

export const aulaInput = z.object({
  codTurma: z.string(),
  periodo: z.string(),
  dataInicio: z.date(),
  cargaDiaria: z.string(),
  diaSemana: z.boolean().array(),
  unidadeCurricular: z.object({
    id: z.number(),
  }),
  professor: z.object({
    id: z.number(),
  }),
  ambiente: z.object({
    id: z.number(),
  }),
  curso: z.object({
    id: z.number(),
  }),
});

export type AulaType = z.infer<typeof aulaInput>;

//Propriedades da Modal
interface ModalCreateNewClassProps {
  name: string;
  closeModal(): void;
}

export function ModalCreateNewClass({
  name,
  closeModal,
}: ModalCreateNewClassProps) {
  const CreateNewClassForm = useForm<AulaType>({
    defaultValues: {
      diaSemana: [false],
    },
  });

  const { handleSubmit, reset } = CreateNewClassForm;
  const [avaliableTeacher, setAvalibleTeachers] = useState<TeacherProps[]>();
  const [avaliablePlaces, setAvaliblePlaces] = useState<PlaceProps[]>();
  const [dataFim, setDataFim] = useState("")
  const [step, setStep] = useState(0);
  //Variavel para usado para exibir a notificaçãp
  const [open, setOpen] = useState(false);

  // Váriavel para controlar oque vai ser exibido na notificação
  const [notificationStataus, setNotificationStataus] = useState(false);

  function handleNextStep(step: number) {
    setStep(step);

  }

  async function fetchTeacherAndPlacesAvalible(data: classPropsFirstStep ) {
      const res = await API.post("/aula/criar", data);

      
      setDataFim(res.data[0])
      setAvalibleTeachers(res.data[1])
      setAvaliblePlaces(res.data[2])
      
  }

  async function handleCreateNewAula(datas: AulaType) {
    const res = await API.post("aula", datas);
    if (res.status == 200) {
      setNotificationStataus(true);
      onCloseModalCLasses()
    } else {
      setNotificationStataus(false);
    }
    setOpen(true);
  }

  function openNotificantionMethod() {
    setOpen(false);
  }

  function onCloseModalCLasses() {
    reset();
    closeModal();
    setStep(0);
  }

  return (
    <>
      <Dialog.Portal>
        <Overlay />
        <Content onCloseAutoFocus={() => reset()}>
          <ModalHeader>
            <Dialog.Title>Nova aula {name}</Dialog.Title>
            <HeaderButtons>
              {step !== 0 && (
                <ArrowLeft
                  onClick={() => {
                    step == 2 ? setStep(1) : step == 1 && setStep(0);
                  }}
                  size={50}
                  weight="light"
                />
              )}
              <Dialog.Close
                onClick={() => {
                  setStep(0);
                }}
              >
                <X size={50} weight="light" />
              </Dialog.Close>
            </HeaderButtons>
          </ModalHeader>
          <form onSubmit={handleSubmit(handleCreateNewAula)}>
            <InputMain>
              <InputOverflow>
                <InputScroll step={step}>
                  <FormProvider {...CreateNewClassForm}>
                    <FirstStepContent
                      createFirstStep={fetchTeacherAndPlacesAvalible}
                      name={name.toLowerCase()}
                      handleNextStep={handleNextStep}
                    />
                  </FormProvider>
                </InputScroll>
                <InputScroll step={step}>
                  <FormProvider {...CreateNewClassForm}>
                    <SecondStepContent
                      teachers={avaliableTeacher}
                      places={avaliablePlaces}
                      handleNextStep={handleNextStep}
                    />
                  </FormProvider>
                </InputScroll>
                <InputScroll step={step}>
                  <FormProvider {...CreateNewClassForm}>
                    <ThirdStepContent lastDay={dataFim}/>
                  </FormProvider>
                </InputScroll>
              </InputOverflow>
            </InputMain>
          </form>
        </Content>
      </Dialog.Portal>
      <Notification
        tipe={!notificationStataus ? "Erro" : "Sucesso"}
        description={
          !notificationStataus ? "Falha ao criar." : "Criado com sucesso."
        }
        title="Aula"
        openNotification={open}
        openNotificationMethod={openNotificantionMethod}
      />
    </>
  );
}
