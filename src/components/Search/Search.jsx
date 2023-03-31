import { Button, Input, Form } from './Search.styled';

export const Search = ({ onChange, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" onChange={onChange} />
      <Button type="submit">Search</Button>
    </Form>
  );
};
