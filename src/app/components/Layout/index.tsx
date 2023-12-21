import React, { ReactElement, ReactNode } from "react";
import Header from "../Header";

interface LayoutProps {
  children: ReactNode | ReactElement[] | ReactNode;
}
const Layout:React.FC<LayoutProps> = ({ children }) => {

  return(
    <>
      <Header/>
      <main>{children}</main>
    </>
  )
};


export default Layout;
