import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    Result
} from '@carbon/react/icons';
import {
    Button,
    ComposedModal,
    ModalBody,
    ModalHeader,
    Table,
    TableHeader,
    TableHead,
    TableRow,
    TableBody,
    TableCell
} from '@carbon/react';

const Logger = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Button
                className={'sticky-right-position'}
                hasIconOnly
                renderIcon={ Result }
                onClick={ () => setOpen(true) }
            />
            <ComposedModal 
                size="large"
                open={isOpen}
                onClose={ () => setOpen(false) }
            >
                <ModalHeader 
                    title={'Logs'}
                />
                <ModalBody hasScrollingContent>
                    <Table>
                        <TableHead>
                            <TableRow>
                            <TableHeader>
                                Name
                            </TableHeader>
                            <TableHeader>
                                Rule
                            </TableHeader>
                            <TableHeader>
                                Status
                            </TableHeader>
                            <TableHeader>
                                Other
                            </TableHeader>
                            <TableHeader>
                                Example
                            </TableHeader>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                            <TableCell>
                                Load Balancer 1
                            </TableCell>
                            <TableCell>
                                Round robin
                            </TableCell>
                            <TableCell>
                                Starting
                            </TableCell>
                            <TableCell>
                                Test
                            </TableCell>
                            <TableCell>
                                22
                            </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>
                                Load Balancer 2
                            </TableCell>
                            <TableCell>
                                DNS delegation
                            </TableCell>
                            <TableCell>
                                Active
                            </TableCell>
                            <TableCell>
                                Test
                            </TableCell>
                            <TableCell>
                                22
                            </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>
                                Load Balancer 3
                            </TableCell>
                            <TableCell>
                                Round robin
                            </TableCell>
                            <TableCell>
                                Disabled
                            </TableCell>
                            <TableCell>
                                Test
                            </TableCell>
                            <TableCell>
                                22
                            </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>
                                Load Balancer 4
                            </TableCell>
                            <TableCell>
                                Round robin
                            </TableCell>
                            <TableCell>
                                Disabled
                            </TableCell>
                            <TableCell>
                                Test
                            </TableCell>
                            <TableCell>
                                22
                            </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>
                                Load Balancer 5
                            </TableCell>
                            <TableCell>
                                Round robin
                            </TableCell>
                            <TableCell>
                                Disabled
                            </TableCell>
                            <TableCell>
                                Test
                            </TableCell>
                            <TableCell>
                                22
                            </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>
                                Load Balancer 6
                            </TableCell>
                            <TableCell>
                                Round robin
                            </TableCell>
                            <TableCell>
                                Disabled
                            </TableCell>
                            <TableCell>
                                Test
                            </TableCell>
                            <TableCell>
                                22
                            </TableCell>
                            </TableRow>
                            <TableRow>
                            <TableCell>
                                Load Balancer 7
                            </TableCell>
                            <TableCell>
                                Round robin
                            </TableCell>
                            <TableCell>
                                Disabled
                            </TableCell>
                            <TableCell>
                                Test
                            </TableCell>
                            <TableCell>
                                22
                            </TableCell>
                            </TableRow>
                        </TableBody>
                        </Table>
                </ModalBody>
            </ComposedModal>
        </>
    );
};

export default Logger