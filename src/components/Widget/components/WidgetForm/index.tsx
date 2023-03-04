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
import Cobrinha from "../../../../assets/Cobrinha.svg";
import Idea from "../../../../assets/Idea.svg";
import Thought from "../../../../assets/Thought.svg";
import { Notification } from "../../../Notification";
import { AuthContext } from "../../../../contexts/AuthContext";
import axios from "axios";

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
    try {
      const res = await axios.post("https://email-api-tirj.vercel.app/chamado", {
        mensagem: data.descricao,
        email: ["matheuus412@gmail.com", "bruno.duarte314@gmail.com"],
        user: userAutheticated.nome,
        type: type,
      });
      setNotification(true);
      setType("inicio");
      reset();
      closeModal();
    } catch (error) {
      setNotification(false);
      console.log("Não foi possivel enviar o email")
      console.log("Error" + error)
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
                <div onClick={() => setType("bug")}>
                  <img src={Cobrinha} />
                  <p>Problema</p>
                </div>
                <div onClick={() => setType("ideia")}>
                  <img src={Idea} />
                  <p>Ideia</p>
                </div>
                <div onClick={() => setType("dúvida")}>
                  <img src={Thought} />
                  <p>Dúvida</p>
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
                        type === "bug"
                          ? Cobrinha
                          : type === "ideia"
                          ? Idea
                          : Thought
                      }
                    />
                    <p>
                      {type === "bug"
                        ? "Problema"
                        : type === "ideia"
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
