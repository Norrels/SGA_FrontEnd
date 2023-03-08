# Version 0.0.1

### Features

:partying_face:	 New - “atualizações” - um icone que vai avisar todo vez que uma nova versão estiver disponível

- Basicamente ele vai comparar a versão do package json, com o do git, caso for diferente ele vai fica com um icone com uma bolinha avisando que uma nova atualização está disponível (Experimental)

:wave:	 Remove - Chamados, 

- Nesse atualização damos adeus a pagina de chamados, agora os chamados são enviadas para nos desenvolvedores por meio de uma API externa

:partying_face:	 New - “Temas” - Agora é possivel alterar a cor do sistema, no momento somente entre roxo e azul

---
## Fixs
:partying_face:	done - Agora as aulas não são salvas em dias que possuem um feriado

---

## Clean Code

:partying_face: done - Na home o componente HomeSearchInput não recebe mais umas 6 props, agora ele recebe um objeto, (se passou de mais de 3 props e melhor coloca dentro de uma objeto e passar o objeto), fica até mais legível.

:construction: In progress - Agora os componentes estilizados que possuem características em comum usam o mesmo componente em comum - Aplicando o conceito DRY (Don't Repeat Yourself)

:construction: In progress - Interfaces agora possuem um I antes do nome

:partying_face: Done - Agora os titulos em todas as paginas serão renderiza por um componente padrão para todas as paginas

:wave: Remove - Nessa versão nos despedimos da arquivo resposanvel por deixar escodidos as rotas de administrador

- Agora essa verificação e feita no próprio componente, já que somente a pagina dos usuários é oculta para o usuário padrão

---

## Usabilidade

:partying_face: Done - Salvar a preferencia de calendário no localstorage

- A proposta inicial era que o usuário pudesse escolher qual visualização do calendário ele gosta mais, no entanto, a mudança volta para a professores quando o usuário sai da página, agora essa preferencia e salva no localstorage


---

## Paginas

### Home

:partying_face: done - Agora é possível criar uma aula em qualquer dia,
- Não há mais um limite que permetia criar apenas a partir da data atual

:partying_face: done - Não é exibido mais ambientes e professores que foram desabilitados no calendário,
- Mas cuidado, caso o houver uma aula relacionada há algum desses recursos eles ainda apareceram no calendário até que as aulas relacionadas acabem, entendemos que caso um ambiente com aula fosse desabilitado, essas aulas ficariam "perdidas", com isso essa mecânica permite que o usuário consiga alterar essas aulas do antigo para ambiente para um ambiente ativo, recomendamos que desative um ambiente ou professor caso realmente não haja nenhuma aula relacionadas a um deles
---

### Usuários

:construction: not started - Resetar senhas
- Estamos trabalhando para que seja possivel o administrador resetar a senha do usuário para a padrão, caso seja solicitado pelo mesmo

---

### Cursos

:partying_face: done - Agora é possível criar um curso com um nome de até 60 caracteres, e unidades curriculares de até 40 caracteres

- Entendemos que pareça pouco, mas caso contrário poderia ocorrer de quebrar o layout da aplicação em determinada paginas
