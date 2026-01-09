import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // 1. If not logged in at all, go to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 2. If role doesn't match the required role for this page
  if (!allowedRoles.includes(user.Role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  // 3. Everything is okay? Show the page
  return <Outlet />;
};

export default ProtectedRoute;