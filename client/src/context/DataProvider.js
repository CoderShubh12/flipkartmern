import { createContext, useState } from "react"



export const DataContext=createContext()
export const DataProvider=({children})=>{

    const [loginUser, setLoginUser]=useState()
    return(
        <>
        <DataContext.Provider value={{loginUser, setLoginUser}}>
            {children}


        </DataContext.Provider>
        </>


    )

}