import React from 'react'
import { Link } from 'react-router-dom'

export default function Recipe({info}) {

    function displayRating() {
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

    return (
        <div>
            <Link to={"/recipe/" + info.id}><img className="recipe--thumb" src={info.image} alt={"Photo of " + info.name} /></Link>
            <Link to={"/recipe/" + info.id}><h3 className="recipe--name">{info.name}</h3></Link>
            <div className='recipe-meta'>
                <i className="fa-regular fa-clock"></i> <span className='recipe--preperation_time'>{info.prepTimeMinutes + info.cookTimeMinutes + " minutes"}</span>
                <br/><span className="recipe--rating">{displayRating()}</span>
            </div>
            
        </div>
    )
}
