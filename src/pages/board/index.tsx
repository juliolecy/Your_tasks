import * as k from './styles'
import Head from 'next/head'
import {FiPlus, FiCalendar, FiEdit2, FiTrash, FiEdit, FiClock} from 'react-icons/fi'
import SupportButton from '../../components/SupportButton'
import { GetServerSideProps } from 'next'
import { getSession, useSession } from 'next-auth/react'
import { useState, FormEvent } from 'react'
import firebase from '../../services/firebaseConnection'
import { format} from 'date-fns'
import Link from 'next/link'

type TaskList = {
    id: string;
    created: string | Date;
    createdFormated?:string;
    task: string;
    userId: string;
    name: string;
}

interface Props{
    user: {
        id: string;
        name: string;
    },
    data: string;
}

export default function Board({user, data} : Props){
console.log('cls in user on board index' + user.name)
    const {data:session} = useSession({required:true})
    const [input, setInput]= useState('');
    const [taskList, setTaskList] = useState<TaskList[]>(JSON.parse(data))

   async function handleAddTask(e: FormEvent){
        e.preventDefault()

        if(input === ''){
            alert('Write your task');
            return
        }

        await firebase.firestore().collection('tasks')
        .add({
            created: new Date(),
            task: input,
            userId: user.id,
            name: user.name
        })
        .then((doc)=>{
            console.log('cadastrado')
            let data = {
                id: doc.id,
                created: new Date(),
                createdFormated: format(new Date(), 'dd MMMM yyyy'),
                task: input,
                userId : user.id,
                name: user.name
            };

            setTaskList([...taskList, data]);
            setInput('')
        })
        .catch((err)=>{
            console.log(err)
        })

    }

    async function handleDelete(id:string){
        await firebase.firestore().collection('tasks').doc(id)
        .delete()
        .then(()=>{
            console.log('task deleted')
            let deletedTask = taskList.filter(item=>{
                return (item.id !== id)
            })
            setTaskList(deletedTask);
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <>
        <Head>
            <title>Schedule</title>
        </Head>
        <k.Container>
            <form onSubmit={handleAddTask}>
                <input type="text"
                placeholder='write your task here'
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                 />
                 <button type='submit'>
                    <FiPlus size={25} color='@17181f'/>
                 </button>
            </form>

            <h1>You have {taskList.length} {taskList.length === 1 ? 'task' : 'tasks' }!</h1>

            <section>
                {taskList.map((task) => (

                <k.TaskList key={task.id}>
                    <Link href={`/board/${task.id}`}>
                    <p>{task.task}</p>
                    </Link>

                    <k.ActionsContainer>
                        <div>
                            <div>
                                <FiCalendar size={20} color='#FFB800'/>
                                <time>{task.createdFormated}</time>
                            </div>

                            <button>
                                <span>Edit</span>
                                <FiEdit size={20} color='#FFF'/>
                            </button>
                        </div>

                        <button onClick={()=> handleDelete(task.id)}>
                            <FiTrash size={20} color="#FF3636"/>
                            <span>Delete</span>
                        </button>
                    </k.ActionsContainer>

                </k.TaskList>
                ))};
            </section>
        </k.Container>

        <k.DonatesContainer >
            <h2>Thank you for supporting this project</h2>
            <div>
                <FiClock size={20} color='#FFF'/>
                <time>Last donation: 3 days</time>
            </div>
        </k.DonatesContainer>

        <SupportButton/>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({req}) =>{
    const session = await getSession({req});


    if(!session?.user.uid){
        console.log('deu ruim aqui ó');
        return{
            redirect:{
                destination: '/',
                permanent: false
            }
        }
     }

    const tasks = await firebase.firestore().collection('tasks')
    .where('userId', '==', session?.user.uid)
    .orderBy('created', 'asc').get();
     const data = JSON.stringify(tasks.docs.map(item =>{
        return {
            id: item.id,
            createdFormated: format(item.data().created.toDate(), 'dd MMMM yyyy'),
            ...item.data(),
        }
     }))
     const user = {
        name: session.user.name,
        id: session.user.uid
     }

    return {
        props:{
           user, data
        }
    }
}
