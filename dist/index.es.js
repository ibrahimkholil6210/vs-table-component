import React, { useState, useCallback } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Btn{\n    background-color: black;\n    color: white;\n    border: none;\n    outline: none;\n}";
styleInject(css_248z);

var Button = function (props) {
    return React.createElement("button", { className: "bg-blue-500 px-5 py-2 text-white font-bold" }, props.label);
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var SortDirection;
(function (SortDirection) {
    SortDirection["Ascending"] = "ascending";
    SortDirection["Descending"] = "descending";
})(SortDirection || (SortDirection = {}));

function useSortableData(dataSource) {
    var _a = useState(null), sortConfig = _a[0], setSortConfig = _a[1];
    var sortedData = sortData(dataSource, sortConfig);
    function sortData(data, sortConfig) {
        var sortedData = data.slice(); // Create a shallow copy of the data array
        if (sortConfig !== null) {
            sortedData.sort(function (a, b) {
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
    var handleSort = useCallback(function (column) {
        if (!column.sortable) {
            return;
        }
        if (sortConfig && sortConfig.key === column.key) {
            if (sortConfig.direction === SortDirection.Ascending) {
                setSortConfig({
                    key: column.key,
                    direction: SortDirection.Descending,
                });
            }
            else if (sortConfig.direction === SortDirection.Descending) {
                setSortConfig(null);
            }
        }
        else {
            setSortConfig({ key: column.key, direction: SortDirection.Ascending });
        }
    }, [sortConfig]);
    return {
        sortedData: sortedData,
        handleSort: handleSort,
        sortConfig: sortConfig,
    };
}

var FONT_WEIGHT = {
    sm: "font-ligt",
    md: "font-medium",
    lg: "font-semibold",
    xl: "font-bold",
};
var FONT_SIZE = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
};
var VsTable = function (_a) {
    var columns = _a.columns, dataSource = _a.dataSource, bordered = _a.bordered, borderProps = _a.borderProps, fontSize = _a.fontSize, fontFamily = _a.fontFamily, rowClassName = _a.rowClassName, className = _a.className;
    var _b = borderProps || {}, _c = _b.border, border = _c === void 0 ? "border-separate" : _c, _d = _b.width, width = _d === void 0 ? "border" : _d, _e = _b.color, color = _e === void 0 ? "border-slate-100" : _e;
    var _f = useSortableData(dataSource), sortedData = _f.sortedData, handleSort = _f.handleSort, sortConfig = _f.sortConfig;
    var renderArrow = function (c) {
        return (React.createElement("span", { className: "flex flex-col flex-wrap" },
            React.createElement("div", { style: __assign({ width: "100%" }, (sortConfig &&
                    sortConfig.key === c.key &&
                    sortConfig.direction === SortDirection.Ascending && {
                    color: "red",
                })) }, "\u25B2"),
            React.createElement("div", { style: __assign({ width: "100%" }, (sortConfig &&
                    sortConfig.key === c.key &&
                    sortConfig.direction === SortDirection.Descending && {
                    color: "red",
                })) }, "\u25BC")));
    };
    return (React.createElement("div", null,
        React.createElement("table", { className: "bg-white w-full text-slate-700 ".concat(fontFamily, " ").concat(bordered && border, " ").concat(className) },
            React.createElement("thead", null,
                React.createElement("tr", { className: "".concat(bordered && "".concat(width, " ").concat(color), " ").concat(FONT_SIZE[fontSize || "md"], " ").concat(FONT_WEIGHT["lg"], " bg-slate-100") }, columns === null || columns === void 0 ? void 0 : columns.map(function (c) {
                    return (React.createElement("th", { onClick: function () { return (c === null || c === void 0 ? void 0 : c.sortable) && handleSort(c); }, className: "text-center px-8 py-4", key: c.title },
                        React.createElement("div", { className: "flex items-center" },
                            React.createElement("span", { className: "flex-1" }, c.title),
                            (c === null || c === void 0 ? void 0 : c.sortable) && renderArrow(c))));
                }))),
            React.createElement("tbody", null, sortedData === null || sortedData === void 0 ? void 0 : sortedData.map(function (d, index) {
                var classNamesTobeAdded = rowClassName && rowClassName(d);
                return (React.createElement("tr", { key: index, className: "".concat(classNamesTobeAdded, " ").concat(bordered && "".concat(width, " ").concat(color), " ").concat(FONT_SIZE[fontSize || "md"]) }, columns === null || columns === void 0 ? void 0 : columns.map(function (c) {
                    return (React.createElement("td", { className: "text-center px-8 py-4", key: c.key }, c.render === undefined
                        ? d[c.key]
                        : c.render(d[c.key], d)));
                })));
            })))));
};

export { Button, VsTable as Table };
//# sourceMappingURL=index.es.js.map
