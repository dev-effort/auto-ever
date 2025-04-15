import { QueryKey, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface UseQueryOptionsType<T, TData = T>
  extends Omit<UseQueryOptions<T, AxiosError, TData, QueryKey>, "queryKey"> {}
