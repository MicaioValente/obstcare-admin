// React
import * as React from 'react';

// Styles
import * as S from './Cards.styles';

type cardsProps = {
  name: string;
  data: string
  value: number
};

const Cards = ({ name, data, value }: cardsProps) => {
  return (
    <S.Component>
      <p>{name}</p>
      <p>{data}</p>
      <p>{value}</p>
    </S.Component>
  );
};

export default Cards;
