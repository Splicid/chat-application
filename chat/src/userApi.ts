import axios from "axios"



export const userApi = (userData: any) => {
    console.log(userData)
}

export const userRegister = (userData: any) => {
    axios.post('http://localhost:3000/api/user/register', 
    {userData}
    ).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}

