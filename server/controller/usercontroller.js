import signupUser from "../modal/user_schema.js";


export const  userSignup=async(req, res)=>{

    try{

        const exist=await signupUser.findOne({username: req.body.username})
        const user=req.body;
        console.log("user", user)
        if(exist){
            return res.status(401).json({message:"username already exist"})
        }
        const newUser=new signupUser(user)
        await newUser.save();
        res.status(200).json({message: "user signup successfully", result:newUser})
    }
    catch(error)
    {
        res.status(500).json({message: error.message})

    }

}

export  const userLogin= async(req, res)=>{
    try{

      

    }
    catch(error){

    }
}