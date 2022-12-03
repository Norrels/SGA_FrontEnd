import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { Notification } from "../../../../components/Notification";
import { TeacherProps } from "../../../../contexts/ObjectsContext";
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
  name: string | undefined;
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

  const { handleSubmit, reset, getValues } = CreateNewClassForm;
  const [avaliableTeacher, setAvalibleTeachers] = useState<TeacherProps[]>();
  const [step, setStep] = useState(0);
  //Variavel para usado para exibir a notificaçãp
  const [open, setOpen] = useState(false);

  // Váriavel para controlar oque vai ser exibido na notificação
  const [notificationStataus, setNotificationStataus] = useState(false);

  function handleNextStep(step: number) {
    setStep(step);
    getAvailableInfo();
  }

  async function getAvailableInfo() {
    const res = await API.get("aula/valoresLivres");
    console.log(res);
    setAvalibleTeachers(res.data[0]);
  }

  async function handleCreateNewAula(datas: AulaType) {
    const data = {
      professor: {
        id: getValues("professor.id"),
      },
      ambiente: {
        id: getValues("ambiente.id"),
      },
    };

    const res = await API.post("aula", data);
    if (res.status == 200) {
      setNotificationStataus(true);
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
                      name={name}
                      handleNextStep={handleNextStep}
                    />
                  </FormProvider>
                </InputScroll>
                <InputScroll step={step}>
                  <FormProvider {...CreateNewClassForm}>
                    <SecondStepContent
                      teachers={avaliableTeacher}
                      handleNextStep={handleNextStep}
                    />
                  </FormProvider>
                </InputScroll>
                <InputScroll step={step}>
                  <FormProvider {...CreateNewClassForm}>
                    <ThirdStepContent />
                  </FormProvider>
                </InputScroll>
              </InputOverflow>
            </InputMain>
          </form>
        </Content>
      </Dialog.Portal>
      <Notification
        tipe={notificationStataus ? "Erro" : "Sucesso"}
        description={
          notificationStataus ? "Falha ao criar." : "Criado com sucesso."
        }
        title="Aula"
        openNotification={open}
        openNotificationMethod={openNotificantionMethod}
      />
    </>
  );
}
