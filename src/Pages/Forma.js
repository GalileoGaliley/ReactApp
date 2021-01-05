import {Form} from "react-bootstrap";
import React, {Component} from "react";

export default class Forma extends Component {
    state = {
        name:'',
        number:'',
        email:''
    }
    
    entre = (event) =>{
        const {name, value} = event.target;
        this.setState({[name]:value})
    }
render() {
    const {name, number, email} = this.state;
    return(
    <Form action='/index.html' method={'post'}>
        <Form.Group controlId>
            <Form.Label>Ваши имя и фамилия</Form.Label>
            <Form.Control name={'name'} value={name} onChange={this.entre} type={'text'}/>
        </Form.Group>
        <Form.Group controlId>
            <Form.Label>Ваш номер телефона</Form.Label>
            <Form.Control name={'number'} value={number} onChange={this.entre} type={'tel'}/>
        </Form.Group>
        <Form.Group controlId>
            <Form.Label>Ваш e-mail</Form.Label>
            <Form.Control name={'email'} value={email} onChange={this.entre} type={'email'}/>
        </Form.Group>
        <button type={'submit'} formMethod={'post'} className={'btn btn-warning ml-auto mr-auto mt-5 mb-5'}>Отправить!
        </button>
    </Form>
    )
}

}