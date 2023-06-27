import Header from "./common/Header";
import Footer from "./common/Footer";
import Authentication from "./components/Authentication";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import '../src/css/style.css'


const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Authentication />,
        },
        {
          path: 'home/:uid',
          element: <Home/>,
        },
        {
          path: "*",
          element: (
          
            <p>404 Page Not Found</p>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
