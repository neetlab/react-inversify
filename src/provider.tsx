import { Container } from 'inversify';
import { ReactNode } from 'react';
import { ContainerContext } from './context';

export interface ContainerProviderProps {
  readonly container: Container;
  readonly children: ReactNode;
}

export const ContainerProvider = (props: ContainerProviderProps) => {
  const { container, children } = props;

  return (
    <ContainerContext.Provider value={{ container }}>
      {children}
    </ContainerContext.Provider>
  )
}
