import axios from "axios"

const URL = process.env.REACT_APP_API

const obtenerLugar=async(catId,lugId)=>{
    try {
        const endpoint=`${URL}/categorias/${catId}/lugares/${lugId}`
        const {data,status}=await axios.get(endpoint)
        if (status===200) {
            return data
        } else {
            throw Error("Error al obtener data")            
        }
    } catch (error) {
        throw error
    }
}

export{
    obtenerLugar
}