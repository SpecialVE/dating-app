import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

/**
 * https://tanstack.com/query/latest/docs/framework/react/quick-start
 */
export const TanstackProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* https://tanstack.com/query/latest/docs/framework/react/devtools */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
