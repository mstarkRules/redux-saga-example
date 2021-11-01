import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as TodoActions from "./store/actions";

const TodoList = ({ todos, addTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
      <button onClick={() => addTodo("Fazer café")}>Nova tarefa</button>
    </ul>
  );
};

const mapState = (state) => ({
  todos: state.todos,
});

const mapDispatch = (dispatch) => bindActionCreators(TodoActions, dispatch);

export default connect(mapState, mapDispatch)(TodoList);
