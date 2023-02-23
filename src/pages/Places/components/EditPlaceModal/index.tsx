import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { NotePencil, X } from "phosphor-react";
import { ChangeEvent, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ResourcesContext } from "../../../../contexts/ResourcesContext";
import { allValidation, NewPlaceType } from "../NewPlaceModal";
import InputMask from "react-input-mask";
import {
  Content,
  FinalButton,
  HeaderButtons,
  InputContainer,
  InputContent,
  InputIndividual,
  InputScroll,
  ModalHeader,
  Overlay,
} from "./style";
import { Notification } from "../../../../components/Notification";

interface EditPlaceModalProps {
  place: NewPlaceType;
  closeModal: () => void;
}

export function EditPlaceModal({ place, closeModal }: EditPlaceModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewPlaceType>({ resolver: zodResolver(allValidation) });
  const [editable, setEditable] = useState(false);
  const { updatePlaces } = useContext(ResourcesContext);

  //Variavel para usado para exibir a notificaçãp
  const [open, setOpen] = useState(false);

  // Váriavel para controlar oque vai ser exibido na notificação
  const [notificationStataus, setNotificationStataus] = useState(false);

  async function handleUpdatePlace(data: NewPlaceType) {
    data.id = place.id;
    updatePlaces(data)
      .then(() => {
        onCloseModalEditPlaces();
      })
      .catch(() => setNotificationStataus(true));
    setOpen(true);
    onCloseModalEditPlaces();
  }

  function openNotificantionMethod() {
    setOpen(false);
  }

  function firstLetterUppercase(value: string) {
    value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    return value;
  }

  function onCloseModalEditPlaces() {
    reset();
    setEditable(false);
    closeModal();
  }

  return (
    <>
      <Dialog.Portal>
        <Overlay />
        <Content onCloseAutoFocus={() => onCloseModalEditPlaces()}>
          <ModalHeader>
            <Dialog.Title>
              {!editable ? "Ambiente" : "Editar ambiente"}
            </Dialog.Title>
            <HeaderButtons>
              {!editable && (
                <button onClick={() => setEditable(true)}>
                  <NotePencil size={50} weight="light" />
                </button>
              )}
              <Dialog.Close>
                <X size={50} weight="light" />
              </Dialog.Close>
            </HeaderButtons>
          </ModalHeader>
          <form onSubmit={handleSubmit(handleUpdatePlace)}>
            <InputScroll>
              <InputContainer>
                <InputContent disabled={"on"}>
                  <label>Nome</label>
                  <input
                    type="text"
                    placeholder="Digite o nome do ambiente"
                    defaultValue={place.nome}
                    {...register("nome", {
                      setValueAs: (v) => firstLetterUppercase(v),
                    })}
                    minLength={4}
                    maxLength={20}
                    required
                    readOnly={!editable}
                  />
                  {errors.nome && <p>{errors.nome.message}</p>}
                </InputContent>
                <InputContent disabled={"disabled"}>
                  <label>Tipo</label>
                  <select
                    placeholder="Selecione o tipo do ambiente"
                    defaultValue={place.tipo}
                    {...register("tipo")}
                  >
                    <option value="UNIDADE_MOVEL">Unidade Movel</option>
                    <option value="PRESENCIAL">Presencial</option>
                    <option value="REMOTO">Remoto</option>
                    <option value="ENTIDADE">Entidade</option>
                    <option value="EMPRESA">Empresa</option>
                  </select>
                </InputContent>
                <InputContent disabled={"on"}>
                  <InputIndividual>
                    <label
                      style={
                        place.tipo === "REMOTO"
                          ? { opacity: "30%" }
                          : { opacity: "100%" }
                      }
                    >
                      Capacidade
                    </label>
                    <input
                      type="number"
                      placeholder="Digite a capacidade"
                      min="1"
                      defaultValue={place.capacidade}
                      {...register("capacidade", { valueAsNumber: true })}
                      readOnly={place.tipo !== "REMOTO" && !editable}
                      disabled={place.tipo === "REMOTO"}
                      required={place.tipo != "REMOTO"}
                    />
                    {errors.capacidade && <p>{errors.capacidade.message}</p>}
                  </InputIndividual>
                  <InputIndividual>
                    <label
                      style={
                        place.tipo === "EMPRESA" || place.tipo === "ENTIDADE"
                          ? { opacity: "100%" }
                          : { opacity: "30%" }
                      }
                    >
                      CEP
                    </label>
                    <InputMask
                      mask="99999-999"
                      type="text"
                      placeholder="Digite um CEP"
                      defaultValue={place?.cep}
                      {...register("cep", {
                        setValueAs: (v) =>
                          (v = v.replace(/_/g, "").replace("-", "").trim()),
                      })}
                      readOnly={
                        (place.tipo === "EMPRESA" ||
                          place.tipo === "ENTIDADE") &&
                        !editable
                      }
                      disabled={
                        place.tipo !== "EMPRESA" && place.tipo !== "ENTIDADE"
                      }
                    />
                    {errors.cep && <p>{errors.cep.message}</p>}
                  </InputIndividual>
                </InputContent>
                <InputContent disabled={"on"}>
                  <label
                    style={
                      place.tipo === "EMPRESA" || place.tipo === "ENTIDADE"
                        ? { opacity: "100%" }
                        : { opacity: "30%" }
                    }
                  >
                    Endereço
                  </label>
                  <input
                    type="text"
                    placeholder="Digite o endereço"
                    defaultValue={place?.endereco}
                    {...register("endereco")}
                    readOnly={
                      (place.tipo === "EMPRESA" || place.tipo === "ENTIDADE") &&
                      !editable
                    }
                    disabled={
                      place.tipo !== "EMPRESA" && place.tipo !== "ENTIDADE"
                    }
                    minLength={4}
                    maxLength={50}
                  />
                  {errors.endereco && <p>{errors.endereco.message}</p>}
                </InputContent>
                <InputContent disabled={"on"}>
                  <label
                    style={
                      place.tipo === "EMPRESA" || place.tipo === "ENTIDADE"
                        ? { opacity: "100%" }
                        : { opacity: "30%" }
                    }
                  >
                    Complemento
                  </label>
                  <input
                    type="text"
                    placeholder="Digite o complemento"
                    defaultValue={place?.complemento}
                    {...register("complemento")}
                    readOnly={
                      (place.tipo === "EMPRESA" || place.tipo === "ENTIDADE") &&
                      !editable
                    }
                    disabled={
                      place.tipo !== "EMPRESA" && place.tipo !== "ENTIDADE"
                    }
                  />
                  {errors.complemento && <p>{errors.complemento.message}</p>}
                </InputContent>
                {editable && (
                  <FinalButton>
                    <button>Salvar</button>
                  </FinalButton>
                )}
              </InputContainer>
            </InputScroll>
          </form>
        </Content>
      </Dialog.Portal>
      <Notification
        tipe={notificationStataus ? "Erro" : "Sucesso"}
        description={
          notificationStataus ? "Falha ao editar." : "Editado com sucesso."
        }
        title="Ambiente"
        openNotification={open}
        openNotificationMethod={openNotificantionMethod}
      />
    </>
  );
}
