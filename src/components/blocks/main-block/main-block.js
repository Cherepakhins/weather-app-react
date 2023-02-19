import React from "react";
import Info from "./../../header/info/info";
import Form from "./../../header/form/form";
import Weather from "./../../header/weather/Weather";
import "./style.css";
import NasaBlock from "../nasa-block/nasa-block";


const apiKey = '31bc9fcdacc37b494ffc295523a5f668';

class Mainblock extends React.Component {
    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        icon: undefined,
        weather: undefined,
        day: undefined,
        time: undefined,
        error: undefined,
}



    gettingWeather = async (e) => {
        e.preventDefault();
        let city = e.target.elements.city.value.trim();

        if(city) {
        e.target.elements.city.value = '';
        e.target.elements.city.focus();
        const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`);
        const data = await api_url.json();
        const weatherDescription = data.weather['0'].description;
        const wDescription = weatherDescription.replace(weatherDescription[0], weatherDescription[0].toUpperCase());
        const urlIcon = `https://openweathermap.org/img/wn/${data.weather['0'].icon}@4x.png`;

        const today = new Date();
        const day = today.toLocaleDateString();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        let time;
        if(minutes<10){
            time = hours + ":0" + minutes;
        } else{
            time = hours + ":" + minutes;
        }


        
        this.setState({
            temp: Math.round(data.main.temp),
            city: data.name,
            country: data.sys.country,
            icon: urlIcon,
            weather: wDescription,
            day: day,
            time: time,
            error: "",
        });


        }

        
    }

  render() {
    return (
      <div>
        <header className="header">
            <Info />
            <Form weatherMethod={this.gettingWeather}/>
        </header>
        <main className="main">
            <Weather 
                temp={Math.round(this.state.temp)}
                city={this.state.city}
                country={this.state.country}
                icon={this.state.icon}
                weather={this.state.weather}
                day={this.state.day} 
                time={this.state.time}  
                error={this.state.error}
            />
            <NasaBlock />
        </main>
      </div>
    );
  }
}

export default Mainblock;