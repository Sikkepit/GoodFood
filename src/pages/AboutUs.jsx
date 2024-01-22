import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import LatestRecipe from "../components/LatestRecipe"
import Header from '../components/Header'



export default function AboutUs() {
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
            <div id="recipe-detail--summary">
                <img id="about-us--image" src="/about_us.jpg" alt="Photo of us" />
                <div id="recipe-detail--info">
                    <h1 className='back-link'>About Us</h1>
                    <p>
                        Welcome to Good Food, the ultimate destination for all food lovers! We are Liza and Jeff, the proud owners of this delicious website. As avid foodies and outdoor enthusiasts, we have combined our passion for cooking and adventure to bring you a one-of-a-kind experience.
                    </p>
                    <p>
                    We believe that food brings people together and creates memories that last a lifetime. That's why we enjoy making food together and sharing our creations with others. From experimenting with new ingredients to perfecting traditional recipes, we are constantly on a culinary journey to satisfy our taste buds and yours.
                    </p>
                    <p>
                    But our love for food doesn't stop in the kitchen. We also have a deep appreciation for the great outdoors. Whether it's a picnic in the park or a hike in the mountains, there's nothing quite like enjoying a delicious meal in the midst of nature.
                    </p>
                    <p>
                    At Good Food, we strive to provide you with mouthwatering recipes, cooking tips, and the latest food trends. We also love to feature guest bloggers and collaborate with fellow food lovers to bring you a diverse range of content.
                    </p>
                    <p>
                    Join us on our foodie adventures and discover new flavors, techniques, and ways to elevate your dining experience. Let's celebrate the joy of food and the beauty of the outdoors together. Thanks for visiting Good Food, we hope you'll stay awhile and explore all that we have to offer.
                    </p>
                </div>
            </div>
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