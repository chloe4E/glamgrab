import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./Pages/HomePage/index";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<HomePage />}></Route>)
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
