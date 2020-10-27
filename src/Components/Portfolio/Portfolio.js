import React, { Component } from 'react'

 class Portfolio extends Component {
    render() {
        const {name,img, price, info} = this.props.food;
        return (
            <div className="food">
                <div className="img-container">
            <img src={img} alt=""/>
                </div>
            <div className="food-info">
        <h3>{name}</h3>
        <h1>{price}</h1>
        <p>{info}</p>
            </div>
            </div>
        )
    }
}
export default Portfolio