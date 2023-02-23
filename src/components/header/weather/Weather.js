import React from "react";
import "./style.css";

class Weather extends React.Component {
    render () {
        return(
            <div>
                { this.props.city && 
                <div className="card card-weather">
                    <div className="today">
                        <span className='day'>{this.props.day}</span>
                        <span className='clock'>{this.props.time}</span>
                    </div>
                    <h2 className="card__title">{this.props.city}<span className="card__GB">{this.props.country}</span></h2>
                
                    <div className="card__weather">
                        <p className="card__value">{this.props.temp}<sup>°c</sup> </p>
                        <div className="box">
                            <img src={this.props.icon} alt="weather" className="card__img"/>
                        </div>
                    </div>
                    <div className="card__description">{this.props.weather}</div>
                </div>
                }            
            </div>
        );
    }
}

export default Weather;