// Next
import type { AppProps } from 'next/app';
import Head from 'next/head';

// React-query
import { QueryClientProvider } from '@tanstack/react-query';

// Styles
import GlobalStyle from '../styles/globals';

// Utils
import { queryClient } from 'utils/querryClient';

// Components
import { AuthWrapper } from 'components/authWrapper';

export interface CustomAppProps extends Omit<AppProps, 'Component'> {
  Component: AppProps['Component'];
  dehydratedState: unknown;
}

const App = (props: CustomAppProps) => {
  return (
    <>
      <Head>
        <title>Obstcare-Admin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <AuthWrapper {...props} />




        
      </QueryClientProvider>
    </>
  );
};

export default App;
