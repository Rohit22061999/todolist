import React, { Component } from 'react'

export class Itemadd extends Component {
    render() {
        const{title, srNo, descript, handleDelete, handleEdit} = this.props
        return (            
                    <tr>
                    <td className="col-1 text-center">{srNo}</td>
                    <td className="col-4 text-center">{title}</td>
                    <td className="col-7 text-center">{descript}</td>
                    <td>
                    <button className="btn btn-outline-info" onClick={handleEdit}>Edit</button>
                        </td>
                    <td>
                        <button className=" btn btn-outline-danger" onClick={handleDelete}>Delete</button>
                    </td>
                     </tr>
        )
    }
}

export default Itemadd