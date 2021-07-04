declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native";
  const content: React.FC<SvgProps>;
  export default content;
}
