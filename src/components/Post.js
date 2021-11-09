
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from './Menu'
import React, { Component } from 'react';

class Post extends Component {
    state = {

        name: 'ADSI',
        course: '2252471',
        language: ['react', 'PHP', 'HTML'],
        time: '1 año'

    }

    handleChangesState = (e) => {
        this.setState({
            name: 'PROGRAMACION',
            course: '2002021',
            language: ['java', 'JavaScript', 'CSS'],
            time: '1 año'
        })
    }

    holaxd = (e) => {
        this.setState({
            name: 'ADSI',
            course: '2252471',
            language: ['React', 'PHP', 'HTML'],
            time: '1 año'
        })
    }

    handleMouseOver = (e) => {

        console.log('mouse ubicado encima del boton');

    }

    handleCopy = () => {

        console.log('texto copiado')

    }

    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('name', this.state.name);
        console.log('course', this.state.course);
        console.log('time', this.state.time);
    }
    render() {
        return (
            <>
                <br/><br/><br/>
                <div id="Post">
                    <h2>este es el componenete post</h2>
                    <br />
                    {new Date().toLocaleString()}
                    <p>Nombre: {this.state.name}</p>
                    <p>Curso: {this.state.course}</p>
                    <p>Lenguaje: {this.state.language.join(', ')}</p>
                    <p>Duracion: {this.state.time}</p>
                    <button onClick={this.handleChangesState} className="">Cambiar estado</button><br />
                    <button onClick={this.holaxd} className="">Resetear estado</button><br />
                    <button onMouseOver={this.handleMouseOver} className="" >mouse sobre el boton</button><br /><br />
                    <p onCopy={this.handleCopy}>2252471</p>
                    <br />

                    <form onSubmit={this.handleSubmit}>
                        Nombre <input type="Text" name="name" onChange={this.handleChange} /> <br />
                        Curso: <input type="Text" name="course" onChange={this.handleChange} /> <br />
                        Duracion: <input type="Text" name="time" onChange={this.handleChange} /> <br /> <br />
                        <input type="submit" value="Actualizar" />
                    </form>
                </div>
            </>
        )
    }
}

export default Post;