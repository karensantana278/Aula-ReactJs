import React from 'react';
import * as S from './styles';
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import FilterCard from '../../components/FilterCard'
import TaskCard from '../../components/TaskCard'
const tasks = [{ "done": false, "created": "2021-10-23T20:05:31.643Z", "_id": "101", "macaddress": "9191", "type": 5, "title": "Futebol Com a Galera", "description": "Jogar Futebol", "when": "10/05/2021", "__v": 0 },
    { "done": false, "created": "2021-10-23T20:05:31.643Z", "_id": "102", "macaddress": "6666", "type": 2, "title": "Comprar Café", "description": "Café é Vida", "when": "11/05/2021", "__v": 0 }]

function Home() {
    return (
        <S.Container>
            <Header/>
            {/* Header */}

            <S.FilterArea>
            {/* FilterCard */}
            <FilterCard title="Hoje" actived={false}/>
            <FilterCard title="Semana" actived={false}/>
            <FilterCard title="Mês" actived={false}/>
            <FilterCard title="Ano" actived={false}/>
            <FilterCard title="Todos" actived={false}/>

            </S.FilterArea>

            <S.Title>
                <h3>TAREFAS</h3>
            </S.Title>
            <S.Content>
            {/* TaskCard */}
            {tasks.map((t, i) =>{
                return (<TaskCard key = {i} type={t.type} title={t.title} when={t.when} done={t.done}/>)
            })
            
            
            }
            </S.Content>
            {/* Footer */}
            <Footer/>
        </S.Container>
    )
}

export default Home;
