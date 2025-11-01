import { useForm } from "../hooks/useForm.js"



export const Register = () => {


    const { Form, handleChange, handleReset } = useForm({
        username: '',
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    })
    return (
        <form>
            <input type="text" name="username" value={Form.username} onChange={handleChange} />
            <br></br>
            <input type="text" name="email" value={Form.email} onChange={handleChange} />
            <br></br>
            <input type="text" name="password" value={Form.password} onChange={handleChange} />
            <br></br>
            <input type="text" name="firstname" value={Form.firstname} onChange={handleChange} />
            <br></br>
            <input type="text" name="lastname" value={Form.lastname} onChange={handleChange} />
            <br></br>
            <button onClick={() => console.log(Form)} type="button">Registrarse</button>
            <br></br>
            <button onClick={handleReset} type="button">Reset</button>
            <br></br>
        </form>
    )
}


