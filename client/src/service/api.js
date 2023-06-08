import axios from "axios"


const URl="http://localhost:8080";

export const authenticateSignup=async(data)=>{
try{
 return await axios.post(`${URl}/signup`, data)
}
catch(error){
    console.log("error while calling Api", error)

}
}

export const authenticateLogin=async(data)=>{
    try{
        return await axios.post(`${URl}/login`, data)

    }catch(error){
        console.log("error while  login", error)

    }
}
