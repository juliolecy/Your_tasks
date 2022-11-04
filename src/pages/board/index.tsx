import * as k from './styles'
import Head from 'next/head'
import {FiPlus, FiCalendar, FiTrash, FiClock, FiX} from 'react-icons/fi'
import { GetServerSideProps } from 'next'
import { getSession, useSession } from 'next-auth/react'
import { useState, FormEvent } from 'react'
import firebase from '../../services/firebaseConnection'
import { format} from 'date-fns'
import Link from 'next/link'
import { FaEdit } from 'react-icons/fa'

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
    const {data:session} = useSession({required:true})
    const [input, setInput]= useState('');
    const [taskList, setTaskList] = useState<TaskList[]>(JSON.parse(data))
    const [taskEdit, setTaskEdit] = useState<TaskList | null>(null)

   async function handleAddTask(e: FormEvent){
        e.preventDefault()

        if(input === ''){
            alert('Write your task, please');
            return
        }

        if(taskEdit){
            await firebase.firestore().collection('tasks')
            .doc(taskEdit.id)
            .update({
                task:input
            })
            .then(()=>{
                let data = taskList;
                let taskIndex = taskList.findIndex(item=>
                    item.id === taskEdit.id);
                    data[taskIndex].task = input;

                    setTaskList(data);
                    setTaskEdit(null);
                    setInput('');
            })

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

    function handleEditTask(task: TaskList){
        setTaskEdit(task)
        setInput(task.task)
    }

    function handleCancelEdit(){
        setInput('');
        setTaskEdit(null)
    }

    return(
        <>
        <Head>
            <title>Your tasks</title>
        </Head>
        <k.Container>
            <k.Bubble>
            {taskList.length}
            </k.Bubble>

            {taskEdit && (
                <k.WarnText>
                    <FiX
                    onClick={handleCancelEdit}
                    size={30}
                    color='#ff3636'/>
                    You are modifying your task.
                    </k.WarnText>
            )}
            <k.Form onSubmit={handleAddTask}>
                <input type="text"
                placeholder='write your task here'
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                 />
                 <button type='submit'>
                    <FiPlus size={25} color='@17181f'/>
                 </button>
            </k.Form>



            <section>
                {taskList.map((task) => (

                <k.TaskList key={task.id}>
                    <Link href={`/board/${task.id}`}>
                    <p>{task.task}</p>
                    </Link>

                    <k.ActionsContainer>

                            <div>
                                <FiCalendar size={20} color='#FFB800'/>
                                <time>{task.createdFormated}</time>
                            </div>

                            <k.ActionsButtons>
                            <FaEdit
                            onClick={()=>handleEditTask(task)}
                            size={20}
                            color='#FFF'/>

                            <FiTrash
                            onClick={()=> handleDelete(task.id)}
                            size={20}
                            color="#FF3636"/>


                            </k.ActionsButtons>
                    </k.ActionsContainer>

                </k.TaskList>
                ))};
            </section>
        </k.Container>


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
