import { useEffect, useState } from "react";
import { authService } from "../services/authService";

const AdminPage = () => {
  const [userRole, setUserRole] = useState();
  const [userEmail, setUserEmail] = useState();

  useEffect(() => {
    const role = authService.getUserRole();
    setUserRole(role);

    const email = authService.getUserEmail();
    setUserEmail(email);
  }, []);
  return (
    <>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col">
            <h1>ADMIN PANEL</h1>

            <ul className="list-group">
              <li className="list-group-item">ROLE: {userRole}</li>
              <li className="list-group-item">EMAIL: {userEmail}</li>
            </ul>
          </div>
        </div>
        <div className="bg-light text-left p-5 font-weight-bold">
          This section is restricted for only admin
        </div>
      </div>
    </>
  );
};

export default AdminPage;
