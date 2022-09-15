import { DotsThree, Pencil, Trash } from "phosphor-react";
import React from "react";
import {
  CourseDescription,
  CourseInfoType,
  CourseItemButton,
  CourseItemButtonContainer,
  CourseItemContainer,
  CourseItemIcon,
  CourseItemInfoContent,
} from "./style";

export function CourseItem() {
  return (
    <CourseItemContainer>
      <CourseItemInfoContent>
        <CourseItemIcon>
          <Pencil size={30} />
        </CourseItemIcon>

        <CourseDescription>
          <CourseItemInfoContent>
            <h3>Photoshop</h3>
            <CourseInfoType>
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

      <CourseItemButtonContainer>
        <CourseItemButton buttonColor="edit">
          <DotsThree color="#000" size={25} />
        </CourseItemButton>
        
        <CourseItemButton buttonColor="delete">
          <Trash color="#fff" size={25} />
        </CourseItemButton>
      </CourseItemButtonContainer>
    </CourseItemContainer>
  );
}
