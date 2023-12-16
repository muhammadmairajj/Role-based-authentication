import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import { PrivateRoute } from "./routes/PrivateRoute";
import WelcomePage from "./pages/WelcomePage";
import { AdminRoute } from "./routes/AdminRoute";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/welcome"
          element={
            <PrivateRoute>
              <WelcomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-page"
          element={
            <AdminRoute>
              <AdminPage />
            </AdminRoute>
          }
        />
        <Route path="/*" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
