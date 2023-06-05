// Next
import type { AppProps } from 'next/app';
import Head from 'next/head';

// Redux
import { Provider } from 'react-redux';

// React-query
import { QueryClientProvider } from '@tanstack/react-query';

// Styles
import GlobalStyle from '../styles/globals';

// Models
import { RolesEnum, ModulesEnum } from 'models';

// Utils
import { queryClient } from 'utils/querryClient';

// Components
import { AuthWrapper } from 'components/authWrapper';

import { store } from 'store'
export interface CustomAppProps extends Omit<AppProps, 'Component'> {
  Component: AppProps['Component'] & { allowedRoles?: RolesEnum[]; allowedModule?: ModulesEnum };
  dehydratedState: unknown;
}
// Context

const App = (props: CustomAppProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Obstcare-Admin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <GlobalStyle />
          <AuthWrapper {...props} />
        </Provider>
      </QueryClientProvider>
    </>
  );
};

export default App;
