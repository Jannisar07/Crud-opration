import React, {useState } from 'react'
import axios from 'axios'


function Create() {

    var[name,setName]= useState("")
    var[age,setAge]= useState(0)
    var[email,setEmail]= useState("")

    const submitdata = (e) => {
        e.preventDefault()
        
        axios.post("https://666ac4147013419182d0d85b.mockapi.io/crudapp", {
          Username: name,
          UserAge: age,
          UserEmail: email
        })
      }
    return (
      <div className="row">
        <form action="" onSubmit={submitdata}>

            <div className="col-4 mx-auto">
                <div className="form-group  mt-4">
                    <label>Username</label>
                    <input type="text" className='form-control' onChange={(e)=>setName(e.target.value)} />
                </div>

                <div className="form-group  mt-4">
                    <label>UserAge</label>
                    <input type="text" className='form-control' onChange={(e)=>setAge(e.target.value)}/>
                </div>

                <div className="form-  mt-4">
                    <label>UserEmail</label>
                    <input type="text" className='form-control'  onChange={(e)=>setEmail(e.target.value)} />
                </div>

                <input type="submit"  className='btn btn-outline-danger mt-4'/>
            </div>
            
        </form>
      </div>
  )
}

export default Create