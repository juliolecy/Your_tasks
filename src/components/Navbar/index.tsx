import * as k from './styles'
import Link from 'next/link'
import SignInButton from '../SignInButton';

const Navbar = () =>{
    return (
        <k.Container>
            <k.Content>
            <k.Logo>JLINS</k.Logo>

            <nav>
                <Link href='/'>
            <span >Home</span>
                </Link>

                <Link href='/board'>
            <span>My board</span>
                </Link>
                


            </nav>

            <SignInButton/>
            </k.Content>
        </k.Container>
    )
}

export default Navbar;