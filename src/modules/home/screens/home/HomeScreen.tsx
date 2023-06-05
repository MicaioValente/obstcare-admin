// Styles
import * as S from './Home.styles';

// Components
import { Cards } from 'components/cards';
import { Charts } from 'components/charts';

const HomeScreen = () => {
  const cardsData = [
    { name: "Obstetras", data: "7", value: 12, income: 6 },
    { name: "Gestantes", data: "7", value: 17, income: 6 },
    { name: "Monitoramentos", data: "7", value: 65, income: 6 },
    { name: "Lembretes", data: "7", value: 30, income: 6 }
  ];

  return (
    <S.Container>
      {cardsData.map((card, index) => (
        <Cards
          key={index}
          name={card.name}
          data={card.data}
          value={card.value}
          income={card.income}
        />
      ))}
      <Charts />
    </S.Container>
  )

};

export default HomeScreen;
