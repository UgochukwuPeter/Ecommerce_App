
import './login.css'

const Login = () => {
  return (
    <div className='login'>
    <div className="login-wrapper">
     <h1>SIGN IN</h1>
     <form >
         <input type="email" placeholder='Email' />
         <input type="password" placeholder='password' />
         <button>login</button>
         <div  className='login-contain'>
         <span>Do Not Remember your password?</span>
         <span>Create a new account</span>
         </div>
        
     </form>
    </div>
     </div>
  )
}

export default Login