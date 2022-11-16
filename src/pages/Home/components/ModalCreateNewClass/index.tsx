import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, X } from "phosphor-react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
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

  const [step, setStep] = useState(0);

  function handleNextStep(step: number) {
    setStep(step);
  }

  async function handleCreateNewAula(data: AulaType) {
    const res = await API.post("aula", data);
    reset();
    closeModal();
  }


  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
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
                  <SecondStepContent handleNextStep={handleNextStep} />
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
  );
}
