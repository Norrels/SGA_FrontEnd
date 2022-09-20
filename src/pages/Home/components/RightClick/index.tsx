import * as ContextMenu from '@radix-ui/react-context-menu';
import { RightClickContainer, RightClickItem, RightClickSeperator } from './style';

export function RightClick() {
  return (
    <ContextMenu.Portal>
      <RightClickContainer>
        <RightClickItem>
          Editar aula
        </RightClickItem>
        <RightClickSeperator/>
        <RightClickItem>
          Editar aulas
        </RightClickItem>
      </RightClickContainer>
    </ContextMenu.Portal>
  )
}