import React from "react";
import Form from "./../../gallery/header/header/header";
import Collection from "../collection/collection";
import "./style.css";
import Info from "./../../header/info/info";
import RandomPhoto from '../random-photo/random-photo';

class GridCollection extends React.Component {
    state = {
        img0: undefined,
        imgName0: undefined,
        author0: undefined,
        
        img1: undefined,
        imgName1: undefined,
        author1: undefined,
        
        img2: undefined,
        imgName2: undefined,
        author2: undefined,

        img3: undefined,
        imgName3: undefined,
        author3: undefined,
        
        img4: undefined,
        imgName4: undefined,
        author4: undefined,
        
        img5: undefined,
        imgName5: undefined,
        author5: undefined,

        img: undefined,
        imgName: undefined,
        author: undefined,
};
    gettingCollection = async (e) => {
        e.preventDefault();
        let photo = e.target.elements.photo.value.trim();
        console.log(photo)
        if(photo) {
        const apiKey = `Ul-GJzhNjj4SSXB7Ieg7CvpmZKqOMS-Puf8G-C0u11c`;
        const input = document.querySelector('#inputPhoto');
        let request = input.value;
        input.value = '';
        input.focus();
        const api_url = await
        fetch(`https://api.unsplash.com/search/collections?client_id=${apiKey}&page=1&query=${request}&lang=ru`);
        const data = await api_url.json();
          this.setState({
            imgUrl0: data.results[0].cover_photo.urls.regular,
            imgName0: data.results[0].cover_photo.description,
            author0: data.results[0].cover_photo.user.name,
            
            imgUrl1: data.results[1].cover_photo.urls.regular,
            imgName1: data.results[1].cover_photo.description,
            author1: data.results[1].cover_photo.user.name,

            imgUrl2: data.results[2].cover_photo.urls.regular,
            imgName2: data.results[2].cover_photo.description,
            author2: data.results[2].cover_photo.user.name,

            imgUrl3: data.results[3].cover_photo.urls.regular,
            imgName3: data.results[3].cover_photo.description,
            author3: data.results[3].cover_photo.user.name,
            
            imgUrl4: data.results[4].cover_photo.urls.regular,
            imgName4: data.results[4].cover_photo.description,
            author4: data.results[4].cover_photo.user.name,

            imgUrl5: data.results[5].cover_photo.urls.regular,
            imgName5: data.results[5].cover_photo.description,
            author5: data.results[5].cover_photo.user.name,
        });
        } 
    }
  render() {
    return (
      <div>
        <header className="header">
            <Info />
            <Form collectionMethod={this.gettingCollection}/>
        </header>
        <main className="main">
        {!this.state.imgUrl0 && <RandomPhoto /> }
           <Collection
            imgUrl0={this.state.imgUrl0}
            imgName0={this.state.imgName0}
            author0={this.state.author0}

            imgUrl1={this.state.imgUrl1}
            imgName1={this.state.imgName1}
            author1={this.state.author1}

            imgUrl2={this.state.imgUrl2}
            imgName2={this.state.imgName2}
            author2={this.state.author2}

            imgUrl3={this.state.imgUrl3}
            imgName3={this.state.imgName3}
            author3={this.state.author3}

            imgUrl4={this.state.imgUrl4}
            imgName4={this.state.imgName4}
            author4={this.state.author4}

            imgUrl5={this.state.imgUrl5}
            imgName5={this.state.imgName5}
            author5={this.state.author5}
            />
        </main>
      </div>
    );
  }
}

export default GridCollection;