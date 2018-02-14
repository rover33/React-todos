import React, { Component } from 'react'
import EditTodoForm from './EditTodoForms';

class Todo extends Component {
    render(){
        return (
            <div>
                <p data-todos-index={this.props.todo._id}>
                    <span>{this.props.todo.body}</span>
                    <span 
                        className='deleteButton'
                        onClick={() => this.props.onDeleteTodo(this.props.todo)}>
                            (X)
                    </span>
                </p>
                <EditTodoForm 
                    onUpdateTodo={this.props.onUpdateTodo}
                    data-todos-index={this.props.todo._id}/>
            </div>
        )
    }
}

export default Todo