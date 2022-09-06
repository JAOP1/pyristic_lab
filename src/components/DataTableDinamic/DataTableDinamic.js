import React, { useState } from 'react';
import {
    DataTable,
    TableContainer,
    TableHead,
    TableBody,
    Table,
    TableRow,
    TableExpandHeader,
    TableHeader,
    TableExpandedRow,
    TableCell,
    TableExpandRow,
    DataTableSkeleton,
    PaginationNav
} from '@carbon/react';


const DataTableDinamic = () => {
    const [index, setIndex] = useState(0);
    const data = [
        {
            title:'AG',
            records: [
                {
                    id: 'a',
                    name: 'Load balancer 9',
                    status: 'Disabled',
                  },
                  {
                    id: 'b',
                    name: 'Load balancer 2',
                    status: 'Starting',
                  },
                  {
                    id: 'c',
                    name: 'Load balancer 3',
                    status: 'Active',
                  },
            ]
        },
        {
            title:'EE',
            records: [
                {
                    id: 'a',
                    name: 'Load balancer 1',
                    status: 'Disabled',
                  },
                  {
                    id: 'b',
                    name: 'Load balancer 2',
                    status: 'Starting',
                  },
                  {
                    id: 'c',
                    name: 'Load balancer 3',
                    status: 'Active',
                  },
            ]
        },
      ];
      const headers = [
        {
          key: 'name',
          header: 'Method',
        },
        {
          key: 'status',
          header: 'Name',
        },
      ];

    if(data === undefined){
        return (
            <DataTableSkeleton
                headers={headers}
                rowCount={3}
                columnCount={2}
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
                            description='Implementation details'
                            {...getTableContainerProps()}
                        >
                            <Table {...getTableProps()}>
                                <TableHead>
                                    <TableRow>
                                    <TableExpandHeader id="expand" />
                                    {headers.map((header, i) => (
                                        <TableHeader key={i} {...getHeaderProps({ header })}>
                                        {header.header}
                                        </TableHeader>
                                    ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                    <React.Fragment key={row.id}>
                                        <TableExpandRow expandHeader="expand" {...getRowProps({ row })}>
                                        {row.cells.map((cell) => (
                                            <TableCell key={cell.id}>{cell.value}</TableCell>
                                        ))}
                                        </TableExpandRow>
                                        <TableExpandedRow
                                            colSpan={headers.length + 1}
                                        >
                                        <h6>Arguments:</h6>
                                        <div>Description here</div>
                                        </TableExpandedRow>
                                    </React.Fragment>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )
                }
            </DataTable>

            <PaginationNav
                className='pagination-position'
                itemsShown={3}
                totalItems={data.length}
                loop={true}
                onChange={(ind) => setIndex(ind)}
            />
        </>

    );
};

export default DataTableDinamic;