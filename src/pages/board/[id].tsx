import {GetServerSideProps} from 'next'
import { getSession } from 'next-auth/react'
import firebase from '../../services/firebaseConnection'
import {format} from 'date-fns'

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
        <div>{task.task}</div>
    )
}

export const getServerSideProps: GetServerSideProps = async({req, params})=>{
   // const {category} = params
 //  console.log(id)
    const session = await getSession({req})

    if(!session?.user.uid){
        return{
            redirect:{
                destination: '/board',
                permanent: false,
            }
        }
    }

    const data = await firebase.firestore().collection('tasks').doc(String(id))
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
