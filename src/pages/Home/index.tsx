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
} from "./style";


export function Home() {
 
  return (
    <HomeContainer>
      <HomeContent>
        <HomeTitleContainer>
          <h1>Bem Vindo</h1>
          <p>Selecione um tipo de curso e crie uma nova aula</p>
          <HomeButtonContainer>
            <HomeButtonCreate buttonsColor={1}>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button>Regular</button>
                </Dialog.Trigger>
                <ModalCreateNewClass name="regular" />
              </Dialog.Root>
            </HomeButtonCreate>
            <HomeButtonCreate buttonsColor={2}>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button>FIC</button>
                </Dialog.Trigger>
                <ModalCreateNewClass name="FIC" />
              </Dialog.Root>
            </HomeButtonCreate>
            <HomeButtonCreate buttonsColor={3}>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button>Customizavel</button>
                </Dialog.Trigger>
                <ModalCreateNewClass name="customizável" />
              </Dialog.Root>
            </HomeButtonCreate>
          </HomeButtonContainer>
        </HomeTitleContainer>

     
        <HomeSearchInput/>
        <Calender/>
      </HomeContent>
    </HomeContainer>
  );
}
