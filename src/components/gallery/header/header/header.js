import React from "react";
import "./style.css";
class Form extends React.Component {
    render () {
        return(
                <form className="form" id="form" onSubmit={this.props.collectionMethod}>
                    <input type="text" id="inputPhoto" className="inputPhoto" name="photo" placeholder="Введите название коллекции"/>
                    <button className="button">Показать</button>
                </form>             
        );
    }
}
export default Form;