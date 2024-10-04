import React, { useState } from "react"



export default function Formhandlin() {
    let [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        subs:'',
        role:''
      });
    
      const changehandle = (event) =>{
        const {name, value, type, checked} = event.target;
        const fieldvalue = type === 'checkbox' ? checked : value;
        // console.log(name, value)

        setFormData({
            ...formData,
            [name]:fieldvalue

        });
    }
        const handlesubmit = (event) =>{
            event.preventDefault();
            console.log('Formdata',formData);
      }
      
  return (
    <div>
         <form onSubmit={handlesubmit}>
        <h1>Form handling on</h1>
            <div>
                <label>Name</label>
                <input type='text' id='username' name='username' value={formData.username} onChange={changehandle}/>

            </div>
           
            <div>
                <label>Email</label>
                <input type='email' id='email' name='email'  value={formData.email} onChange={changehandle}/>
            </div>

            <div>
                <label>Password</label>
                <input type='password' id='password' name='password'  value={formData.password} onChange={changehandle}/>
            </div>

            <div>
                <label>Subscribe</label>
                <input type='checkbox' id='sub' name='sub'  value={formData.subs} onChange={changehandle}/>
            </div>

            <div>
                <label>Role</label>
                <select id='role' name='role'  value={formData.role} onChange={changehandle}>
                    <option>Select</option>
                    <option>User</option>
                    <option>admin</option>

                </select>
            </div>

                <button type='submit'>Submit</button>   
        </form>
        

    </div>
  )
}
