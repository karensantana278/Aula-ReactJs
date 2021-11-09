import React from 'react';
import * as S from './styles';
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import FilterCard from '../../components/FilterCard'

function Home() {
    return (
        <S.Container>
            <Header/>
            {/* Header */}

            <S.FilterArea>
            {/* FilterCard */}
            <FilterCard/>
            </S.FilterArea>

            <S.Title>
                <h3>TAREFAS</h3>
            </S.Title>
            <S.Content>
            {/* TaskCard */}
            </S.Content>
            {/* Footer */}
            <Footer/>
        </S.Container>
    )
}

export default Home;
