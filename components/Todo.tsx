import {
  CheckIcon,
  DeleteIcon,
  EditIcon,
  SmallCloseIcon,
} from '@chakra-ui/icons'
import {
  Container,
  Flex,
  IconButton,
  Input,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ITodo } from '../models/todo'

const Todo = ({
  todo,
  onEditTodo,
  onDeleteTodo,
}: {
  todo: ITodo
  onEditTodo: any
  onDeleteTodo: any
}) => {
  const [title, setTitle] = useState(todo.title)
  const [isEditing, setIsEditing] = useState(false)

  const saveTodo = () => {
    onEditTodo({
      ...todo,
      title,
    })
    setIsEditing(false)
  }

  {
    return isEditing ? (
      <Container borderWidth="1px" borderRadius="lg" overflow="hidden" my={2.5}>
        <Flex justifyContent="space-between" alignItems="center" py={2.5}>
          <Input value={title} onChange={e => setTitle(e.target.value)} />
          <Flex>
            <Tooltip label="Save">
              <IconButton
                colorScheme="blue"
                ml={1}
                aria-label="Save todo"
                onClick={() => saveTodo()}
                icon={<CheckIcon />}
              />
            </Tooltip>
            <Tooltip label="Close">
              <IconButton
                colorScheme="gray"
                ml={1}
                onClick={() => setIsEditing(false)}
                aria-label="Close todo"
                icon={<SmallCloseIcon />}
              />
            </Tooltip>
          </Flex>
        </Flex>
      </Container>
    ) : (
      <Container borderWidth="1px" borderRadius="lg" overflow="hidden" my={2.5}>
        <Flex justifyContent="space-between" alignItems="center" py={2.5}>
          <Text>{todo.title}</Text>
          <Flex>
            <Tooltip label="Edit">
              <IconButton
                colorScheme="blue"
                onClick={() => setIsEditing(true)}
                aria-label="Edit todo"
                icon={<EditIcon />}
              />
            </Tooltip>
            <Tooltip label="Delete">
              <IconButton
                colorScheme="red"
                ml={1}
                onClick={() => onDeleteTodo(todo.id)}
                aria-label="Delete todo"
                icon={<DeleteIcon />}
              />
            </Tooltip>
          </Flex>
        </Flex>
      </Container>
    )
  }
}

export default Todo
