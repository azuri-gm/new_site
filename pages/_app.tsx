import type { AppProps } from 'next/app';
import React, { FC, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';
import '../styles/globals.scss';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 20 * 60 * 1000,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
};
export default MyApp;
