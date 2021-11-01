import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as TodoActions from "./store/actions";

const TodoList = ({ todos, requestTodoList }) => {
  return (
    <div>
      <ul>
        {todos.data &&
          todos.data.map((todo) => <li key={todo.id}>{todo.text}</li>)}
      </ul>

      <button onClick={() => requestTodoList()}>Carregar tarefas</button>
      {todos.loading && <p>carregando...</p>}
    </div>
  );
};

const mapState = (state) => ({
  todos: state.todos,
});

const mapDispatch = (dispatch) => bindActionCreators(TodoActions, dispatch);

export default connect(mapState, mapDispatch)(TodoList);
