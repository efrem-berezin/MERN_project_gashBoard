import { React }  from 'react'
import FormSignIn from "../../components/FormSignIn"
import FormSignUp from "../../components/FormSignUp"
import { useSelector, useDispatch } from 'react-redux'
import { setFormInReg } from '../../state/index'


const Home = () => {
    const dispatch = useDispatch();
    const formInReg = useSelector((state) => state.global.formInReg);

    return (
        <div>
           <h1>Demo portfolio  project </h1>
           <div>
           {formInReg ? <FormSignIn/> : <FormSignUp/>}
           </div>
        </div>
    )
}

export default Home

