import mongoose from "mongoose"

export const Connection=async(username, password)=>{
    const URl=`mongodb+srv://${username}:${password}@cluster0.zm28crl.mongodb.net/`
    
    try{
      await  mongoose.connect(URl,{useUnifiedTopology: true, useNewUrlParser: true})
      console.log("database connected successfully")

    }catch(error){
        console.log("error while connecting Database", error.message)

    }
}