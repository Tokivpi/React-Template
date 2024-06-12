import React, { memo } from "react";
import type { FC, ReactNode } from "react";
import { HomeStyle } from "@/views/home/style";

 interface IProps {
  children?: ReactNode
}

const Home: FC<IProps> = (props) => {
  return (
    <HomeStyle>
      Home
    </HomeStyle>);
};

export default memo(Home);
