import React from 'react';
import { TableRow, TableCell } from '@mui/material';

class Customer extends React.Component {
    render() {
        return (
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        );
    }
}

export default Customer;
