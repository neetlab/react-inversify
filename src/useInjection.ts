import { useContainer } from "./useContainer"

export const useInjection = <T>(identifier: string | symbol) => {
  const container = useContainer();
  return container.get<T>(identifier);
}
