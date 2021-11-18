import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import FilterCard from '../../components/FilterCard'
import TaskCard from '../../components/TaskCard'
import api from '../../services/api'


function Home() {
    const [filterActived, setFilterActived] = useState('all');
    const [tasksApi, setTasksApi] = useState([]);
    async function loadTasks(){
        await api.get(`/task/filter/${filterActived}/321654`)
        .then(response => {
            setTasksApi(response.data)
        })
    }
    useEffect(()=>{
        loadTasks()
    }, [filterActived])
    return (
        <S.Container>
            <Header/>
            {/* Header */}

            <S.FilterArea>
            {/* FilterCard */}
            
            <button  type="button" onClick={() => setFilterActived("today")}>
            <FilterCard title="Hoje" actived={filterActived =='today'} />
            </button>
            <button type="button" onClick={() => setFilterActived("week")}>
            <FilterCard title="Semana" actived={filterActived =='week'} />
            </button>
            <button type="button" onClick={() => setFilterActived("month")}>
            <FilterCard title="Mês" actived={filterActived =='month'} />
            </button>
            <button type="button" onClick={() => setFilterActived("year")}>
            <FilterCard title="Ano" actived={filterActived =='year'} />
            </button>
            <button  type="button" onClick={() => setFilterActived("all")}>
            <FilterCard title="Todos"  actived={filterActived =='all'}/>
            </button>

            </S.FilterArea>

            <S.Title>
                <h3>TAREFAS</h3>
            </S.Title>
            <S.Content>
            {/* TaskCard */}
            {tasksApi.map((t, i) =>{
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
