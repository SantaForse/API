import React, { useEffect } from 'react'
import { IUserContext ,UserContext } from '../contexts/UserContext'

const UpdateForm = () => {
    const { user, setUser, get, update } = React.useContext(UserContext) as IUserContext


  return (
      <form onSubmit={update} className="d-grid mb-5">
          <h3 className='display-6 mb-4'>Update User</h3>
          <input type="hidden" value={user.id} />
          <input value={user.firstName} onChange={(e) => setUser({...user, firstName: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='enter your name...' />
          <input value={user.lastName} onChange={(e) => setUser({...user, lastName: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='enter your last name...' />
          <input value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='enter your email...' />
      </form>
  )
}

export default UpdateForm