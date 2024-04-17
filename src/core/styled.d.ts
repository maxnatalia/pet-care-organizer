import "styled-components";

import { themeLight } from "./theme";

type Theme = typeof themeLight;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
