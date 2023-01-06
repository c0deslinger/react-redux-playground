import {
    createBrowserRouter,
    RouterProvider
  } from "react-router-dom";
import Dashboard from "../pages/DashboardPage";
import LandingPage from "../pages/LandingPage";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import { connect } from "react-redux";
import { getUserRoleCodes } from "../../store/ducks/auth/selectors";
import CatalogPage from "../pages/CatalogPage";

const route = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    },
    {
      path: "/catalog",
      element: <CatalogPage />
    },
  ]);

  const App = ({ getUserRoles }) => {
    // const mappingRoleCode = getUserRoles?.includes('10') || getUserRoles?.includes('11') || getUserRoles?.includes('13');
  
    return <RouterProvider router={route} />
  }


const mapStateToProps = (state) => ({
  getUserRoles: getUserRoleCodes(state)
});

export default connect(mapStateToProps, null) (App)