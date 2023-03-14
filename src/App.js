import './App.css';
import React, { Component } from 'react';
import Customer from './components/Customer';

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
            <div>
                {customers.map((c) => {
                    return (
                        <Customer
                            key={c.id}
                            id={c.id}
                            image={c.image}
                            name={c.name}
                            birthday={c.birthday}
                            gender={c.gender}
                            job={c.job}
                        />
                    );
                })}
            </div>
        );
    }
}

export default App;
