import { Pencil } from "phosphor-react";
import React from "react";
import {
  CourseDescription,
  CourseInfoType,
  CourseItemButton,
  CourseItemButtonContainer,
  CourseItemContainer,
  CourseItemInfoContent,
} from "./style";

export function CourseItem() {
  return (
    <CourseItemContainer>
      <CourseItemInfoContent>
        <CourseItemInfoContent>
          <Pencil />
        </CourseItemInfoContent>
        <CourseDescription>
          <CourseItemInfoContent>
            <h3>Photoshop</h3>
            <CourseInfoType >
                <p>FIC</p>
            </CourseInfoType>
          </CourseItemInfoContent>
          <CourseItemInfoContent>
            <p>
              Carga horária: <span>40h</span>
            </p>
          </CourseItemInfoContent>
        </CourseDescription>
      </CourseItemInfoContent>

      <CourseItemButtonContainer >
        <CourseItemButton buttonColor="edit">

        </CourseItemButton>
        <CourseItemButton buttonColor="delete">
            
        </CourseItemButton>
      </CourseItemButtonContainer>
    </CourseItemContainer>
  );
}
