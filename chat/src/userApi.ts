import axios from "axios"

export const userRegister = async (userData: any) => {
    
    try {
        const res = await axios.post('http://localhost:3000/api/user/register', { userData });
        if (res.status === 200) {
            return res.data;
        }
    } catch (err: any) {
        // Ensure we are throwing an Error instance
        if (err.response && err.response.data && err.response.data.message) {
            throw new Error(err.response.data.message);
        } else {
            console.log(err)
            throw new Error(err.response.data);
        }
    }
};

export const getUser = async (formData: any) => {
    
    try {
        const res = await axios.get('http://localhost:3000/api/user/login', { params: { formData } });
        if (res.status === 200) {
            return res.data;
        }
    } catch (err: any) {
        // Ensure we are throwing an Error instance
        if (err.response && err.response.data && err.response.data.message) {
            throw new Error(err.response.data.message);
        } else {
            console.log(err)
            throw new Error(err.response.data);
        }
    }
}