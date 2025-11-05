import { useNavigate } from "react-router";
import { useForm } from "../hooks/useForm"

export const RegisterPage = () => {
  const { formState, handleChange } = useForm({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const { username, password } = formState;

  const handleSubmit = (event) => {
    // prevenir que se reincie el formulario
    event.preventDefault();
    console.log(formState);

    navigate("/login");
  };

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={handleChange}
        />

        <input
          type="text"
          name="password"
          placeholder="password"
          value={password}
          onChange={handleChange}
        />

        <button>Registrarse</button>
      </form>

    </div>
  );
};
