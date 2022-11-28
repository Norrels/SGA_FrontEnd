import { DotsThreeOutline } from "phosphor-react";
import { useEffect, useState } from "react";
import { z } from "zod";
import { AulaTypeSuper } from "../..";
import { API } from "../../../../lib/axios";
import { TableContaine, Nothing } from "./style";
import * as Dialog from "@radix-ui/react-dialog";
import { ViewClassModal } from "../ViewClassModal";
import NotFound from "../../../../assets/404.svg";

export const aulaInput = z.object({
  id: z.number(),
  codTurma: z.string(),
  periodo: z.string(),
  data: z.string(),
  cargaDiaria: z.string(),
  diaSemana: z.boolean().array(),
  unidadeCurricular: z.object({
    id: z.number(),
    nome: z.string(),
  }),
  professor: z.object({
    id: z.number(),
    nome: z.string(),
  }),
  ambiente: z.object({
    id: z.number(),
    nome: z.string(),
  }),
  curso: z.object({
    id: z.number(),
    nome: z.string(),
  }),
  semana: z.boolean().array(),
});

export type AulaType = z.infer<typeof aulaInput>;

export interface AulaProps {
  classItem: AulaTypeSuper[];
}
[];

export function AdvancedSeachTable(classItem: AulaProps) {
  const [aula, setAula] = useState<AulaType[]>([]);
  const [open, setOpen] = useState(false);

  function closeModal() {
    setOpen(false);
  }

  async function handleGet() {
    const res = await API.get("aula");

    if (res.data.length > 0) {
      setAula(res.data);
    }
  }

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <TableContaine>
      <table>
        <thead>
          <tr>
            <th>Curso</th>
            <th>Professor</th>
            <th>Ambiente</th>
            <th>Data</th>
            <th>Ver mais</th>
          </tr>
        </thead>
        {classItem.classItem.length > 0 && (
          <tbody>
            {classItem.classItem.map((value) => (
              <tr key={value.id}>
                <td>{value.curso?.nome}</td>
                <td>{value.professor?.nome}</td>
                <td>{value.ambiente?.nome}</td>
                <td>{value?.data}</td>
                <td>
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <DotsThreeOutline size={20} />
                    </Dialog.Trigger>
                    <ViewClassModal classItem={value} closeModal={closeModal} />
                  </Dialog.Root>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {classItem.classItem.length < 1 && (
        <Nothing>
          <p>
            <span>Nenhum resultado encontrado</span>, tente alterar seu filtro
            ou refaça a busca.
          </p>
          <img src={NotFound} />
        </Nothing>
      )}
    </TableContaine>
  );
}