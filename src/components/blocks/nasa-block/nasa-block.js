import React from "react";
import "./style.css";


class NasaBlock extends React.Component {
    state = {
        title: undefined,
        describe: undefined,
        url: undefined,
}
    nasa = fetch(`https://api.nasa.gov/planetary/apod?api_key=9S5gSnfoynIPdjs82VwzDL7G5KlejUhrnjRDKBzq`).then((response) => {
            return response.json()
         }).then((data) => {
            this.setState({
                title: data.title,
                describe: data.explanation,
                url: data.url,
            });
})
render() {
    return (
        <div className="card-nasa" method={this.nasa}>
            <div className="card-nasa-wrapper">
                <h2 className="card__title card__title-nasa">{this.state.title}</h2>
                <span className='card__description card__description-nasa'>{this.state.describe}</span>
                <img src={this.state.url} alt="space" className="img-space"/>
            </div>
        </div>
    );
  }
}

export default NasaBlock;