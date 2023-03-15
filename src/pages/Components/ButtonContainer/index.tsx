import { ButtonModal, HeadingButtonContainer } from "./style";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import NewCourseModal from "../../Course/components/NewCourseModal";

export interface IButtonContainerProps {
  buttons: [
    {
      title: string;
      content: React.ReactNode;
      open: boolean;
      setOpen: () => void;
    }
  ];
}[];

export function ButtonContainer({ buttons }: IButtonContainerProps) {
  return (
    <HeadingButtonContainer>
      {buttons.map((button) => {
        return (
          <Dialog.Root open={button.open} onOpenChange={button.setOpen} key={button.title}>
            <Dialog.Trigger asChild>
              <ButtonModal>{button.title}</ButtonModal>
            </Dialog.Trigger>
            {button.content}
          </Dialog.Root>
        );
      })}
    </HeadingButtonContainer>
  );
}
