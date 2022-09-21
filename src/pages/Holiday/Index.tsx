import * as Dialog from '@radix-ui/react-dialog'
import React from 'react'
import { HolidayItem } from './components/HolidayItem'
import { NewHolidayModal } from './components/NewHolidayModal'
import { HolidayButtonContainer, HolidayContainer, HolidayContent, HolidayList, HolidayTitleContainer } from './style'

export function Holiday() {
  return (
    <HolidayContainer>
      <HolidayContent>
        <HolidayTitleContainer>
          <h1>Dias não letivos</h1>
          <p>Selecione um dia não letivo ou crie um novo!</p>
          <HolidayButtonContainer>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button>Novo dia</button>
              </Dialog.Trigger>
              <NewHolidayModal />
            </Dialog.Root>
          </HolidayButtonContainer>
        </HolidayTitleContainer>
        <input type="text" placeholder="Buscar um dia não letivo" />

        <HolidayList>
          <HolidayItem />
          <HolidayItem />
          <HolidayItem />
          <HolidayItem />
          <HolidayItem />
        </HolidayList>
      </HolidayContent>
    </HolidayContainer>
  )
}
