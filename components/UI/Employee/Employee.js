import React, { useMemo } from "react";
import { useTable } from "react-table";
import EmployeeData from "../../../data/EmployeeData";
import classes from "./employee.module.css";

const tableColumn = [
  {
    Header: "Full Name",
    accessor: "name",
  },
  {
    Header: "Job Title",
    accessor: "job_title",
  },
  {
    Header: "Department",
    accessor: "department",
  },
  {
    Header: "Start Date",
    accessor: "start_date",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];
const Employee = () => {
  const data = useMemo(() => EmployeeData, []);
  const columns = useMemo(() => tableColumn, []);

  const tableInstance = useTable({ data, columns });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <table className={classes.table} {...getTableProps()}>
      <thead className={classes.tableHead}>
        {headerGroups.map((headerGroup) => (
          <tr
            className={classes.tableRow}
            {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th className={classes.tableData} {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className={classes.tableBody} {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Employee;
