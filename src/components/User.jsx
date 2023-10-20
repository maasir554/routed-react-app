import {React, useState} from 'react'
import { useParams, NavLink } from 'react-router-dom'

const UserIdOut = ({userid}) => {
  return (
    <>
    <h1 className='text-6xl font-extrabold text-teal-500 my-16'>
      This is the page of the user you searched for
    </h1>
    <div className='text-xl text-teal-900 bg-orange-100 p-5 rounded-xl'>
      User ID is: {userid}
    </div>
    <p className='mt-5 text-slate-800'>Similarly, other credentials of the user can also be displayed.</p>
    </>
  )
}

const TakeUserId = () => {
  const [uId, setUId] = useState('')
  return (
  <>
  <h1 className='text-slate-900 font-extrabold text-5xl mb-10'>
    Find a user
  </h1>
  <div className='flex flex-row w-full justify-center items-center gap-4'>
    <input className="bg-slate-200 px-5 py-2 rounded-lg" 
      type="text" value={uId} 
      onChange={e => setUId(e.target.value)} 
      placeholder='Enter the user id here'
    />
    
    <NavLink to={`/user/${uId}`} className={'text-xl text-slate-900 bg-slate-100 rounded-full p-3 hover:bg-slate-200 active:bg-slate-300'} >
      Submit
    </NavLink>
  </div>
  </>  
  )
}

function User() {
  const {userid} = useParams()
  return (
    <section className='content-main'>
      {
        userid ? <UserIdOut userid={userid} /> : <TakeUserId />
      }
    </section>
  )
}

export default User