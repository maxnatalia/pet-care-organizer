import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { LayoutContainer, Main } from "./styled";

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Navigation />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
