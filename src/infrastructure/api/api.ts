import axios from "axios"

export const fetchData = async (endPoint: string) => {
    const response = await axios.get(endPoint)
    return response.data
}
