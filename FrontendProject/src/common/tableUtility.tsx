import React from "react";
import { Table, flexRender } from "@tanstack/react-table";

type tableDataProps = {
  table: Table<any>,
};
export const TableBuilder = (props: tableDataProps) =>
  <>
    <table className=" w-full">
      <thead className="bg-okylightgreen h-10">
        {
          props.table.getHeaderGroups().map(headers => (
            <tr key={headers.id}>
              {headers.headers.map(header => (
                <th key={header.id}>
                  {
                    header.isPlaceholder
                      ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? 'cursor-pointer select-none'
                              : '',
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: <span className="text-okygreen text-sm">▲</span>,
                            desc: <span className="text-okygreen text-sm">▼</span>,
                          }[header.column.getIsSorted() as string] ?? <span className="text-okygreen text-xs">▲▼</span>}
                        </div>
                      )}

                </th>
              ))}
            </tr>
          ))
        }
      </thead>
      <tbody className="bg-white">
        {
          props.table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {
                row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {
                      flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )
                    }
                  </td>
                ))
              }
            </tr>
          ))
        }
      </tbody>
    </table>
    <div className="flex justify-end">
      <div className="bg-white m-1 p-2">
      表示件数:
        <select value={props.table.getState().pagination.pageSize}
          onChange={e => {
            props.table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 15, 30].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div className="bg-white m-1 p-2">
      {(props.table.getState().pagination.pageIndex*props.table.getState().pagination.pageSize)+1}-
      {
        ((props.table.getState().pagination.pageIndex +1)*props.table.getState().pagination.pageSize) > (props.table.getCoreRowModel().rows.length) 
        ? (props.table.getCoreRowModel().rows.length)
        :((props.table.getState().pagination.pageIndex +1)*props.table.getState().pagination.pageSize)
        }件 / {props.table.getCoreRowModel().rows.length}件
      </div>
      <div className="bg-white m-1 p-2">
      <select value={props.table.getState().pagination.pageIndex + 1}
          onChange={e => {
            const page = e.target.value ? Number(e.target.value) - 1 : 0
            props.table.setPageIndex(page)
          }}
        >
          {Array.from(Array(props.table.getPageCount()).keys()).map(page => (
            <option key={page+1} value={page+1}>
              {page+1}
            </option>
          ))}
        </select>
         /{' '}
          {props.table.getPageCount()}ページ
      </div>
      <div className="bg-white m-1 p-2">
      <button onClick={() => props.table.previousPage()} disabled={!props.table.getCanPreviousPage()}>
        {'<'}
      </button>
      </div>
      <div className="bg-white m-1 p-2">
      <button onClick={() => props.table.nextPage()} disabled={!props.table.getCanNextPage()}>
        {'>'}
      </button>
      </div>
      </div>
  </>
  ;