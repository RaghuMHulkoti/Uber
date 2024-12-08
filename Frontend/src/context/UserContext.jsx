import React, { createContext } from 'react'
const userDataContext=createContext();
const UserContext = (children) => {
    const [user, setuser] = useState({
        email:'',
        fullName:{
            firstName:'',
            lastName:'',
        }
    })
  return (
    <div>
      <userDataContext.provider value={[user, setuser]}>
        {children}
      </userDataContext.provider>
    </div>
  )
}

export default UserContext
