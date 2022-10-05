import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, X } from "phosphor-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ObjectsContext, PlaceProps } from "../../../../Contexts/ObjectsContext";
import {
  CloseButton,
  ContainerButtonCreate,
  Content,
  InputContainer,
  InputContent,
  InputContentDupo,
  NoteButton,
  Overlay,
} from "./style";


export const placeInput = z.object({
  id: z.number(),
  nome: z.string(),
  capacidade: z.number(),
  tipoAmbiente: z.string(),
  cep: z.string(),
  complemento: z.string(),
  ativo: z.boolean(),
});

export type PlaceType = z.infer<typeof placeInput>;

interface EditPlaceModalProps {
  place: PlaceProps
}

export function EditPlaceModal({ place }: EditPlaceModalProps) {
  const { register, handleSubmit } = useForm<PlaceType>();
  const [editable, setEditable] = useState(true)
  const { updatePlaces } = useContext(ObjectsContext)

  async function handleUpdatePlace(data: PlaceType) {
    data.id = place.id
    updatePlaces(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <NoteButton>
          {editable && <NotePencil size={32} onClick={() => setEditable(false)} />}
        </NoteButton>
        <CloseButton>
          <X onClick={() => setEditable(true)} />
        </CloseButton>

        <Dialog.Title>Editar Ambiente</Dialog.Title>

        <form onSubmit={handleSubmit(handleUpdatePlace)}>
          <InputContainer>
            <InputContent>
              <label>Nome</label>
              <input
                type="text"
                defaultValue={place.nome}
                placeholder="Digite o nome do ambiente"
                {...register("nome")}
                readOnly={editable}
              />
            </InputContent>
            <InputContent>
              <label>Tipo</label>
              <select placeholder="Selecione o Tipo de Ambiente" disabled={editable}  {...register("tipoAmbiente")} defaultValue={place.tipoAmbiente}>
                <option value="UNIDADEMOVEL">Unidade Movel</option>
                <option value="PRESENCIAL">Presencial</option>
                <option value="EAD">EAD</option>
                <option value="ENTIDADE">Entidade</option>
                <option value="EMPRESA">Empresa</option>
              </select>

            </InputContent>

            <InputContentDupo>
              <div>
                <label>Capacidade</label>
                <input
                  defaultValue={place.capacidade}
                  readOnly={editable}
                  {...register("capacidade")}
                  type="text"
                  placeholder="Digite o nome do ambiente"
                />
              </div>
              <div>
                <label>CEP</label>
                <input
                  readOnly={editable}
                  type="text"
                  defaultValue={place.cep}
                  placeholder="Digite o cep"
                  {...register("cep")}
                />
              </div>


            </InputContentDupo>

            <InputContent>
              <label>Complemento</label>
              <input
                defaultValue={place.complemento}
                readOnly={editable}
                {...register("complemento")}
                type="text"
                placeholder="Digite o complemento"
              />
            </InputContent>
          </InputContainer>
          <ContainerButtonCreate>
            <button>Editar</button>
          </ContainerButtonCreate>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
