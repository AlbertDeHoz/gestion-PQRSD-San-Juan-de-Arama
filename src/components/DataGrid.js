import ButtonLaunchModal from "./ButtonLaunchModal";
import ModalGestionar from "./ModalGestionar";

const DataGrid = () => {
  return (
    <table id="example2" className="table table-bordered table-hover">
      <thead>
        <tr className="text-blue-institucional">
          <th>Rendering engine</th>
          <th>Browser</th>
          <th>Platform(s)</th>
          <th>Engine version</th>
          <th>Gestionar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Trident</td>
          <td>Internet Explorer 4.0</td>
          <td>Win 95+</td>
          <td> 4</td>
          <td>
            <ButtonLaunchModal
              class="btn btn-block btn-outline-primary btn-xs"
              modalId="gestion"
              classIcon="fas fa-edit"
              name="Gestionar"
            >
              <ModalGestionar />
            </ButtonLaunchModal>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Rendering engine</th>
          <th>Browser</th>
          <th>Platform(s)</th>
          <th>Engine version</th>
          <td>
            <ButtonLaunchModal
              class="btn btn-block btn-outline-primary btn-xs"
              modalId="gestion"
              classIcon="fas fa-edit"
              name="Gestionar"
            >
              <ModalGestionar />
            </ButtonLaunchModal>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default DataGrid;