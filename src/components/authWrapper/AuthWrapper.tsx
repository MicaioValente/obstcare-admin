import { CustomAppProps } from 'pages/_app';
import { selectUser } from 'store/features/user';
import { useAppSelector } from 'store/hooks';

const AuthWrapper = ({ Component, pageProps }: CustomAppProps) => {
  const { role, modules = [] } = useAppSelector(selectUser);

  const renderUnauthorized = () => <h1>Acesso não autorizado</h1>;

  if (Component.allowedRoles?.length && !Component.allowedRoles.includes(role)) {
    return renderUnauthorized();
  }

  if (Component.allowedModule && !modules.includes(Component.allowedModule)) {
    return renderUnauthorized();
  }

  return <Component {...pageProps} />;
};

export default AuthWrapper;
