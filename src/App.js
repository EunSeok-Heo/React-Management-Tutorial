import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const customers = [
    {
        id: 1,
        image: 'https://static.upbit.com/logos/BTC.png',
        name: '허은석',
        birthday: '851004',
        gender: '남자',
        job: '회사원',
    },
    {
        id: 2,
        image: 'https://static.upbit.com/logos/ETH.png',
        name: '허현석',
        birthday: '820216',
        gender: '남자',
        job: '회사원',
    },
    {
        id: 3,
        image: 'https://static.upbit.com/logos/STX.png',
        name: '유진백',
        birthday: '860208',
        gender: '남자',
        job: '회사원',
    },
];

class App extends Component {
    render() {
        return (
            <Paper elevation={3} sx={{ width: 680, height:800, backgroundColor: 'blue', paddingTop: '5%'}}>
                <Table sx={{ width: 650, height:400, backgroundColor: 'gray', justifyContent: 'center' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>번호</TableCell>
                            <TableCell>프로필</TableCell>
                            <TableCell>이름</TableCell>
                            <TableCell>생년월일</TableCell>
                            <TableCell>성별</TableCell>
                            <TableCell>직업</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map((c) => {
                            return (
                                <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default App;
