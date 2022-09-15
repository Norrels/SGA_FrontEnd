import { ChalkboardTeacher, DotsThree, Trash } from "phosphor-react";
import { PlacesItemButton, PlacesItemButtonContainer, PlacesItemContainer, PlacesItemIcon, PlacesItemInfoContainer, PlacesItemInfoContent } from "./style";

export function PlacesItem() {
  return (
    <PlacesItemContainer>
      <PlacesItemInfoContainer>
        <PlacesItemIcon>
          <ChalkboardTeacher size={30}/>
        </PlacesItemIcon>
        
        <PlacesItemInfoContent>
          <h3>Lab - 12</h3>
          <p>Capacidade: 20h</p>
        </PlacesItemInfoContent>
      </PlacesItemInfoContainer>

      <PlacesItemButtonContainer>
        <PlacesItemButton buttonColor="edit">
          <DotsThree color="#000" size={25} />
        </PlacesItemButton>

        <PlacesItemButton buttonColor="delete">
          <Trash color="#fff" size={25} />
        </PlacesItemButton>
      </PlacesItemButtonContainer>
    </PlacesItemContainer>
  )
}