
import { useState, useEffect } from 'react';

export const useFetch = (url) => {


    const [state, setState] = useState({
        data: null,
        isLoading: true,
    });

    const getFetch = async () => {
        try {
            setState({ ...state, isLoading: true });
            const resp = await fetch(url);
            const data = await resp.json();
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setState({ data: data, isLoading: false });
        } catch (error) {
            console.log("Error al obtener los personajes", error);
        }
    };

    useEffect(() => {
        getFetch();
        return () => { console.log("desmonta"); };
    }, [url]);

    return {
        //* Esta es una manera de Retornar solo lo que se va a necesitar
        //* de esta manera no es necesario desestructurar
        //     data: state.data,
        // isLoading: state.isLoading
        //* Esta manera Retorno el objeto completo, porlo que en mi componente debo 
        //* desestructurar para utilizarlo
        state,
        setState
    }
}


