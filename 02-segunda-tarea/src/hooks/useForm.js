import { useState } from "react"

export const useForm = (initialValue) => {

    const [Form, setForm] = useState(initialValue);


    const handleChange = (event) => {

        const { name, value } = event.target

        setForm({
            ...Form,
            [name]: value
        })
    }

    const handleReset = (event) => {
        setForm(initialValue)
    }



    return {
        Form,   
        handleChange,
        handleReset
    }
};


