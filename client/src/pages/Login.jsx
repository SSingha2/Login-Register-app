import { useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();
    const [data, setData] = useState({
      email: '',
      password: '',
    })

    const loginUser = async (e) => {
        e.preventDefault();
        const {email, password} = data;
        try {
          const {data} = await axios.post('/login', {
            email,
            password
          });
          if(data.error){
            toast.error(data.error)
          }else{
            setData({});
            navigate('/dashboard');
          }
        } catch (error) {
          console.error(error);
        }
    }

  return (<>
    <title>Login</title>
    <div className="main-form">
      <form className="form" onSubmit={loginUser}>
        <label className="form-labels">Email</label>
        <input type="email" 
               placeholder='Enter Email' 
               value={data.email} 
               onChange={(e) => setData({...data, email: e.target.value})}/><br />
        <label className="form-labels">Password</label>
        <input type="password" 
               placeholder='Enter Password' 
               value={data.password} 
               onChange={(e) => setData({...data, password: e.target.value})}/><br />
        <button className="submit-button" type='submit'>Login</button>
      </form>
    </div>
  </>)
}
