import styled, { css } from 'styled-components';

export const Component = styled.div<{ income: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 210px;
  height: 200px;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
  font-weight: 500;

  .name {
    margin-bottom: 4px;
    font-size: 18px;
    @media (max-width: 960px) {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .data {
    color: #8b909a;
  }

  .value {
    font-size: 32px;
  }

  .income {
    display: flex;
    color: #8b909a;

    p {
      color: #1eb564;
      content: '';
    }

    p::before {
      font-size: 16px;
      content: '↑' !important;
    }
  }

  ${({ income }) =>
    income &&
    css`
      .income {
        p {
          color: #fd0d44;
        }

        p::before {
          font-size: 16px;
          content: '↓' !important;
        }
      }
    `}
`;
