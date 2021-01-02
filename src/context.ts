import { Container } from "inversify";
import { createContext } from "react";

export interface ContainerContext {
  readonly container: Container;
}

export const ContainerContext = createContext<ContainerContext>({
  container: new Container(),
});
