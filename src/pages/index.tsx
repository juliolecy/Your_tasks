import { GetStaticProps } from 'next'
import Head from 'next/head'
import * as k from '../styles/styles'

export default function Home() {
  return (
    <>
    <Head>
    <title> JLins - Board</title>
    </Head>
        <k.Container>
            <img src='images/board.svg' alt='board k.Container image'/>
            <section>
                <h1>Ferramenta para seu dia a dia</h1>
                <p>
                    <span>Online e gratuito.</span>
                </p>
            </section>

            <k.Donaters>
            <img src='https://sujeitoprogramador.com/steve.png' alt='profile'/>
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
