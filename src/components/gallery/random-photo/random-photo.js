import React from "react";
import "./style.css";


class RandomPhoto extends React.Component {
    state = {
        urls: undefined,
}
    nasa = fetch(`https://api.unsplash.com/photos/random/?client_id=Ul-GJzhNjj4SSXB7Ieg7CvpmZKqOMS-Puf8G-C0u11c`).then((response) => {
            return response.json()
         }).then((data) => {
            console.log(data);

            this.setState({
                urls: data.urls.regular,
            });
})
render() {
    return (
    <div>       
        <div>
            <div  className="wrapper-img">
                <img src={this.state.urls} alt=""  className="img-photo" width="600px" height="600px"/>  
            </div>
        </div>
    </div>
    );
  }
}

export default RandomPhoto;