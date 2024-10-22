import { React } from 'react'
import { Link } from 'react-router-dom'

const FormSignUp = () => {
    return ( 
        <div>
            <h1>Register</h1>
            <p>
                Or <Link to="/FormSignIn" >Link 2</Link>
            </p>
        </div>
    )
}

export default FormSignUp