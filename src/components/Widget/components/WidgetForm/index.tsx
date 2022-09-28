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

export function WidgetForm() {
  const [type, setType] = useState("inicio");

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
              <div onClick={() => setType("problem")}>
                <BugBeetle color="#5AADD1" size={32} />
                <p>Problema</p>
              </div>
              <div onClick={() => setType("ideia")}>
                <Lightbulb color="#5AADD1" size={32} />
                <p>Ideia</p>
              </div>
              <div onClick={() => setType("other")}>
                <CloudMoon color="#5AADD1" size={32} />
                <p>Outro</p>
              </div>
            </ContainerSelect>
          </Content>
        ) : (
          <></>
        )}

        {type == "problem" ? (
          <Content>
            <ContentHeader>
              <div onClick={() => setType("inicio")}>
                <ArrowLeft size={16} />
              </div>
              <div>
                <BugBeetle color="#5AADD1" size={28} />
                <p> Problema</p>
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
                <button>Enviar Feedback</button>
              </ButtonRightContainer>
            </ContentFooter>
          </Content>
        ) : (
          <></>
        )}

        {type == "ideia" ? (
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
                <button>Enviar Feedback</button>
              </ButtonRightContainer>
            </ContentFooter>
          </Content>
        ) : (
          <></>
        )}

        {type == "other" ? (
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
                <button>Enviar Feedback</button>
              </ButtonRightContainer>
            </ContentFooter>
          </Content>
        ) : (
          <></>
        )}
      </Popover.Content>
    </Popover.Portal>
  );
}
