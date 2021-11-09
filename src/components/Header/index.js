import * as S from './styles';
import logo from '../../assets/logo.png';

function Header(){
    
    return( 
        <S.Container>
        <S.LeftSide>
            <img src={logo} alt="Logo" />
        </S.LeftSide>
        <S.RightSide>
            <button type="button">INÍCIO</button>
            <span className="dividir"/>
            <button type="button">NOVA TAREFA</button>
            <span className="dividir"/>
            <button type="button">SAIR</button>
        </S.RightSide>
      </S.Container>
    )
}

export default Header