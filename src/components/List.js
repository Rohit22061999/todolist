import React, { Component } from 'react';
import Itemadd from './Itemadd';

export class List extends Component {
    render() {
        const{items, handleDelete, handleEdit} = this.props;
        return (
            <div className="my-1">
                <h3 className="text-center m-auto">Table</h3>                
                <table className="w-100 m-auto" border="3">
                    <tr>
                        <th className="col-1 text-center">Sr.No</th>
                        <th className="col-4 text-center">Task</th>
                        <th className="col-5 text-center">Description</th>
                        <th className="text-center col-2" colSpan="2">Action</th>                        
                    </tr>                                   
                {items.map((item, index) => {
                    return (<Itemadd key={item.id} srNo={index + 1} title={item.title} descript={item.descript} handleDelete={()=>handleDelete(item.id)} handleEdit={()=>handleEdit(item.id)}/>)})}                                
            </table>
            </div>
        )
    }
}

export default List