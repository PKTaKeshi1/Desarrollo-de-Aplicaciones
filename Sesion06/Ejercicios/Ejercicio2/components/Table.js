import React from "react";

const TableHeader = () => (
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Trabajo</th>
      <th>Acción</th>
    </tr>
  </thead>
);

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => (
    <tr key={index}>
      <td>{row.name}</td>
      <td>{row.job}</td>
      <td>
        <button onClick={() => props.removeCharacter(index)}>Eliminar</button>
      </td>
    </tr>
  ));
  return <tbody>{rows}</tbody>;
};

const Table = (props) => (
  <table>
    <TableHeader />
    <TableBody
      characterData={props.characterData}
      removeCharacter={props.removeCharacter}
    />
  </table>
);

export default Table;
