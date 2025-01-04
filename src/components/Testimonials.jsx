import React from 'react'
import thor from '../images/thor.jpg'
import captain from '../images/captain.webp'
import ironMan from '../images/ironman.jpg'
import hulk from '../images/hulk.jpg'
import RatingCard from './RatingCard'

const Testimonials = () => {
    const testers = [
        [thor, "Thor", "The flavors at Little Lemon are truly divine! The citrus-infused dishes are bold, fresh, and unforgettable. A feast worthy of Asgard. Highly recommend for those seeking a heroic dining experience!"],
        [ironMan, "Iron Man", "Little Lemon is a culinary powerhouse—fresh ingredients, innovative flavors, and a touch of class. It's like fine dining with a tech-savvy twist. I'd definitely suit up for this again!"],
        [captain, "Captain America", "Little Lemon serves food that's classic, fresh, and full of heart—just like the good ol' days. It's a place where quality and care shine through every dish. A true American treasure!"],
        [hulk, "Hulk", "Food at Little Lemon is SMASHING! Fresh, flavorful, and big portions—Hulk full and happy. Highly recommend!"]
    ];
  
    return (    
    <div className="testimonials">
        <p>Testimonials</p>
        <div className="flex-testimonials">
            {testers.map((tester) => (<RatingCard avatar={tester[0]} name={tester[1]} comment={tester[2]}/>))}
        </div>
    </div>
  )
}

export default Testimonials