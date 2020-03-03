import React, { Suspense, lazy } from "react";

import Loading from './libs/Loading';
const MainContainer = lazy(() => import('./containers/Main'));

const App = () => {

  return (
     <>
        <Suspense fallback={<Loading />}>
            <MainContainer />
        </Suspense>

     </>
  );
}
export default App;
