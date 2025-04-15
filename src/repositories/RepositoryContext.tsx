import type { PropsWithChildren } from "react";
import { createContext, useContext } from "react";
import { IFaqRepository } from "./faqRepository/IFaqRepository";
import { tFaqRepo } from "./faqRepository/impl/TFaqRepository";
import { ICategoryRepository } from "./categoryRepository/ICategoryRepository";
import { tCategoryRepo } from "./categoryRepository/impl/TCategoryRepository";

export type Repositories = {
  faqRepo: IFaqRepository;
  categoryRepo: ICategoryRepository;
};

const repositoryContext = createContext<Repositories | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useRepository = () => {
  const repos = useContext(repositoryContext);

  if (!repos) {
    throw Error("상위에 RepositoryProvider가 필요합니다.");
  }

  return repos;
};

// eslint-disable-next-line react-refresh/only-export-components
export const defaultRepos: Repositories = {
  faqRepo: tFaqRepo,
  categoryRepo: tCategoryRepo,
};

export const RepositoryProvider = ({
  repositories,
  children,
}: PropsWithChildren<{ repositories?: Repositories }>) => (
  <repositoryContext.Provider value={{ ...defaultRepos, ...repositories }}>
    {children}
  </repositoryContext.Provider>
);
