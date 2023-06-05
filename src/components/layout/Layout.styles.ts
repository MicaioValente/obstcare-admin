import styled, { css } from 'styled-components';

export const Component = styled.div<{ isCollapsed: boolean }>`
  .ant-layout-sider-children {
    margin: 1rem;
  }

  .site-layout {
    background: var(--fff);
  }

  .ant-menu-submenu svg {
    font-size: 22px !important;
  }

  .ant-menu {
    background: none !important;
  }

  .ant-menu-item svg {
    font-size: 22px !important;
  }

  .ant-menu-light.ant-menu-root.ant-menu-inline{
    border-inline-end: none;
  }

  .ant-menu-item-selected {
    background: var(--active);
    color: #fff;
  }

  span.ant-layout-sider-zero-width-trigger.ant-layout-sider-zero-width-trigger-left {
    top: 90px !important;
  }

  ${({ isCollapsed }) =>
    !isCollapsed &&
    css`
      aside.ant-layout-sider.ant-layout-sider-light.ant-layout-sider-below {
        position: fixed !important;
        height: 100vh !important;
        width: 100vw !important;
        min-width: 100% !important;
        z-index: 1 !important;
      }
    `}
`;

export const Avatar = styled.div`
  cursor: pointer;
  display: flex;
  margin-bottom: 2rem;
`;
