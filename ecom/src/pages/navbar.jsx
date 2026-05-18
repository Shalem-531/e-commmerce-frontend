import { Link, useLocation } from "react-router-dom";


export const Navbar = ({ user, setUser }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;



  return (
    <div className="p-4 bg-gray-200 flex justify-between items-center">
   

      <div>
        {user ? (
         <></>
        ) : path === "/" ? (
          <Link
            to="/login"
            className="bg-gray-800 text-white px-3 py-1 rounded"
          >
            Login
          </Link>
        ) : (
          <Link
            to="/"
            className="bg-gray-800 text-white px-3 py-1 rounded"
          >
            Register
          </Link>
        )}
      </div>
    </div>
  );
};