import './register.css';

const Register = () => {
  return (
    <div className='register'>
       <div className="register-wrapper">
        <h1>Create An Account</h1>
        <form >
            <input type="text"  placeholder='name' />
            <input type="text" placeholder="last name" />
            <input type="text"  placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='password' />
            <input type="password"  placeholder='confirm  password' />
            <p>By creating an account,  I  consent to the processing  of  my personal   data
              in accordance with the  <b>Privacy Policy</b>
            </p>
            <button>Create</button>
        </form>
       </div>
        </div>
  )
}

export default Register