import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DetailComponent from "../components/DetailComponent"
import LatestRecipe from "../components/LatestRecipe"
import Header from '../components/Header'



export default function RecipeDetail() {
    const [recipes, setRecipes] = useState([])
    const [currentRecipe, setCurrentRecipe] = useState({})
    const [numberOfRecipes, setNumberOfRecipes] = useState([])
    let params = useParams();


    async function getRecipes() {
        const check = localStorage.getItem('recipes');
        if(check) { 
            setRecipes(JSON.parse(check))
            setCurrentRecipe(JSON.parse(check).find(x => x.id == params.id))
            getLastRecipe(JSON.parse(check))
        }

        else {  
            const res = await fetch('https://dummyjson.com/recipes')
            const data = await res.json()

            localStorage.setItem('recipes', JSON.stringify(data.recipes))
            setRecipes(data.recipes)
            setCurrentRecipe(data.recipes.find(x => x.id == params.id))
            getLastRecipe(data.recipes)
            }
        
    }

    useEffect(() => {
        getRecipes()
    }, [params.id])


    function getLastRecipe(value) {
        if(value) {
            setNumberOfRecipes(value.length-1) 
        } 
        
    }
    return (
    <>
    <Header />
    <div id="recipe-detail">
        <div id="recipe-detail--wrapper">
            <DetailComponent key={currentRecipe.id} info={currentRecipe} />
        </div>
    </div>
    <div id="latest-recipes--wrapper">
        <div id="latest-recipes">
            <div id="latest-recipes--header">
                <h2>Latest Recipes</h2>
            </div>
            <div id="latest-recipes--content">
                <LatestRecipe key={"LatestRecipe1"} info={recipes[numberOfRecipes]}/>
                <LatestRecipe key={"LatestRecipe2"} info={recipes[numberOfRecipes-1]}/>
                <LatestRecipe key={"LatestRecipe3"} info={recipes[numberOfRecipes-2]}/>
            </div>
        </div>
    </div>
    </>
    )
}