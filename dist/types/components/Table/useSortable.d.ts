import { SortConfig, Column } from "./types";
declare function useSortableData<T>(dataSource: T[]): {
    sortedData: T[];
    handleSort: (column: Column<any>) => void;
    sortConfig: SortConfig<any> | null;
};
export default useSortableData;
