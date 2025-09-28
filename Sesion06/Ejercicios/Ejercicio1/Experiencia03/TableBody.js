function TableBody(props) {
  return (
    <tbody>
      {props.characterData.map((row, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{row.name}</td>
          <td>{row.job}</td>
        </tr>
      ))}
    </tbody>
  );
}
export default TableBody;