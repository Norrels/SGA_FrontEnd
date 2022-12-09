import { useContext, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import {
  ButtonRightContainer,
  ContainerSelect,
  Content,
  ContentBody,
  ContentFooter,
  ContentHeader,
  TextContent,
} from "./style";
import { ArrowLeft, X } from "phosphor-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { API } from "../../../../lib/axios";
import Cobrinha from "../../../../assets/Cobrinha.svg";
import Idea from "../../../../assets/Idea.svg";
import Thought from "../../../../assets/Thought.svg";
import { Notification } from "../../../Notification";
import { AuthContext } from "../../../../contexts/AuthContext";

const newCallInput = z.object({
  tipoChamado: z.string(),
  descricao: z.string(),
  foto: z.string().optional(),
});

interface CloseModalProps {
  closeModal: () => void;
}

export type NewCallType = z.infer<typeof newCallInput>;

export function WidgetForm({ closeModal }: CloseModalProps) {
  const { userAutheticated } = useContext(AuthContext);

  const [type, setType] = useState("inicio");
  const { register, handleSubmit, reset } = useForm<NewCallType>();

  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState(false);

  async function handleCreateNewCall(data: NewCallType) {
    const res = await API.post("chamado", {
      descricao: data.descricao,
      foto: "",
      usuario: userAutheticated,
      tipo: type,
      status: "ABERTO",
    });

    if (res.status == 200) {
      setNotification(true);
      setType("inicio");
      reset();
      closeModal();
    } else {
      setNotification(false);
    }
    setOpen(true);
  }

  function openNotificantionMethod() {
    setOpen(false);
  }

  return (
    <>
      <Popover.Portal>
        <Popover.Content style={{ zIndex: 1000 }} side={"top"}>
          {type == "inicio" ? (
            <Content>
              <TextContent>
                <p>Deixe seu feedback! :D</p>
                <Popover.Close>
                  <X size={25} />
                </Popover.Close>
              </TextContent>
              <ContainerSelect>
                <div onClick={() => setType("PROBLEMA")}>
                  <img src={Cobrinha} />
                  <p>Problema</p>
                </div>
                <div onClick={() => setType("IDEIA")}>
                  <img src={Idea} />
                  <p>Ideia</p>
                </div>
                <div onClick={() => setType("OUTRO")}>
                  <img src={Thought} />
                  <p>Outro</p>
                </div>
              </ContainerSelect>
            </Content>
          ) : (
            <form onSubmit={handleSubmit(handleCreateNewCall)}>
              <Content>
                <ContentHeader>
                  <ArrowLeft onClick={() => setType("inicio")} size={25} />
                  <div>
                    <img
                      src={
                        type === "PROBLEMA"
                          ? Cobrinha
                          : type === "IDEIA"
                          ? Idea
                          : Thought
                      }
                    />
                    <p>
                      {type === "PROBLEMA"
                        ? "Problema"
                        : type === "IDEIA"
                        ? "Ideia"
                        : "Outro"}
                    </p>
                  </div>
                  <Popover.Close>
                    <X size={25} />
                  </Popover.Close>
                </ContentHeader>
                <ContentBody>
                  <textarea
                    {...register("descricao")}
                    cols={10}
                    maxLength={228}
                    rows={6}
                    placeholder="Nos conte o que está acontecendo..."
                  ></textarea>
                </ContentBody>
                <ContentFooter>
                  <ButtonRightContainer>
                    <button type="submit">Enviar Feedback</button>
                  </ButtonRightContainer>
                </ContentFooter>
              </Content>
            </form>
          )}
        </Popover.Content>
      </Popover.Portal>
      <Notification
        tipe={notification ? "Sucesso" : "Erro"}
        description={notification ? "Criado com sucesso." : "Falha ao criar."}
        title="Chamado"
        openNotification={open}
        openNotificationMethod={openNotificantionMethod}
      />
    </>
  );
}
