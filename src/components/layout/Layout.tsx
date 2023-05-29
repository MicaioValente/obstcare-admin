// Next
import { useRouter } from 'next/router';

// React
import { useState } from 'react';

// Styles
import * as S from './Layout.styles';

// Models
import { LayoutProps } from 'models';

// Antd
import { Layout as LayoutContainer, Menu } from 'antd';

const Layout = ({ selectedKey, children }: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const router = useRouter();

  const onCollapse = (collapse: boolean) => {
    setCollapsed(collapse);
  };

  const { Header, Content, Sider } = LayoutContainer;

  return (
    <S.Component>
      <LayoutContainer style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          breakpoint="lg"
          collapsedWidth={isMobile ? 0 : 100}
          onBreakpoint={mobile => setIsMobile(mobile)}
          theme="light"
        >
          <Menu theme="light" defaultSelectedKeys={[selectedKey]} mode="inline">
            <Menu.Item
              key="1"
              onClick={() => {
                router.push('/home');
              }}
            >
              Home
            </Menu.Item>
            <Menu.SubMenu title="Users">
              <Menu.Item
                key="2"
                onClick={() => {
                  router.push('/obstetras');
                }}
              >
                Obstetras
              </Menu.Item>
              <Menu.Item
                key="3"
                onClick={() => {
                  router.push('/gestantes');
                }}
              >
                Gestantes
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <LayoutContainer className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ margin: '18px 0', minHeight: 400, padding: '18px' }}>
              {children}
            </div>
          </Content>
        </LayoutContainer>
      </LayoutContainer>
    </S.Component>
  );
};

export default Layout;
