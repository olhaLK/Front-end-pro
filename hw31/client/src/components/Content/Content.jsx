import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Content.css";
import { menuItems } from "../../common/menu";

export default function Content() {
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  )

  return (
    <Routes>
      {menuItems.map(({ path, Component, protected: isProtected }) => (
        <Route
          key={path}
          path={path}
          element={
            isProtected && !isAuthenticated
              ? <Navigate to="/auth" replace />
              : <Component />
          }
        />
      ))}
    </Routes>
  )
}
