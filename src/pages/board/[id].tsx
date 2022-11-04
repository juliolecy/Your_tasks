import {GetServerSideProps} from 'next'
import { getSession } from 'next-auth/react'
import firebase from '../../services/firebaseConnection'
import {format} from 'date-fns'
import { ParsedUrlQuery } from 'querystring'
import * as k from './id.styles'
import Head from 'next/head'
import {FiCalendar } from 'react-icons/fi'

type Task = {
    id: string;
    created: string | Date;
    createdFormated?: string;
    task: string;
    userId: string;
    name: string;
}

interface Props{
    data: string;
}
export default function Task({data}: Props){
    const task = JSON.parse(data) as Task

    return(
        <>
        <Head>
        <title>Details of your task</title>
        </Head>
        <k.Container>
            <k.ContentContainer>
                <k.CreatedInfo>
                    <FiCalendar/>
                    <time>{task.createdFormated}</time>

                </k.CreatedInfo>

            </k.ContentContainer>
                <p>{task.task}</p>
        </k.Container>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async({req, params})=>{

    const session = await getSession({req})

    if(!session?.user.uid){
        return{
            redirect:{
                destination: '/board',
                permanent: false,
            }
        }
    }


        const id = (params as ParsedUrlQuery).id;

        const data = await firebase.firestore().collection('tasks')
        .doc(String(id))
        .get()
        .then((snapshot)=>{
        const data = {
            id: snapshot.id,
            created: snapshot.data()?.created,
            createdFormated: format(snapshot.data()?.created.toDate(), 'dd MMMM yyyy'),
            task: snapshot.data()?.task,
            userId: snapshot.data()?.userId,
            name: snapshot.data()?.name
        }

        return JSON.stringify(data);
    })

    return{
        props: {
            data

        }
    }
}
