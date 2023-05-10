import { useState, useCallback } from "react";
import { SortConfig, Column, SortDirection } from "./types";

function useSortableData<T>(dataSource: T[]) {
  const [sortConfig, setSortConfig] = useState<SortConfig<any> | null>(null);

  const sortedData = sortData(dataSource, sortConfig);

  function sortData(data: T[], sortConfig: SortConfig<T> | null): T[] {
    const sortedData = data.slice(); // Create a shallow copy of the data array

    if (sortConfig !== null) {
      sortedData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === SortDirection.Ascending ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === SortDirection.Ascending ? 1 : -1;
        }
        return 0;
      });
    }

    return sortedData;
  }

  const handleSort = useCallback(
    (column: Column<any>) => {
      if (!column.sortable) {
        return;
      }

      if (sortConfig && sortConfig.key === column.key) {
        if (sortConfig.direction === SortDirection.Ascending) {
          setSortConfig({
            key: column.key,
            direction: SortDirection.Descending,
          });
        } else if (sortConfig.direction === SortDirection.Descending) {
          setSortConfig(null);
        }
      } else {
        setSortConfig({ key: column.key, direction: SortDirection.Ascending });
      }
    },
    [sortConfig]
  );

  return {
    sortedData,
    handleSort,
    sortConfig,
  };
}

export default useSortableData;
