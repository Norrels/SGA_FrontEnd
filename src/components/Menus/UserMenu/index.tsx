import {  SignOut } from "phosphor-react";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { EditUserModal } from "../../Header/components/EditProfileModal";
import { HeaderNavMenuContent, HeaderNavMenuItem } from "../../Header/style";
import { HeaderEditUserButton } from "./style";
import * as Dialog from "@radix-ui/react-dialog";
import * as Menubar from "@radix-ui/react-menubar";

export function UserMenu() {
  const { logout } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  function closeAulas() {
    setTimeout(() => {
      setOpen(true);
    }, 5);
  }

  return (
    <>
      <Menubar.Portal>
        <HeaderNavMenuContent align="center">
          <HeaderNavMenuItem asChild>
            <HeaderEditUserButton onClick={closeAulas}>
              Seu perfil
            </HeaderEditUserButton>
          </HeaderNavMenuItem>
          <HeaderNavMenuItem asChild>
            <HeaderEditUserButton onClick={() => logout()}>
              Sair <SignOut />
            </HeaderEditUserButton>
          </HeaderNavMenuItem>
        </HeaderNavMenuContent>
      </Menubar.Portal>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <EditUserModal closeModal={closeModal} />
      </Dialog.Root>
    </>
  );
}
