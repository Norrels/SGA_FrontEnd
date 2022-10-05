import * as ContextMenu from "@radix-ui/react-context-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { EditAllClassModal } from "../EditAllClassModal";
import { EditClassModal } from "../EditClassModal";
import {
  RightClickContainer,
  RightClickItem,
  RightClickSeperator,
} from "./style";

export function RightClick() {
  return (
    <ContextMenu.Portal>
      <RightClickContainer>
        <RightClickItem as={Dialog.Root}>
          <Dialog.Trigger>Editar aula</Dialog.Trigger>

          <EditClassModal />
        </RightClickItem>
        <RightClickSeperator />
        <RightClickItem as={Dialog.Root}>
          <Dialog.Trigger>Editar aulas</Dialog.Trigger>
          <EditAllClassModal />
        </RightClickItem>
      </RightClickContainer>
    </ContextMenu.Portal>
  );
}
