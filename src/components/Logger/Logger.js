import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { useSelector } from 'react-redux';
import {
    Result
} from '@carbon/react/icons';
import {
    ContentSwitcher,
    Switch,
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
    TableToolbar,
    TableToolbarSearch,
    TableContainer
} from '@carbon/react';
import Editor from "@monaco-editor/react";
import { HOST } from '../../constants/settings';


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
            key:'algorithm',
            header:'Algorithm'
        },
        {
            key:'action',
            header:'Action'
        }
    ];
    const DATA = useSelector( state => state.Logger.logs );
    const [consoleLogs, setConsoleLogs] = useState("");
    const [isOpen, setOpen] = useState(false);
    const [tab, setTab] = useState(0);

    useEffect(() => {
      const interval = setInterval(async() => {
        const response = await axios.get(`${HOST}/logs`)
        setConsoleLogs(response.data.content);
      }, 3000);
      return () => clearInterval(interval);
    }, []);

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
                id = "modal_logs"
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
                  <ContentSwitcher  onChange={({index}) => setTab(index)}>
                    <Switch text='History' name='First tab'/>
                    <Switch text='Api logs' name='Second tab'/>
                  </ContentSwitcher>
                  { tab === 0 &&
                    <DataTable rows={DATA} headers={HEADERS}>
                        {({
                          rows,
                          headers,
                          getHeaderProps,
                          getRowProps,
                          getTableProps,
                          onInputChange
                        }) => (
                          <TableContainer>
                            <TableToolbar>
                              <TableToolbarSearch onChange={onInputChange} />
                            </TableToolbar>
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
                          </TableContainer>
                        )}
                    </DataTable>
                  }
                  { tab === 1 &&
                    <Editor
                      theme="vs-dark"
                      height="60vh"
                      defaultLanguage="shell"
                      value={consoleLogs}
                      options={{ readOnly: true }}
                    />
                  }
                </ModalBody>
            </ComposedModal>
        </>
    );
};

export default Logger