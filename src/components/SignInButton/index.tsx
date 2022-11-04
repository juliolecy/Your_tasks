import { signIn, signOut, useSession } from 'next-auth/react';
import * as k from './styles'
import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'

const SignInButton = () =>{
    const { data: session, status } = useSession()
    //console.log(session, status)

    if(session){
        return (
            <k.Button
            type="button"
            >
                <img src={session.user?.image} alt='profile'/>
                Hello, {session.user?.name}
                <FiX onClick={()=>signOut()}
                color='#737388' />
            </k.Button>
            )
        } else {
            return (

            <k.SignIn
            onClick={()=>signIn('github', {callbackUrl: 'https://jlins-your-tasks.vercel.app/'})}>
                Login
                <FaGithub/>
            </k.SignIn>
        )
}
}

export default SignInButton;
