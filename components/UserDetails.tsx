'use client'
import { UserContext } from "@/context/UserContext"
import { MyCustomType } from "@/types"
import { useContext,useEffect } from "react"


export default function UserDetails() {
    const user1 = {
          id:1,
          name: 'Rehan',
          email: 'rehan@example.com'
        }
    const getUser = () => {
        setUser(user1)
        
    }
    const contextvalue = useContext<MyCustomType | undefined>(UserContext)
    if(!contextvalue){
        throw new Error ('Context not found')
    }
    const {user,setUser} = contextvalue
    const handleChange = () => {
        user && setUser(user.id===1?{
            id:2,
            name: 'Shahid',
            email: 'shahid@example.com'
        }: user1)
    }
  useEffect(()=>{
    getUser()
  },[])
    
  return (
    <div className="flex flex-col items-center justify-between p-6 m-6 ring ring-red-500">
      <h2 className="text-xl font-bold">User Details</h2>
      { user && 
      <div className="flex flex-col items-center justify-between p-4">
        <p>Name:{user.name}</p>
        <p>Email:{user.email}</p>
        <button className="mt-2 bg-purple-500 text-sm text-gray-100 px-3 py-2 rounded" onClick={handleChange}>Change User</button>
      </div>
      }
    </div>
  )
}
