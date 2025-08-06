import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";

/** what are we doing here:
 * Is we are not loading the code for the grocery component in the start, I mean we won't be putting the code for
 * Grocery component in our single bundle file which is given to us by parcel(bundler) that is present in dist folder
 * *("dist/react.2c54e4d8.js") this is the file but we will create a seperate bundler file for our compoenet so it will
 * solve the problem which is loading all the components at once which can lead big size of the file which would
 * eventully lead to slow loading when opening the groceries rather we created a seperate bundled file.
 *
 * This process of making smaller bundles of this files is know as
 * 1. Chunking
 * 2. Code splitting
 * 3. Dynamic Loading
 * 4. On demand Loading
 *
 * If you go to dist folder you'll see we now have a grocery bundle
 **/
const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const AppComponent = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const user = "amitosh";
    setUserName(user);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />

        {/* <Body /> */}
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Have a Good day</h1>}>
            <Grocery />
          </Suspense>
        ),
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
