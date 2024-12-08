import { Header } from "./header/header";
import { Outlet } from 'react-router-dom'


export const Layout = () => {
    return (
      <>
        <Header></Header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </>
    );
    
};
