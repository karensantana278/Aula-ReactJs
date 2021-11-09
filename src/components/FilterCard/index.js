import * as S from './styles';
import filter from '../../assets/filter.png';

function FilterCard(){
    return(
        <S.Container actived={true}>
            <img src={filter} alt="filtro"/>
            <span>Todos</span>
        </S.Container>
    )
}

export default FilterCard