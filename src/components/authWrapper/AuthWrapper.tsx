import { CustomAppProps } from 'pages/_app';

const AuthWrapper = ({ Component, pageProps }: CustomAppProps) => {
  return <Component {...pageProps} />;
};

export default AuthWrapper;
