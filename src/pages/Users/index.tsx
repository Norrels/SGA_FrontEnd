import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { API } from "../../lib/axios";
import { AdminItem } from "./components/UserItem";
import { NewAdminModal } from "./components/NewUserModal";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  AdminButtonContainer,
  AdminContainer,
  AdminContent,
  AdminList,
  AdminTitleContainer,
  HeaderContainer,
  HeaderContent,
  HeaderNavBar,
  HeaderNavMenu,
  HeaderNavMenuArrow,
  HeaderNavMenuContent,
  HeaderNavMenuItem,
  HeaderUser,
  Toggle,
} from "./style";
import { NavLink } from "react-router-dom";
import { CaretDown, CaretUp, User } from "phosphor-react";
import Logo from "../../assets/Logo.svg";

export interface AdminProps {
  id: string;
  nome: string;
  email: string;
  nif: string;
  tipoCurso: string;
  senha: string;
  ativo: string;
}
[];

export function Admin() {
  const [admin, setAdmin] = useState<AdminProps[]>([]);
  const [adminMatches, setAdminMatches] = useState<AdminProps[]>([]);
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  async function fetchAdmin() {
    const res = await API.get("usuario");

    console.log(res.data);
    setAdmin(res.data);
    setAdminMatches(res.data);
  }

  useEffect(() => {
    fetchAdmin();
  }, []);

  const searchAdmin = (text: String) => {
    if (!text) {
      setAdminMatches(admin);
    } else {
      let matches = admin.filter((admin) => {
        const regex = new RegExp(`${text}`, "gi");
        return admin.nome.match(regex) || admin.nif.match(regex);
      });
      setAdminMatches(matches);
    }
  };

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <img src={Logo} alt="" />

          <HeaderNavBar>
            <HeaderNavMenu>
              <NavLink to="/inicio" title="Início">
                Início
              </NavLink>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <CaretDown weight="fill" />
                </DropdownMenu.Trigger>
                <HeaderNavMenuContent>
                  <HeaderNavMenuArrow>
                    <CaretUp weight="fill" size={30} />
                  </HeaderNavMenuArrow>

                  <HeaderNavMenuItem>
                    <NavLink to="/aulas">Aulas</NavLink>
                  </HeaderNavMenuItem>
                  <HeaderNavMenuItem>
                    <NavLink to="/dias-nao-letivos">Dias não letivo</NavLink>
                  </HeaderNavMenuItem>
                </HeaderNavMenuContent>
              </DropdownMenu.Root>
            </HeaderNavMenu>
            <NavLink to="/dashboard" title="Dashboard">
              Dashboard
            </NavLink>
            <HeaderNavMenu>
              <NavLink to="/professores" title="Professor">
                Professores
              </NavLink>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <CaretDown weight="fill" />
                </DropdownMenu.Trigger>

                <HeaderNavMenuContent>
                  <HeaderNavMenuArrow>
                    <CaretUp weight="fill" size={30} />
                  </HeaderNavMenuArrow>

                  <HeaderNavMenuItem>
                    <NavLink to="/ferias-coletiva">Ferias</NavLink>
                  </HeaderNavMenuItem>
                </HeaderNavMenuContent>
              </DropdownMenu.Root>
            </HeaderNavMenu>
            <NavLink to="/cursos" title="Cursos">
              Cursos
            </NavLink>
            <NavLink to="/ambientes" title="Ambientes">
              Ambientes
            </NavLink>
            <HeaderNavMenu>
            <NavLink to="/usuarios" title="Usuários">
                Usuários
              </NavLink>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <CaretDown weight="fill" />
                </DropdownMenu.Trigger>
                <HeaderNavMenuContent>
                  <HeaderNavMenuArrow>
                    <CaretUp weight="fill" size={30} />
                  </HeaderNavMenuArrow>
                  <HeaderNavMenuItem>
                    <NavLink to="/chamados" title="Chamados">
                      Chamados
                    </NavLink>
                  </HeaderNavMenuItem>
                </HeaderNavMenuContent>
              </DropdownMenu.Root>
            </HeaderNavMenu>
          </HeaderNavBar>

          <HeaderUser>
            <User size={23} />
            <p>Odair</p>
            <button>
              <CaretDown weight="fill" />
            </button>
          </HeaderUser>
        </HeaderContent>
      </HeaderContainer>
      <AdminContainer>
        <AdminContent>
          <AdminTitleContainer>
            <h1>Administradores</h1>
            <p>Chamadas realizadas no momento</p>
            <AdminButtonContainer>
              <Dialog.Root open={open} onOpenChange={setOpen}>
                <Dialog.Trigger>Novo administrador</Dialog.Trigger>
                <NewAdminModal closeModal={closeModal} />
              </Dialog.Root>
            </AdminButtonContainer>
          </AdminTitleContainer>
          <input
            type="text"
            placeholder="Buscar por Administrador"
            onChange={(e) => searchAdmin(e.target.value)}
          />
          <Toggle>
            <label>Desativados</label>
            <input type="checkbox" />
          </Toggle>
          <AdminList>
            {adminMatches.map((admin) => (
              <AdminItem key={admin.id} admin={admin} />
            ))}
          </AdminList>
        </AdminContent>
      </AdminContainer>
    </>
  );
}
