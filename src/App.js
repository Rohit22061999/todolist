//import logo from './logo.svg';
import './App.css';
import {v1 as uuid} from "uuid";
import React, {Component} from 'react';
//import Products from './components/Products';
import ToDo from './components/ToDoList';
import List from './components/List';
import Validation from './components/Validation';


class App extends Component {
  state={
    items: [{id:1, title:"Gyming", descript: "Back and Cardio"}, {id:2, title:"Grocery", descript: "Buy food for the Breakfast"}],
    id: uuid(),
    item: "",
    desc: "",
    srNo:0,
    editItem: false
  };
  handleChange = (e) =>{
    this.setState({
      item: e.target.value,
    })
  }
  handleChange1 = (e) =>{
    this.setState({
      desc: e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
      descript: this.state.desc
    }
    const updatedItems = [...this.state.items,newItem]
    this.setState({
      items: updatedItems,
      item: "",
      desc: "",
      id: uuid(),
      editItem: false
    },()=>console.log(this.state))
  }
  handleDelete = (id) =>{
    const filteredItems = this.state.items.filter(item=>item.id !== id)
    this.setState({
      items: filteredItems
    })
  }
  handleEdit = (id) =>{
    const filteredItems = this.state.items.filter(item=>item.id !== id)
    const selectedItem = this.state.items.find(item=>item.id === id)
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      desc: selectedItem.descript,
      id: id,
      editItem: true
    })
  }
  render() {
  return (
    <div className="container-fluid app">
      <div className="row ">
        <div className="col-10 mx-auto col-md-8 mt-5">
          <h3 className="text-center">ToDo Input</h3>
          {/* <ToDo item={this.state.item} desc={this.state.desc} srNo={this.state.srNo} handleChange1={this.handleChange1} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/> */}
          {/* <List items={this.state.items} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/> */}
          < Validation />
        </div>
      </div>
     
      
    </div>

  );
  }
  } 

export default App;