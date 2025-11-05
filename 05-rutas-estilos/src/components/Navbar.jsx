import { Link, useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="">
      <Link to="/home" className="mr-4 hover:text-blue-800">
        Home
      </Link>
      <button
        className="mr-4"
        onClick={() => {
          console.log("object")
          localStorage.removeItem("isLogged");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </nav>
  );
};
