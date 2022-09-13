import React, { useState } from 'react';
import {
    DataTable,
    TableContainer,
    TableHead,
    TableBody,
    Table,
    TableRow,
    TableHeader,
    TableCell,
    DataTableSkeleton,
    PaginationNav
} from '@carbon/react';


const DataTableDinamic = ({ data, headers}) => {
    const [index, setIndex] = useState(0);

    if(data.length === 0){
        return (
            <DataTableSkeleton
                headers={headers}
                columnCount={headers.length}
                rowCount={3}
                showToolbar={false}   
            />
        );
    }
    return(
        <>
            <DataTable rows={data[index].records} headers={headers}>
                {
                    ({
                        rows,
                        headers,
                        getHeaderProps,
                        getRowProps,
                        getTableProps,
                        getTableContainerProps
                    }) => (
                        <TableContainer
                            title={data[index].title}
                            description='Algorithm statistics.'
                            {...getTableContainerProps()}
                        >
                            <Table {...getTableProps()}>
                                <TableHead>
                                    <TableRow>
                                    {headers.map((header, i) => (
                                        <TableHeader key={i} {...getHeaderProps({ header })}>
                                        {header.header}
                                        </TableHeader>
                                    ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row,row_ind) => {
                                        console.log(row);
                                        return (<TableRow key={`${data[index].title}-${row_ind}`}>
                                            {row.cells.map((cell, col_ind) => (
                                                <TableCell key={`${data[index].title}-${row_ind}-${col_ind}`}>{cell.value}</TableCell>
                                            ))}
                                        </ TableRow>)
                                    }
                                    )}
                                    
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )
                }
            </DataTable>
            {   data.length > 1 && (
                <PaginationNav
                    className='pagination-position'
                    itemsShown={3}
                    totalItems={data.length}
                    loop={true}
                    onChange={(ind) => setIndex(ind)}
                />
            )}
        </>

    );
};

export default DataTableDinamic;