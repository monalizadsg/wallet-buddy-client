import { Navigate, Outlet } from "react-router-dom";
import UserAppContainer from "./UserAppContainer";

function PrivateRoute() {
  // TODO: implement authentication check
  const isAuthenticated = true;
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <UserAppContainer>
      <Outlet />
    </UserAppContainer>
  );
}

export default PrivateRoute;
