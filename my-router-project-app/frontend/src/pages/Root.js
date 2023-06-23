import MainNavigation from "../components/MainNavigation"

import { Outlet, useNavigation } from "react-router-dom";

const Root = () => {
  const navigation = useNavigation();


  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === 'loading' && <p>Loanding...</p>}
        <Outlet />
      </main>
    </>
  );
};

export default Root;
