import { ColorSet } from "./ColorSet";
import "@emotion/react";

// 이 방식으로 Theme 인터페이스를 확장
declare module "@emotion/react" {
  export interface Theme {
    colors: ColorSet;
  }
}
