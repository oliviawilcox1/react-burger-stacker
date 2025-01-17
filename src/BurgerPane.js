import React, { Component } from 'react';
import Ingredient from "./Ingredient"




// export default class BurgerPane extends Component {

//     render () {
//         const ingredient = this.props.clicked.map((food,i)=> {
//             return  (
//               <Ingredient  key={i} name ={food.name} clickFunc={this.props.remove}
//               />
//             )
//         })

//         return (
//             <div>
//                 <h1>BurgerPane</h1>
//              {ingredient}
//              <button onClick={this.props.clear}>Clear</button> 
//             </div>
//         )
//     }
// }


// Way from class

export default class BurgerPane extends Component {
    //  will eventually get props(ingredients) to loop and display
    // the difference will be the clear button
    render () {
        let burgerBits = this.props.ingredients.map((ing,i) => (
           <li key = {i}> 
               <Ingredient itemKey = {i} 
                   ingredient = {ing} 
                   clickFunc={this.props.remove}
                   />
           </li>
        ))
    // console.log('ingredients', this.props.ingredients)
        return (
            <section className='pane'>
                <h3>Burger Pane</h3>
                    <ul> 
                        {burgerBits} 
                    </ul>
                 <button onClick={this.props.clear}>Clear Burger</button> 
            </section>
        )
    }
}