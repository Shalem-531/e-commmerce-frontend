import { Link, useLocation,useNavigate } from "react-router-dom";


export const Navbar = ({ user, setUser }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;



  return (
    <div className="p-4 bg-gray-200 flex justify-end items-center">
   

      <div>
        {user ? (
         <></>
        ) : path === "/" ? (
          <Link
            to="/login"
            className="bg-gray-800 text-white px-4 py-2 rounded no-underline hover:bg-red-600"
          >
            Login
          </Link>
        ) : (
          <Link
            to="/"
            className="bg-gray-800 text-white px-4 py-2 rounded no-underline hover:bg-red-600"
          >
            Register
          </Link>
        )}
      </div>
    </div>
  );
};