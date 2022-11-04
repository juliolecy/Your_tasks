import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import * as k from '../styles/styles'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useSession } from 'next-auth/react'

export default function Home() {
    const {data:session} = useSession()
  return (
    <>
    <Head>
    <title> JLins - Board</title>
    </Head>
        <k.Container>
                <h1>A tool for your days</h1>
                {!session && (

                    <h2>Sign in with github to see our services</h2>
                )}
            <img src='images/forms.svg' alt='board k.Container image'/>

            {session && (
                <k.GoBoard href='/board'>
                    <i></i>
                    <span>Board</span>
                </k.GoBoard>
            )}

            <k.SocialMediaContainer>
                <a href='https://www.linkedin.com/in/jlins/' target='_blank' rel="noreferrer" >
                    <FaLinkedin />
                </a>
                <a href='https://github.com/juliolecy/' target='_blank' rel="noreferrer" >
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
