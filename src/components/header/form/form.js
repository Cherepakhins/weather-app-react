import React from "react";
import "./style.css";
class Form extends React.Component {
    render () {
        return(
            <form className="form" id="form" onSubmit={this.props.weatherMethod}>
                <input type="text" className="input" name="city" id="inputCity" placeholder="Введите название города"/>
                <button className="button">Показать</button>
            </form>
        );
    }
}

export default Form;