import React, { useState } from "react";
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

const newCallInput = z.object({
  tipoChamado: z.string(),
  descricao: z.string(),
});

export type NewCallType = z.infer<typeof newCallInput>;

export function WidgetForm() {
  const [type, setType] = useState("inicio");
  const { register, handleSubmit, reset } = useForm<NewCallType>();

  async function handleCreateNewCall(data: NewCallType) {
    console.log(
      "widget = " +
        {
          descricao: data.descricao,
          foto: "foto",
          usuario: {
            nif: "001",
          },
          tipoChamado: data.tipoChamado,
        }
    );

    const res = await API.post("chamado", {
      descricao: data.descricao,
      foto: "foto",
      usuario: {
        nif: "001",
      },
      tipoChamado: type,
    });

    if (res.status == 200) {
      console.log("deu certo");
    }
  }

  return (
    <Popover.Portal>
      <Popover.Content side={"top"}>
        {type == "inicio" ? (
          <Content>
            <TextContent>
              <p>Deixe seu Feedback!</p>
              <Popover.Close>
                <X />
              </Popover.Close>
            </TextContent>
            <ContainerSelect>
              <div onClick={() => setType("PROBLEMA")}>
                <BugBeetle color="#5AADD1" size={32} />
                <p>Problema</p>
              </div>
              <div onClick={() => setType("IDEIA")}>
                <Lightbulb color="#5AADD1" size={32} />
                <p>Ideia</p>
              </div>
              <div onClick={() => setType("OUTRO")}>
                <CloudMoon color="#5AADD1" size={32} />
                <p>Outro</p>
              </div>
            </ContainerSelect>
          </Content>
        ) : (
          <></>
        )}

        {type == "PROBLEMA" ? (
          <form onSubmit={handleSubmit(handleCreateNewCall)}>
            <Content>
              <ContentHeader>
                <div onClick={() => setType("inicio")}>
                  <ArrowLeft size={16} />
                </div>
                <div>
                  <BugBeetle color="#5AADD1" size={28} />
                  <p>Problema</p>
                </div>
                <div>
                  <Popover.Close>
                    <X />
                  </Popover.Close>
                </div>
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
                  <button>
                    <Camera size={32} />
                  </button>
                </ButtonLeftContainer>
                <ButtonRightContainer>
                  <button type="submit">Enviar Feedback</button>
                </ButtonRightContainer>
              </ContentFooter>
            </Content>
          </form>
        ) : (
          <></>
        )}

        {type == "IDEIA" ? (
          <form onSubmit={handleSubmit(handleCreateNewCall)}>
            <Content>
              <ContentHeader>
                <div onClick={() => setType("inicio")}>
                  <ArrowLeft size={16} />
                </div>
                <div>
                  <Lightbulb color="#5AADD1" size={28} />
                  <p> Ideia</p>
                </div>
                <div>
                  <Popover.Close>
                    <X />
                  </Popover.Close>
                </div>
              </ContentHeader>
              <ContentBody>
                <textarea
                  cols={10}
                  maxLength={228}
                  {...register("descricao")}
                  rows={6}
                  placeholder="Nos conte o que está acontecendo..."
                ></textarea>
              </ContentBody>
              <ContentFooter>
                <ButtonLeftContainer>
                  <button>
                    <Camera size={32} />
                  </button>
                </ButtonLeftContainer>
                <ButtonRightContainer>
                  <button type="submit">Enviar Feedback</button>
                </ButtonRightContainer>
              </ContentFooter>
            </Content>
          </form>
        ) : (
          <></>
        )}

        {type == "OUTRO" ? (
          <form onSubmit={handleSubmit(handleCreateNewCall)}>
            <Content>
              <ContentHeader>
                <div onClick={() => setType("inicio")}>
                  <ArrowLeft size={16} />
                </div>
                <div>
                  <CloudMoon color="#5AADD1" size={28} />
                  <p> Outro</p>
                </div>
                <div>
                  <Popover.Close>
                    <X />
                  </Popover.Close>
                </div>
              </ContentHeader>
              <ContentBody>
                <textarea
                  cols={10}
                  maxLength={228}
                  {...register("descricao")}
                  rows={6}
                  placeholder="Nos conte o que está acontecendo..."
                ></textarea>
              </ContentBody>
              <ContentFooter>
                <ButtonLeftContainer>
                  <button>
                    <Camera size={32} />
                  </button>
                </ButtonLeftContainer>
                <ButtonRightContainer>
                  <button type="submit">Enviar Feedback</button>
                </ButtonRightContainer>
              </ContentFooter>
            </Content>
          </form>
        ) : (
          <></>
        )}
      </Popover.Content>
    </Popover.Portal>
  );
}
