import { React } from 'react'
import { Link } from 'react-router-dom'

const FormSignIn = () => {
    return ( 
        <div>
            <h1>Login</h1>
            <p>
                Or <Link to="/register" >Link</Link>
            </p>
        </div>
    )
}

export default FormSignIn