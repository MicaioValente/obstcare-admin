import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Header = styled.div`
  width: 63%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  overflow: visible;
  z-index: 1;
  gap: 24px;

  .filters {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .actions {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const Content = styled.div``;
