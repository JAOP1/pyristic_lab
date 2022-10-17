import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    Result
} from '@carbon/react/icons';
import {
    Button,
    ComposedModal,
    ModalBody,
    ModalHeader,
    DataTable,
    Table,
    TableHeader,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    TableExpandHeader,
    TableExpandedRow,
    TableExpandRow,
} from '@carbon/react';

const Logger = () => {
    const HEADERS = [
        {
            key:'time',
            header:'Time'
        },
        {
            key:'status',
            header:'Status'
        },
        {
            key:'action',
            header:'Action'
        }
    ];
    const DATA = useSelector( state => state.Logger.logs );
    const [isOpen, setOpen] = useState(false);

    const getDetailInformation = (id) => {
      const items = DATA.filter( item   => item.id === id);
      return items[0].details;
    };
    return (
        <>
            <Button
                className={'sticky-right-position'}
                hasIconOnly
                renderIcon={ Result }
                iconDescription={ 'logs' }
                onClick={ () => setOpen(true) }
            />
            <ComposedModal 
                size="lg"
                open={isOpen}
                onClose={ () => setOpen(false) }
            >
                <ModalHeader 
                    title={'Logs'}
                />
                <ModalBody 
                hasScrollingContent
                aria-label={'scrolled content'}
                >
                <DataTable rows={DATA} headers={HEADERS}>
                    {({
                      rows,
                      headers,
                      getHeaderProps,
                      getRowProps,
                      getTableProps,
                    }) => (
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
                            {rows.map((row) => {
                              return(
                                <React.Fragment key={row.id}>
                                  <TableExpandRow expandHeader="expand" {...getRowProps({ row })}>
                                    {row.cells.map((cell, ind) => (
                                      <TableCell key={ind}>{cell.value}</TableCell>
                                    ))}
                                  </TableExpandRow>
                                  <TableExpandedRow
                                    colSpan={headers.length + 1}
                                    className="demo-expanded-td">
                                    <h6>Action details:</h6>
                                    <p>{getDetailInformation(row.id)}</p>
                                  </TableExpandedRow>
                                </React.Fragment>
                              );
                            })}
                          </TableBody>
                        </Table>
                    )}
                  </DataTable>
                </ModalBody>
            </ComposedModal>
        </>
    );
};

export default Logger