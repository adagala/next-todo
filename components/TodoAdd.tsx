import { Button, Container, Flex, Input } from '@chakra-ui/react'

interface ITodoProps {
  title: string
  onAddTodo: any
  onChange: any
}

const TodoAdd = ({ title, onAddTodo, onChange }: ITodoProps) => {
  const isInvalidTitle = title.length < 3

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      onAddTodo()
    }
  }

  return (
    <Container my={8}>
      <Input
        placeholder="New todo"
        value={title}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <Flex my={4} justifyContent="end">
        <Button
          isDisabled={isInvalidTitle}
          colorScheme="blue"
          aria-label="add todo"
          onClick={onAddTodo}
        >
          Add
        </Button>
      </Flex>
    </Container>
  )
}

export default TodoAdd
