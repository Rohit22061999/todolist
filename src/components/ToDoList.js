import React, { Component } from 'react'

export class ToDoList extends Component {
    render() {
        const{item, desc, handleChange, handleChange1, handleSubmit, editItem} = this.props;
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        
                        <input type="text" className="form-control" placeholder="Add ToDo Items" value={item} onChange={handleChange}/>
                        <br/>
                        <textarea type="text" className="form-control" placeholder="Add Description" value={desc} onChange={handleChange1} rows="4" cols="50"/>
                    </div>
                    <button type="submit" disabled={item?false:true} className={editItem? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"}>
                        {editItem? "UPDATE":"ADD ITEM"}
                    </button>
                </form>
            </div>
        )
    }
}

export default ToDoList