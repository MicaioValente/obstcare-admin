// Styles
import * as S from './Home.styles';

// Components
import { Cards } from 'components/cards';

const HomeScreen = () => {
  return (
    <S.Container>
      {<Cards name={"Obstetras"} data={"teste"} value={12} />}
    </S.Container>
  )

};

export default HomeScreen;
