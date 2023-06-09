import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  color: #7d7d7d;

  thead tr {
    height: 75px;
    text-align: justify;
  }

  tbody tr {
    height: 60px;
  }

  tbody tr:hover {
    background: #f0f0f5;
    cursor: pointer;
  }

  tbody tr td:first-child {

    input {
      margin-bottom: 1rem;
      margin-right: 1rem;
    }
  }

  tbody tr td:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 12px;

    color: #323c47;
    font-weight: 500;
    font-size: 15px;
  }
`;
