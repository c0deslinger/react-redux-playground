import { connect } from "react-redux";
import { Navigate } from "react-router";
import LoadingAuth from "../../components/LoadingAuth";
import {
  getRefreshLoading,
  getToken,
  getUser,
} from "../../../store/ducks/auth/selectors";

export default function withAuth(WrappedComponent) {
  const Auth = ({ isAuthenthicated, loading, ...rest }) => {
    if (loading) return <LoadingAuth />;
    return isAuthenthicated ? (
      <WrappedComponent {...rest} />
    ) : (
      <Navigate to="/login" />
    );
  };
  const mapStateToProps = (state) => ({
    isAuthenthicated: getUser(state) && getToken(state),
    loading: getRefreshLoading(state),
  });
  return connect(mapStateToProps)(Auth);
}
