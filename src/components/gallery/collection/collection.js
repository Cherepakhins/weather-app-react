import React from "react";
import "./style.css";

class Collection extends React.Component {
    render () {
        return(
            <div> 
                { this.props.imgUrl0 &&  
                <div  className="delete">
                    <ul  className="images-grid">
                        <li  className="img-item">
                            <div  className="wrapper-img-item">
                                <img src={this.props.imgUrl0} alt=""  className="img-photo" width="300px" height="300px"/>
                            </div>
                            <div  className='img-description'>
                                <p  className="img-name">Name: {this.props.imgName0}</p>
                                <p  className="author">Prod by: {this.props.author0}</p>
                            </div>
                        </li>

                        <li  className="img-item">
                            <div  className="wrapper-img-item">
                                <img src={this.props.imgUrl1} alt=""  className="img-photo" width="300px" height="300px"/>
                            </div>
                            <div  className='img-description'>
                                <p  className="img-name">Name: {this.props.imgName1}</p>
                                <p  className="author">Prod by: {this.props.author1}</p>
                            </div>
                        </li>
                        
                        <li  className="img-item">
                            <div  className="wrapper-img-item">
                                <img src={this.props.imgUrl2} alt=""  className="img-photo" width="300px" height="300px"/>
                            </div>
                            <div  className='img-description'>
                                <p  className="img-name">Name: {this.props.imgName2}</p>
                                <p  className="author">Prod by: {this.props.author2}</p>
                            </div>
                        </li>

                        <li  className="img-item">
                            <div  className="wrapper-img-item">
                                <img src={this.props.imgUrl3} alt=""  className="img-photo" width="300px" height="300px"/>
                            </div>
                            <div  className='img-description'>
                                <p  className="img-name">Name: {this.props.imgName3}</p>
                                <p  className="author">Prod by: {this.props.author3}</p>
                            </div>
                        </li>

                        <li  className="img-item">
                            <div  className="wrapper-img-item">
                                <img src={this.props.imgUrl4} alt=""  className="img-photo" width="300px" height="300px"/>
                            </div>
                            <div  className='img-description'>
                                <p  className="img-name">Name: {this.props.imgName4}</p>
                                <p  className="author">Prod by: {this.props.author4}</p>
                            </div>
                        </li>
                        
                        <li  className="img-item">
                            <div  className="wrapper-img-item">
                                <img src={this.props.imgUrl5} alt=""  className="img-photo" width="300px" height="300px"/>
                            </div>
                            <div  className='img-description'>
                                <p  className="img-name">Name: {this.props.imgName5}</p>
                                <p  className="author">Prod by: {this.props.author5}</p>
                            </div>
                        </li>
                    </ul> 
                </div>}          
            </div>
        );
    }
}

export default Collection;