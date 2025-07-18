import React from 'react';
import PropTypes from 'prop-types';

/**
 * ResultsTable
 * ------------
 * Generic zebra-striped table with sticky header and optional actions & pagination.
 * Props:
 *  - columns   : [{ key, label }] (required)
 *  - rows      : array of plain objects (required)
 *  - getRowId  : function(row, idx) => string|number  (default idx)
 *  - renderActions : optional function(row) => ReactNode  – renders first column if provided
 *  - pagination: {
 *        currentPage:number,
 *        totalPages:number,
 *        onPageChange:func
 *    } (optional)
 */
const ResultsTable = ({ columns, rows, getRowId = (_, idx) => idx, renderActions = null, pagination = null }) => {
  const renderHeader = () => (
    <thead className="bg-green-500 text-white sticky top-0 z-10">
      <tr>
        {renderActions && <th className="px-4 py-3 text-left text-xs font-semibold uppercase">Action</th>}
        {columns.map(col => (
          <th key={col.key} className="px-4 py-3 text-left text-xs font-semibold uppercase">
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );

  const renderBody = () => (
    <tbody className="bg-white divide-y divide-gray-200">
      {rows.map((row, idx) => {
        const zebra = idx % 2 === 0 ? 'bg-white' : 'bg-gray-50';
        return (
          <tr key={getRowId(row, idx)} className={`hover:bg-gray-50 ${zebra}`}>
            {renderActions && (
              <td className="px-4 py-3">
                {renderActions(row)}
              </td>
            )}
            {columns.map(col => (
              <td key={col.key} className="px-4 py-3 text-xs text-gray-600">
                {row[col.key]}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );

  const renderPagination = () => {
    if (!pagination) return null;
    const { currentPage, totalPages, onPageChange } = pagination;
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
      <div className="bg-gray-50 px-4 py-3 border-t border-gray-200 flex items-center justify-center">
        <div className="flex space-x-1">
          {pages.map(p => (
            <button
              key={p}
              onClick={() => onPageChange && onPageChange(p)}
              className={`px-3 py-1 text-xs rounded ${
                p === currentPage
                  ? 'bg-green-500 text-white'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 mb-6">
      <div className="w-full overflow-x-auto custom-table-scroll" style={{ maxHeight: '600px' }}>
        <table className="w-full">
          {renderHeader()}
          {renderBody()}
        </table>
      </div>
      {renderPagination()}
    </div>
  );
};

ResultsTable.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  getRowId: PropTypes.func,
  renderActions: PropTypes.func,
  pagination: PropTypes.object
};

export default ResultsTable; 