import React from "react";
import todosData from "./todosData";
import TodoItem from "./TodoItem";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return { todos: updatedTodos };
    });
  }
  render() {
    const TodoItems = this.state.todos.map((item) => (
      <TodoItem
        key={item.id}
        text={item.text}
        item={item}
        handleChange={this.handleChange}
      />
    ));
    return <div className="todo-list">{TodoItems}</div>;
  }
}
export default App;
