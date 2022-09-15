import React from "react";
import {
  TeacherBlockContent,
  TeacherText,
} from "./style";

import Pessoa from "../../../../assets/Pessoa.svg";

export function TeacherClass() {
  return (
        <TeacherBlockContent>
          <img src={Pessoa} />
          <TeacherText>
            <h3>Chige</h3>
            <p>Laboratorio 15</p>
          </TeacherText>
          <span>Em Aula</span>
        </TeacherBlockContent>
  );
}
