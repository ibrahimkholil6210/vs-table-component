import React from "react";
import { TableProps } from "./types";
interface Person {
    key: string;
    name: string;
    age: number;
    address: string;
}
export declare const dataSource: Person[];
export declare const columns: ({
    title: string;
    dataIndex: string;
    key: string;
    sortable: boolean;
    render?: undefined;
} | {
    title: string;
    dataIndex: string;
    key: string;
    sortable: boolean;
    render: (text: string, row: Person) => JSX.Element;
} | {
    title: string;
    key: string;
    dataIndex: string;
    render: (val: string, row: Person) => JSX.Element;
    sortable?: undefined;
})[];
declare const VsTable: React.FC<TableProps<any>>;
export default VsTable;
