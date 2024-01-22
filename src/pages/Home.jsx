import { useEffect, useState } from 'react'
import Recipe from '../components/Recipe'
import Header from '../components/Header'

export default function Home() {
    const [recipes, setRecipes] = useState([])

    async function getRecipes() {
        const check = localStorage.getItem('recipes');
        if(check) { setRecipes(JSON.parse(check))}

        else {  
            const res = await fetch('https://dummyjson.com/recipes')
            const data = await res.json()

            localStorage.setItem('recipes', JSON.stringify(data.recipes))
            setRecipes(data.recipes)
            }
    }
  
    useEffect(() => {
      getRecipes()
    }, [])
    
    function recipeObjects () {
      return recipes.map((recipe , index) => {
        return <Recipe key={index} info={recipe}/>
      })
    }
  
      return (
      <>
      <Header />
      <div id="featured-image--container">
        <img src="featured.jpg" alt="Featured Image" id="featured-image"/>
      </div>
        <div id="recipelist--wrapper">
          <div id="recipelist">
            { recipeObjects() }
          </div>
        </div>
      </>
    )
  }