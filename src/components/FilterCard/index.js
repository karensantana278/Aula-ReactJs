import * as S from './styles';
import filter from '../../assets/filter.png';
import PropTypes from 'prop-types'

function FilterCard({ title, actived }){
    return(
        <S.Container actived={actived}>
            <img src={filter} alt="filtro"/>
            <span>{title}</span>
        </S.Container>
    )
}

FilterCard.propTypes = {
    title: PropTypes.string,
    actived: PropTypes.bool,
  }
  
export default FilterCard