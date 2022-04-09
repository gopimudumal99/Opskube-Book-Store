import React, { useState} from 'react'

initialData = {
    name: '',
    email:"",
    password: '',
}

function Register() {
    const [formData,setFormData] = useState(initialData)
    const { name,email,password} = formData
  return (
    <div>
          <form action="">
              <input value={name} type="text" name="name"  />
              <input type="email" name='email' value={email} />
              <input type="password" name="password" value={password} />
              <input type="submit"  />
        </form>
    </div>
  )
}

export default Register