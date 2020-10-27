import React, { Component } from 'react'
import Portfolio from './Portfolio/Portfolio';
import {foodData} from '../Components/foodData'
import './FoodList.css'

 class FoodList extends Component {
     state = {
         foods : foodData
     }

    render() {
        // console.log(this.state.foods)
        const {foods} = this.state;

        return (
            <div className="foodList">
                {foods.map(food => {
                    return(
                        <Portfolio key={food.id} food={food}/>
                    )
                })}
        
            </div>
        )
    }
}
export default FoodList;