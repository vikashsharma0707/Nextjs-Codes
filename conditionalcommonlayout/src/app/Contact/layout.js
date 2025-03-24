"use client"


import { usePathname } from "next/navigation"



export default function Layout({children}){
    const currentPathName =usePathname()
    return(
        <>
        {
        currentPathName !== "/Contact/Employee" ? <h1>Common layout contact page</h1> : null
   }

   {children}
        </>

    )
}