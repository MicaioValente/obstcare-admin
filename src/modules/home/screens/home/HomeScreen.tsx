// Styles
import * as S from './Home.styles';

// Components
import { Cards } from 'components/cards';
import { Charts } from 'components/charts';

const HomeScreen = () => {
  const cardsData = [
    { name: 'Obstetras', data: '7', value: 12, income: 6 },
    { name: 'Gestantes', data: '7', value: 17, income: 6 },
    { name: 'Monitoramentos', data: '7', value: 65, income: 6 },
    { name: 'Lembretes', data: '7', value: 30, income: 6 },
  ];

  const data = [0, 10, 15, 17, 30, 40, 50];
  const labels = ['1', '5', '10', '15', '20', '25', '30'];

  return (
    <S.Container>
      <S.Content>
        {cardsData.map((card, index) => (
          <Cards key={index} name={card.name} data={card.data} value={card.value} income={card.income} />
        ))}
      </S.Content>

      <S.ContentCharts>
        <Charts.NewChart data={data} labels={labels} />
        <Charts.ActivesChart data={data} labels={labels} />
        <Charts.RatiosChart data={data} labels={labels} />
        <Charts.RetentionChart data={data} labels={labels} />
      </S.ContentCharts>
    </S.Container>
  );
};

export default HomeScreen;
