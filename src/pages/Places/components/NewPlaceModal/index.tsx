import * as Dialog from "@radix-ui/react-dialog";
import { Plus, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  CloseButton,
  ContainerButtonCreate,
  ContainerInputStar,
  ContainerNewCompt,
  Content,
  ContentSelect,
  InputContainer,
  InputContent,
  InputContentDupo,
  InputContentScroll,
  NewCompt,
  Overlay,
} from "./style";

interface NewPlaceModalProps {
  addNewPlace: (data: NewPlaceType) => void;
}

const newPlaceModalInput = z.object({
  id: z.number(),
  nome: z.string(),
  capacidade: z.number(),
  tipoAmbiente: z.enum(["UNIDADE_MOVEL", "PRESENCIAL", "EAD", "ENTIDADE", "EMPRESA"]),
  cep: z.string(),
  complemento: z.string(),
  ativo: z.boolean(),
})

export type NewPlaceType = z.infer<typeof newPlaceModalInput>

export function NewPlaceModal({ addNewPlace }: NewPlaceModalProps) {
  const { register, handleSubmit, reset } = useForm<NewPlaceType>()

  function handleCreateNewPlace(data: NewPlaceType) {
    addNewPlace(data)
    console.log(data)
    reset()
  }
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <form onSubmit={handleSubmit(handleCreateNewPlace)}>
          <CloseButton>
            <X />
          </CloseButton>

          <Dialog.Title>Novo Ambiente</Dialog.Title>

          <InputContainer>
            <InputContent>
              <label>Nome</label>
              <input type="text" placeholder="Digite o nome do ambiente" {...register("nome")} />
            </InputContent>

            <InputContent>
              <label>Tipo</label>
              <select placeholder="Selecione o Tipo de Ambiente" {...register("tipoAmbiente")}>
                <option>Unidade Movel</option>
                <option>Presencial</option>
                <option>EAD</option>
                <option>Entidade</option>
                <option>Empresa</option>
              </select>
            </InputContent>

            <InputContentDupo>
              <div>
                <label>Capacidade</label>
                <input type="text" placeholder="Digite o nome do ambiente" {...register("capacidade")}/>
              </div>
              <div>
                <label>CEP</label>
                <input type="text" placeholder="Digite o cep" {...register("cep")} />
              </div>
            </InputContentDupo>

            <InputContent>
              <label>Complemento</label>
              <input type="text" placeholder="Digite o complemento" {...register("complemento")} />
            </InputContent>
          </InputContainer>
          <ContainerButtonCreate>
            <button>Criar</button>
          </ContainerButtonCreate>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
