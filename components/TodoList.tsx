import { Center, Container, Text } from '@chakra-ui/react'
import { ITodo } from '../models/todo'
import Todo from './Todo'

const TodoList = ({
  todos,
  onDeleteTodo,
  onEditTodo,
}: {
  todos: ITodo[]
  onDeleteTodo: any
  onEditTodo: any
}) => {
  const hasTodos = todos.length > 0
  {
    return hasTodos ? (
      <Container>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            onEditTodo={onEditTodo}
            onDeleteTodo={onDeleteTodo}
          ></Todo>
        ))}
      </Container>
    ) : (
      <Container borderWidth="1px" borderRadius="lg" overflow="hidden" my={2.5}>
        <Center m={5}>
          <Text fontWeight={600}>No Todos</Text>
        </Center>
      </Container>
    )
  }
}

export default TodoList
