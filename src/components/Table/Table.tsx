import React from "react";
import useSortableData from "./useSortable";
import { Column, SortDirection, TableProps } from "./types";
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}

export const dataSource: Person[] = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "12 Downing Street",
  },
  {
    key: "3",
    name: "Sherlock",
    age: 52,
    address: "225 Baker St",
  },
  {
    key: "4",
    name: "John Watson",
    age: 53,
    address: "225 Baker St",
  },
];

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sortable: true,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    sortable: true,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    sortable: true,
    render: (text: string, row: Person) => {
      return <span>{`${text} ${row.name}`}</span>;
    },
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    render: (val: string, row: Person) => (
      <div>
        <button
          className="text-yellow-500"
          onClick={() => console.log("add edit logic for row ", row.key)}
        >
          Edit
        </button>
        /
        <button
          className="text-red-500"
          onClick={() => console.log("add delete logic for row ", row.key)}
        >
          Delete
        </button>
      </div>
    ),
  },
];

const FONT_WEIGHT = {
  sm: "font-ligt",
  md: "font-medium",
  lg: "font-semibold",
  xl: "font-bold",
};

const FONT_SIZE = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
};

const VsTable: React.FC<TableProps<any>> = ({
  columns,
  dataSource,
  bordered,
  borderProps,
  fontSize,
  fontFamily,
  rowClassName,
  className,
}) => {
  const {
    border = "border-separate",
    width = "border",
    color = "border-slate-100",
  } = borderProps || {};

  const { sortedData, handleSort, sortConfig } = useSortableData(dataSource);

  const renderArrow = (c: Column<any>) => {
    return (
      <span className="flex flex-col flex-wrap">
        <div
          style={{
            width: "100%",
            ...(sortConfig &&
              sortConfig.key === c.key &&
              sortConfig.direction === SortDirection.Ascending && {
                color: "red",
              }),
          }}
        >
          ▲
        </div>
        <div
          style={{
            width: "100%",
            ...(sortConfig &&
              sortConfig.key === c.key &&
              sortConfig.direction === SortDirection.Descending && {
                color: "red",
              }),
          }}
        >
          ▼
        </div>
      </span>
    );
  };

  return (
    <div>
      <table
        className={`bg-white w-full text-slate-700 ${fontFamily} ${
          bordered && border
        } ${className}`}
      >
        <thead>
          <tr
            className={`${bordered && `${width} ${color}`} ${
              FONT_SIZE[fontSize || "md"]
            } ${FONT_WEIGHT["lg"]} bg-slate-100`}
          >
            {columns?.map((c) => {
              return (
                <th
                  onClick={() => c?.sortable && handleSort(c)}
                  className={`text-center px-8 py-4`}
                  key={c.title}
                >
                  <div className="flex items-center">
                    <span className="flex-1">{c.title}</span>
                    {c?.sortable && renderArrow(c)}
                  </div>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sortedData?.map((d, index) => {
            const classNamesTobeAdded = rowClassName && rowClassName(d);
            return (
              <tr
                key={index}
                className={`${classNamesTobeAdded} ${
                  bordered && `${width} ${color}`
                } ${FONT_SIZE[fontSize || "md"]}`}
              >
                {columns?.map((c) => {
                  return (
                    <td className={`text-center px-8 py-4`} key={c.key}>
                      {c.render === undefined
                        ? d[c.key]
                        : c.render(d[c.key], d)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VsTable;
