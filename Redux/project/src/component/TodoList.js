// ./component/TodoList.js

import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const AddButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c0392b;
  }
`;

const ClearButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  display: block;
  margin: 20px auto;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const TodoList = () => {
  return (
    <Container>
      <Title>Todo List</Title>
      <InputContainer>
        <Input type="text" placeholder="Add a new todo" />
        <AddButton>Add</AddButton>
      </InputContainer>
      <List>
        <ListItem>
          Todo Item
          <DeleteButton>Delete</DeleteButton>
        </ListItem>
        <ListItem>
          Another Todo Item
          <DeleteButton>Delete</DeleteButton>
        </ListItem>
      </List>
      <ClearButton>Clear All</ClearButton>
    </Container>
  );
};

export default TodoList;
