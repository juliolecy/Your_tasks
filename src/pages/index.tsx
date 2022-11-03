import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import * as k from '../styles/styles'
import BoardImage from '../../public/images/board.svg'

export default function Home() {
  return (
    <>
    <Head>
    <title> JLins - Board</title>
    </Head>
        <k.Container>
            <Image src={BoardImage} alt='board k.Container image'/>
            <section>
                <h1>Ferramenta para seu dia a dia</h1>
                <p>
                    <span>Online e gratuito.</span>
                </p>
            </section>

            <k.Donaters>
            <Image src='https://sujeitoprogramador.com/steve.png' alt='profile'/>
            </k.Donaters>
         </k.Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {

        },
        revalidate: 60 * 60
    }
}
