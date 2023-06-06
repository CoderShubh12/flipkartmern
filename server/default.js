import { products } from "./constant/data.js"
import Product from "./modal/productSchema.js"

export const DefaultData=async()=>{
try{
   
   await Product.insertMany(products);
    console.log("data imported succesfully")


}
catch(error){
    console.log("error while inserting data", error.message)

}


}