import { useContext } from "react"
import { ContainerContext } from "./context"

export const useContainer = () => {
  return useContext(ContainerContext).container;
}
