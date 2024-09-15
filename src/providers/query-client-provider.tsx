"use client";

import {
  QueryClient,
  QueryClientProvider as QueryClientProviderDefault,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export function QueryClientProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <QueryClientProviderDefault client={queryClient}>{children}</QueryClientProviderDefault>;
}
