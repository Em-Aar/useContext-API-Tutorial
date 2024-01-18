
import Dashboard from "@/components/Dashboard";
import MyProvider from "@/components/MyProvider";
import Test from "@/components/Test";



export default function Home() {
  // const user = {
  //   id:1,
  //   name: 'Rehan',
  //   email: 'rehan@example.com'
  // }
  return (
    <main className="flex flex-col items-center justify-between p-6 m-6 ring ring-black ">
      <h2 className="m-2 text-3xl font-bold ">This is our Home Page</h2>
      
      <MyProvider>
      <Test />
      <Dashboard />
      </MyProvider>
    </main>
  )
}
