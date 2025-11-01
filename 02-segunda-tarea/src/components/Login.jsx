import { useForm } from "../hooks/useForm.js"


export const Login = ({ onLogin }) => {

    const handleSubmit = (e) => {
        //* Prevenir que se recargue la pagina
        e.preventDefault();
        onLogin(Form.username)
        handleReset();
    }

    const { Form, handleChange, handleReset } = useForm({
        username: '',
        email: ''
    })

    return (
        <form>
            <input type="text" name="username" value={Form.username} onChange={handleChange} /> 
            <br></br>
            <input type="text" name="email" value={Form.email} onChange={handleChange} />
            <br></br>
            <button onClick={handleSubmit}> Login </button>
            <br></br>
        </form>
    )
}

