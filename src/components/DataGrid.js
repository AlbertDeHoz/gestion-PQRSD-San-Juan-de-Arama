import ButtonLaunchModal from "./ButtonLaunchModal";
import ModalGestionar from "./ModalGestionar";

const DataGrid = (props) => {
  const headers = props.headers.map((element) => (
    <th key={element.id}>{element.header}</th>
  ));
  const data = props.data.map((element) => (
    <tr key={element.id}>
      {props.headers.map((header) => (
        <td key={header.id} className="mw-100">{element[header.name]} </td>
      ))}
      <td>
        {props.children}
      </td>
    </tr>
  ));

  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr className="text-blue-institucional">
          {headers}
          <th>Gestionar</th>
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </table>
  );
};

export default DataGrid;
