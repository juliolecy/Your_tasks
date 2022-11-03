import * as k from './styles'
import Link from 'next/link'

const SupportButton = () =>{
    return (
        <k.Container>
            <Link href="/donate">
                <button>Donate</button>
            </Link>
        </k.Container>
    )
}

export default SupportButton