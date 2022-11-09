import { DotsThreeOutline } from "phosphor-react";
import { useEffect, useState } from "react";
import { z } from "zod";
import { AulaTypeSuper } from "../..";
import { API } from "../../../../lib/axios";
import { TableContaine } from "./style";

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

interface AulaProps {
  classItem: AulaTypeSuper[];
}
[];

export function AdvancedSeachTable(classItem: AulaProps) {
  const [aula, setAula] = useState<AulaType[]>([]);
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
        <tbody>
          {(classItem.classItem.length > 0 &&
            classItem.classItem.map((value) => (
              <tr key={value.id}>
                <td>{value.curso?.nome}</td>
                <td>{value.professor.nome}</td>
                <td>{value.ambiente.nome}</td>
                <td>{value.data}</td>
                <td>
                  <DotsThreeOutline size={20} />
                </td>
              </tr>
            ))) ||
            /* aula.map((value) => (
              <tr key={value.id}>
                <td>{value.curso?.nome}</td>
                <td>{value.professor.nome}</td>
                <td>{value.ambiente.nome}</td>
                <td>{value.data}</td>
                <td>
                  <DotsThreeOutline size={20} />
                </td>
              </tr>
            )) */
            (
              <>
                <h1>Infelizmente não encontramos nada</h1>
              </>
            )}
        </tbody>
      </table>
    </TableContaine>
  );
}
