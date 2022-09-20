import * as Dialog from "@radix-ui/react-dialog";
import { Sliders } from "phosphor-react";
import React from "react";
import styled from "styled-components";
import Accourdion from "./components/Accordion";

import {
  SearchButtonContainer,
  SearchContainer,
  SearchContainerInput,
  SearchContent,
  SearchDupoContainer,
  SearchFilterContainer,
  SearchFilterContent,
  SearchFilterTitle,
  SearchList,
  SearchListContainer,
  SearchTitleContainer,
} from "./style";

export default function AdvancedSearch() {
  return (
    <SearchContainer>
      <SearchContent>
        <SearchTitleContainer>
          <h1>Aulas</h1>
          <p>Faça Buscas e aplique filtros para encontrar determinada aula.</p>
        </SearchTitleContainer>
        <SearchContainerInput>
          <input type="text" placeholder="Buscar aula" />
          <button> Buscar </button>
        </SearchContainerInput>

        <SearchDupoContainer>
          <SearchFilterContainer>
            <SearchFilterTitle>
              <Sliders size={32} /> <h3>Filtrar por:</h3>
            </SearchFilterTitle>
            <SearchFilterContent>
              <>
                <Accourdion />
              </>
            </SearchFilterContent>
          </SearchFilterContainer>

          <SearchListContainer></SearchListContainer>
        </SearchDupoContainer>
      </SearchContent>
    </SearchContainer>
  );
}
