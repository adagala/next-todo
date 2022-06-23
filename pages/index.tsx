import { Center, Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import TodoAdd from '../components/TodoAdd'
import TodoList from '../components/TodoList'
import { ITodo } from '../models/todo'

const todoList: ITodo[] = []

const Home: NextPage = () => {
  const [title, setTitle] = useState('')
  const [todos, setTodos] = useState(todoList)

  const onAddTodo = () => {
    if (title.length < 3) {
      return
    }

    setTodos([...todos, { id: todos.length + 1, title, completed: false }])
    setTitle('')
  }

  const handleDelete = (id: number) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const handleChange = (e: any) => {
    setTitle(e.target.value)
  }

  const handleEdit = (todo: ITodo) => {
    setTodos(
      todos.map(t => {
        if (t.id === todo.id) {
          return todo
        }
        return t
      })
    )
  }

  return (
    <>
      <Head>
        <title>TODO</title>
        <meta
          name="description"
          content="Simple todo app with nextjs and chakra-ui"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container w="100%">
        <Center>
          <TodoAdd
            title={title}
            onChange={handleChange}
            onAddTodo={onAddTodo}
          />
        </Center>
      </Container>

      <Container w="100%">
        <Center>
          <TodoList
            onEditTodo={handleEdit}
            onDeleteTodo={handleDelete}
            todos={todos}
          />
        </Center>
      </Container>
    </>
  )
}

export default Home
