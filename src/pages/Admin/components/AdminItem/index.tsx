import { DotsThree, Pencil, Trash, User } from "phosphor-react";
import React from "react";
import {
  AdminDescription,
  AdminInfoType,
  AdminItemButton,
  AdminItemButtonContainer,
  AdminItemContainer,
  AdminItemIcon,
  AdminItemInfoContent,
} from "./style";

export function AdminItem() {
  return (
    <AdminItemContainer>
      <AdminItemInfoContent>
        <AdminItemIcon>
        <User size={30}  />
        </AdminItemIcon>

        <AdminDescription>
            <h3>Odair</h3>
        </AdminDescription>
      </AdminItemInfoContent>

      <AdminItemButtonContainer>
        <AdminItemButton buttonColor="edit">
          <DotsThree color="#000" size={25} />
        </AdminItemButton>
        
        <AdminItemButton buttonColor="delete">
          <Trash color="#fff" size={25} />
        </AdminItemButton>
      </AdminItemButtonContainer>
    </AdminItemContainer>
  );
}
