import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import * as k from '../styles/styles'
import BoardImage from '../../public/images/forms.svg'
import { FaGithub } from 'react-icons/fa'

export default function Home() {
  return (
    <>
    <Head>
    <title> JLins - Board</title>
    </Head>
        <k.Container>
                <h1>A tool for your days</h1>
            <img src='images/forms.svg' alt='board k.Container image'/>


            <k.Donaters>
            <img src='https://sujeitoprogramador.com/steve.png' alt='profile'/>
            </k.Donaters>
            <k.SocialMediaContainer>
                <a href='#'>
                    <FaGithub />
                </a>
                <a href='#'>
                    <FaGithub />
                </a>
                <a href='#'>
                    <FaGithub />
                </a>
                <div>

                </div>
                </k.SocialMediaContainer>
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
