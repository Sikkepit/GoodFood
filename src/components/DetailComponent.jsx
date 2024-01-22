import React from 'react'
import { Link } from 'react-router-dom';

export default function DetailComponent({info}) {
    
    function createList(items) {
      if(items) {
        return items.map(x => {
          return <li key={x}><span className="list_item">{x}</span></li>;
        })
      }
    }

    function displayRating() {
      if(info) {
        const rating = Math.round(info.rating);
        let stars = [];

        for(let i=0; i<rating; i++) {
            stars.push("fa-solid fa-star")
        }
        for(let i=5; i>rating; i--) {
            stars.push("fa-regular fa-star")
        }
        return stars.map((star, index) => {
            return <i key={index} className={star}></i>
        })
      }
  }

  return (
    <>
      <div id="recipe-detail--summary">
        <img id="recipe-detail--image" src={info.image} alt={"Photo of " + info.name } />
        <div id="recipe-detail--info">
          <h1 className='back-link'>{info.name }</h1>
          <span className='recipe-summary--meta'><i className="fa-regular fa-clock"></i> {info.prepTimeMinutes + info.cookTimeMinutes + " minutes"}</span>
          <span className="recipe--rating recipe-summary--meta">{displayRating()}</span><br/>
          <span className='recipe-summary--meta'>{info.servings} servings</span>
          <span className='recipe-summary--meta'>Difficulty: {info.difficulty}</span>
          <span className='recipe-summary--meta'>Calories per serving: {info.caloriesPerServing}</span>

          <div id="recipe-detail--tags">
            <ul>
             { createList(info.tags) }
            </ul>
          </div>
        </div>
      </div>
      <div id="recipe-detail--content">
        <div id="recipe-detail--ingredients">
          <h2>Ingredients</h2>
              <ul>
              { createList(info.ingredients) }
              </ul>
        </div>  
        <div id="recipe-detail--instructions">
          <h2>Instructions</h2>
            <ol type="1">
              { createList(info.instructions) }
            </ol>
        </div>
      </div>
    </>
  )
}
