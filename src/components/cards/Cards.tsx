// React
import { useEffect, useState } from 'react';

// Styles
import * as S from './Cards.styles';

type cardsProps = {
  name: string;
  data: string;
  value: number;
  income: number;
};

const Cards = ({ name, data, value, income }: cardsProps) => {
  const [incomeValue, setIncomeValue] = useState(false);

  useEffect(() => {
    setIncomeValue(income <= 0);
  }, [income]);

  return (
    <S.Component income={incomeValue}>
      <div>
        <h2 className="name">{name}</h2>
        <div className="data">Last {data} days</div>
      </div>
      <h2 className="value">{value}</h2>
      <div className="income">
        <p>{income}% </p>&nbsp; vs last 7 days
      </div>
    </S.Component>
  );
};

export default Cards;
