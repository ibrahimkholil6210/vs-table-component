export type SortConfig<T> = {
  key: keyof T;
  direction: SortDirection;
};

export enum SortDirection {
  Ascending = "ascending",
  Descending = "descending",
}

export interface TableProps<T> {
  dataSource: T[];
  columns: Column<T>[];
  className?: string;
  bordered: boolean;
  /** borderProps will only work if bordered is set to true and each properties value should be tailwind class */
  borderProps?: {
    border?: string;
    /** provide tailwind border class */
    width?: string;
    /** provide tailwind color class */
    color?: string;
  };
  /** provide tailwind theme specific font sizing sm,md,lg,xl */
  fontSize?: Sizing;
  /** provide tailwind theme specific font family */
  fontFamily?: string;
  rowClassName?: (row: T[keyof T]) => string;
}

export interface Column<T> {
  title: string;
  key: string;
  dataIndex: keyof T;
  render?: (val: T, row: T[keyof T]) => React.ReactNode;
  sortable?: boolean;
}

type Sizing = "sm" | "md" | "lg" | "xl";
