import * as Dialog from "@radix-ui/react-dialog";
import { Check, X } from "phosphor-react";
import {
  AdvancedTableContent,
  AvaliableModalContainer,
  AvaliableModalContent,
  AvaliableModalDivider,
  AvaliableModalOptionsContainer,
  AvaliableModalOptionsContent,
  CloseButton,
  Content,
  HomeCheckBox,
  HomeCheckBoxIndicator,
  ModalCreateClassDays,
  Overlay,
  TableScroow,
} from "./style";

import DisponibilidadePerson from "../../../../assets/DisponibilidadePerson.svg";

export function AvaliableModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <Dialog.Title>Disponibilidade</Dialog.Title>

        <AvaliableModalContainer>
          <AvaliableModalOptionsContainer>
            <img src={DisponibilidadePerson} alt="" />

            <AvaliableModalContent>
              <AvaliableModalOptionsContent>
                <span>
                  <p>Professor</p>
                  <select name="" id="">
                    <option value="">Selecione o professor</option>
                  </select>
                </span>

                <span>
                  <p>Periodo</p>
                  <select name="" id="">
                    <option value="">Selecione um periodo</option>
                  </select>
                </span>
              </AvaliableModalOptionsContent>

              <AvaliableModalDivider>
                Selecione o intervalo de datas
              </AvaliableModalDivider>

              <AvaliableModalOptionsContent>
                <span>
                  <p>Data de início</p>
                  <input type="date" />
                </span>

                <span>
                  <p>Data final</p>
                  <input type="date" />
                </span>
              </AvaliableModalOptionsContent>

              <ModalCreateClassDays>
                <span>
                  <label>Dom</label>
                  <HomeCheckBox>
                    <HomeCheckBoxIndicator>
                      <Check size={20} weight="bold" />
                    </HomeCheckBoxIndicator>
                  </HomeCheckBox>
                </span>
                <span>
                  <label>Seg</label>
                  <HomeCheckBox>
                    <HomeCheckBoxIndicator>
                      <Check size={20} weight="bold" />
                    </HomeCheckBoxIndicator>
                  </HomeCheckBox>
                </span>
                <span>
                  <label>Ter</label>
                  <HomeCheckBox>
                    <HomeCheckBoxIndicator>
                      <Check size={20} weight="bold" />
                    </HomeCheckBoxIndicator>
                  </HomeCheckBox>
                </span>
                <span>
                  <label>Qua</label>
                  <HomeCheckBox>
                    <HomeCheckBoxIndicator>
                      <Check size={20} weight="bold" />
                    </HomeCheckBoxIndicator>
                  </HomeCheckBox>
                </span>
                <span>
                  <label>Qui</label>
                  <HomeCheckBox>
                    <HomeCheckBoxIndicator>
                      <Check size={20} weight="bold" />
                    </HomeCheckBoxIndicator>
                  </HomeCheckBox>
                </span>
                <span>
                  <label>Sex</label>
                  <HomeCheckBox>
                    <HomeCheckBoxIndicator>
                      <Check size={20} weight="bold" />
                    </HomeCheckBoxIndicator>
                  </HomeCheckBox>
                </span>
                <span>
                  <label>Sab</label>
                  <HomeCheckBox>
                    <HomeCheckBoxIndicator>
                      <Check size={20} weight="bold" />
                    </HomeCheckBoxIndicator>
                  </HomeCheckBox>
                </span>
              </ModalCreateClassDays>
            </AvaliableModalContent>
          </AvaliableModalOptionsContainer>

          <sup>Verifique a disponibilidade do professor...</sup>

          <AdvancedTableContent>
            <TableScroow>
              <table>
                <thead>
                  <th>Curso</th>
                  <th>Ambiente</th>
                  <th>Peiodo</th>
                  <th>Data</th>
                  <th>Ver Mais</th>
                </thead>
                <tbody>
                  <tr>
                    <td>AI900</td>
                    <td>Lab-15</td>
                    <td>Tarde</td>
                    <td>10/09/2022</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>AI900</td>
                    <td>Lab-15</td>
                    <td>Tarde</td>
                    <td>10/09/2022</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>AI900</td>
                    <td>Lab-15</td>
                    <td>Tarde</td>
                    <td>10/09/2022</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>AI900</td>
                    <td>Lab-15</td>
                    <td>Tarde</td>
                    <td>10/09/2022</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>AI900</td>
                    <td>Lab-15</td>
                    <td>Tarde</td>
                    <td>10/09/2022</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>AI900</td>
                    <td>Lab-15</td>
                    <td>Tarde</td>
                    <td>10/09/2022</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>AI900</td>
                    <td>Lab-15</td>
                    <td>Tarde</td>
                    <td>10/09/2022</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>AI900</td>
                    <td>Lab-15</td>
                    <td>Tarde</td>
                    <td>10/09/2022</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>AI900</td>
                    <td>Lab-15</td>
                    <td>Tarde</td>
                    <td>10/09/2022</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>AI900</td>
                    <td>Lab-15</td>
                    <td>Tarde</td>
                    <td>10/09/2022</td>
                    <td>...</td>
                  </tr>
                  <tr>
                    <td>AI900</td>
                    <td>Lab-15</td>
                    <td>Tarde</td>
                    <td>10/09/2022</td>
                    <td>...</td>
                  </tr>
                </tbody>
              </table>
            </TableScroow>
          </AdvancedTableContent>

          <button type="submit">Buscar</button>
        </AvaliableModalContainer>
        <Dialog.Description />
      </Content>
    </Dialog.Portal>
  );
}
