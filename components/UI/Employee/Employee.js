import React, { useMemo } from "react";
import { useTable } from "react-table";
import EmployeeData from "../../../data/EmployeeData";

const Employee = () => {
  const data = useMemo(() => EmployeeData, []);
  const columns = useMemo(() => {
    [
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
  }, []);

  const tableInstance = useTable({ data, columns });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return <div>Employee</div>;
};

export default Employee;
