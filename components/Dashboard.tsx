
import UserDetails from './UserDetails'

export default function Dashboard() {
  return (
    <div className='flex flex-col items-center justify-between p-6 m-6 ring ring-teal-500'>
        <h2 className='text-xl font-bold m-2 '>This is our Dashboard Component</h2>
        <UserDetails />
      
    </div>
  )
}
