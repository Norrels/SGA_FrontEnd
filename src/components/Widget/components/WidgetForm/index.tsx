import React, { FormEvent, useEffect, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import {
  ButtonLeftContainer,
  ButtonRightContainer,
  ContainerClose,
  ContainerSelect,
  Content,
  ContentBody,
  ContentFooter,
  ContentHeader,
  TextContent,
} from "./style";
import {
  ArrowLeft,
  BugBeetle,
  Camera,
  CloudMoon,
  Lightbulb,
  X,
} from "phosphor-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { API } from "../../../../lib/axios";
import Cobrinha from "../../../../assets/Cobrinha.svg";
import Idea from "../../../../assets/Idea.svg";
import Thought from "../../../../assets/Thought.svg";
import { ScreenshotButton } from "./ScreenshotButton";

const newCallInput = z.object({
  tipoChamado: z.string(),
  descricao: z.string(),
  foto: z.string().optional()
});

export type NewCallType = z.infer<typeof newCallInput>;

export function WidgetForm() {
  const [type, setType] = useState("inicio");
  const { register, handleSubmit, reset } = useForm<NewCallType>();

  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [screenshotSave, setScreenShotSave] = useState<string | null>(null);

  useEffect(() => {
    setScreenShotSave(screenshot)
  }, [screenshot])

  async function handleCreateNewCall(data: NewCallType) {
    console.log({
      descricao: data.descricao,
      foto: screenshotSave,
      usuario: {
        id: 1,
      },
      tipoChamado: type,
      tipoStatus: "ABERTO"
    })

    if(screenshotSave != null) {
      const res = await API.post("chamado", {
        descricao: data.descricao,
        foto: screenshotSave,
        usuario: {
          id: 1,
        },
        tipo: type,
        status: "ABERTO"
      });
  
      console.log(res)
  
      if (res.status == 200) {
        console.log("deu certo");
      }
    }
    
  }

  return (
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
                <ButtonLeftContainer>
                  <ScreenshotButton
                    screenshot={screenshot}
                    onScreenshotTook={setScreenshot}
                  />
                </ButtonLeftContainer>
                <ButtonRightContainer>
                  <button type="submit">Enviar Feedback</button>
                </ButtonRightContainer>
              </ContentFooter>
            </Content>
          </form>
        )}
      </Popover.Content>
    </Popover.Portal>
  );
}
