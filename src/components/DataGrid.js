import React from "react";
import { useTable, usePagination,useSortBy } from "react-table";

const DataGrid = (props) => {
  const data = props.data;
  const columns = props.columns;
  const {
    page,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  const initRow = page.slice(0, 20)
  // setPageSize(Number(7))
  return (
    <div className="card">
      <div className="card-body">
        <table className="table table-hover" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((data) => (
                  <th {...data.getHeaderProps(data.getSortByToggleProps())}>
                    {data.render("Header")}
                    <span>
                    {data.isSorted
                      ? data.isSortedDesc
                        ? ' '
                        : ' '
                      : ''}
                  </span>
                  </th>
                ))}
                <th>Gestionar</th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {initRow.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                    );
                  })}
                  <td onClick={function(){console.log(row)}}>{props.children}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination mt-3">
          <button className="page-link" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </button>{" "}
          <button className="page-link" onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </button>{" "}
          <button className="page-link" onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </button>{" "}
          <button
            className="page-link"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>{" "}
          <span className="ml-3 mr-3">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <span className="d-flex mr-3">
            |   Go to page:{" "}
            <input
              className="form-control ml-3"
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: "100px" }}
            />
          </span>{" "}
          <select
          className="form-select-sm"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[3, 7, 15].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DataGrid;
