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
            onClick={()=>signOut()}>
                <img src={session.user?.image} alt='profile'/>
                Hello, {session.user?.name}
                <FiX color='#737388' />
            </k.Button>
            )
        } else {
            return (
            <k.Button
            type="button"
            onClick={()=>signIn('github')}>
                <FaGithub color='#FFF'/>
                Login with Github
            </k.Button>
        )
}
}

export default SignInButton;
