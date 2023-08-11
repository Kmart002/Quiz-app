import React, { useEffect, useState } from 'react';
import Image from '../../Assests/logo.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Logininpage = () => {
    const [errorMessage, setErrorMessage] = useState()
    const [isSubmitted, setIsSubmitted]= useState(false)
    const [email, setEmail]= useState("")
    const [pass, setPass] = useState("")
    

    const inputDatas = [
        {
            Email: 'username',
            password: 'password'
        },

        {
            Email: "username2",
            password: "password2"
        }
    ]

    const error = {
        Email: "invalid username",
        password: "invalid password"
    }
    

    const handleSubmit = (event)=>{
        event.preventDefault();
    }


    const showToastMessage = () => {
        toast.success('Login Successful!', {
            position: toast.POSITION.TOP_RIGHT
        });
        
    }
    return (
        <div className=' h-[100svh] grid grid-cols-2'>
         <section className=' flex justify-center items-center'>
            <img className=' h-full' src={Image} alt="" />
         </section>
         <section className=' flex items-center justify-center'>
            <form onSubmit={handleSubmit} action="" className=' flex flex-col justify-center items-center'>
                <div className=' grid'>
                    <label htmlFor="">Email</label>
                    <input className=' outline-none border-2 border-[orange] py-2 px-5 rounded-md'id= "username" 
                    name="username" onChange={(e)=>setEmail(e.target.value)} type="text" required />
                    <br />
                    <label htmlFor="">Password</label>
                    <input className=' outline-none border-2 border-[orange] py-2 px-5 rounded-md' id= "password" 
                    name="password" onChange={(e)=>setPass(e.target.value)} type="password" required/>
                </div>
                <div className=' pt-9'>
                    <button  
                    className=' bg-blue-400 text-white rounded-md hover:scale-90 py-3 px-10 hover:transition-all ' 
                    type="submit" onClick={showToastMessage}>Login</button>
                    <ToastContainer/>
                </div>
            </form>
         </section>
        </div>
    );

}
export default Logininpage;
