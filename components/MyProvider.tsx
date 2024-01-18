'use client'
import { UserContext } from "@/context/UserContext";
import { User } from "@/types";
import React from "react";
import { useState } from "react";

export default function MyProvider({children}:{children:React.ReactNode}) {
    const [user,setUser] = useState<User | null>(null)
  return (
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
  )
}
