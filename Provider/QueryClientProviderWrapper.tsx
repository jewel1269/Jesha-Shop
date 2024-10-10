'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


// Create a QueryClient instance
const queryClient = new QueryClient();

const QueryClientProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default QueryClientProviderWrapper;
