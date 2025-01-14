import React from 'react'

import freshLemonPancakes from '../images/freshlemonpancakes.jpg'
import zestyAvocadoToast from '../images/zestyavocadotoast.png'
import citrusSmoothie from '../images/citrussmoothie.jpg'
import lemonSouffleOmelette from '../images/lemonsouffleomelette.webp'

import lemonBasilGrilledChickenSandwich from '../images/lemon-basil-grilled-chicken-sandwich.webp'
import citrusCaesarSalad from '../images/citrus-caesar-salad.jpeg'
import lemonGarlicShrimpTacos from '../images/lemon-garlic-shrimp-tacos.jpg'
import roastedVegetableQuinoaBowl from '../images/roasted-vegetable-quinoa-bowl.jpg'

import lemonButterSalmon from '../images/lemon-butter-salmon.jpg'
import parmesanCrustedChickenWithLemonCreamSauce from '../images/parmesan-crusted-chicken-with-lemon-cream-sauce.jpg'
import mediterraneanLemonLambChops from '../images/mediterranean-lemon-lamb-chops.webp'
import zestyCreamyPasta from '../images/zesty-creamy-pasta.jpg'

import classicLemonTart from '../images/classic-lemon-tart.jpg'
import lemonCheesecakeWithRaspberrySauce from '../images/lemon-cheesecake-with-raspberry-sauce.jpg'
import miniLemonMeringuePies from '../images/mini-lemon-meringue-pies.jpg'
import lemonSorbet from '../images/lemon-sorbet.jpg'

import freshlySqueezedLemonade from '../images/freshly-squeezed-lemonade.jpg'
import lemonMintCooler from '../images/lemon-mint-cooler.jpg'
import lemonBasilMocktail from '../images/lemon-basil-mocktail.jpg'
import lemonVanillaMilkshake from '../images/lemon-vanilla-milkshake.jpg'
import frostyLemonSmoothie from '../images/frosty-lemon-smoothie.webp'

const OrderOnline = ({addToCart}) => {
  const products = [
    {name: "Fresh Lemon Pancakes", id: 1, image: freshLemonPancakes, price: 8.99, type: "Breakfast", likes: 381},
    {name: "Zesty Avocado Toast", id: 2, image: zestyAvocadoToast, price: 7.99, type: "Breakfast", likes: 702},
    {name: "Citrus Smoothie", id: 3, image: citrusSmoothie, price: 9.49, type: "Breakfast", likes: 522},
    {name: "Lemon Soufflé Omelette", id: 4, image: lemonSouffleOmelette, price: 8.49, type: "Breakfast", likes: 438},
    {name: "Lemon Basil Grilled Chicken Sandwich", id: 5, image: lemonBasilGrilledChickenSandwich, price: 11.99, type: "Lunch", likes: 300},
    {name: "Citrus Caesar Salad", id: 6, image: citrusCaesarSalad, price: 10.49, type: "Lunch", likes: 888},
    {name: "Lemon Garlic Shrimp Tacos", id: 7, image: lemonGarlicShrimpTacos, price: 12.99, type: "Lunch", likes: 726},
    {name: "Roasted Vegetable Quinoa Bowl", id: 8, image: roastedVegetableQuinoaBowl, price: 10.99, type: "Lunch", likes: 552},
    {name: "Lemon Butter Salmon", id: 9, image: lemonButterSalmon, price: 18.99, type: "Dinner", likes: 456},
    {name: "Parmesan-Crusted Chicken with Lemon Cream Sauce", id: 10, image: parmesanCrustedChickenWithLemonCreamSauce, price: 16.99, type: "Dinner", likes: 288},
    {name: "Mediterranean Lemon Lamb Chops", id: 11, image: mediterraneanLemonLambChops, price: 21.99, type: "Dinner", likes: 306},
    {name: "Zesty Creamy Pasta", id: 12, image: zestyCreamyPasta, price: 14.49, type: "Dinner", likes: 245},
    {name: "Classic Lemon Tart", id: 13, image: classicLemonTart, price: 6.99, type: "Dessert", likes: 421},
    {name: "Lemon Cheesecake with Raspberry Sauce", id: 14, image: lemonCheesecakeWithRaspberrySauce, price: 7.99, likes: 263},
    {name: "Mini Lemon Meringue Pies", id: 15, image: miniLemonMeringuePies, price: 5.99, likes: 985},
    {name: "Lemon Sorbet", id: 16, image: lemonSorbet, price: 4.99, likes: 438},
    {name: "Freshly Squeezed Lemonade", id: 17, image: freshlySqueezedLemonade, price: 3.99, likes: 578},
    {name: "Lemon Mint Cooler", id: 18, image: lemonMintCooler, price: 4.49, likes: 877},
    {name: "Lemon Basil Mocktail", id: 19, image: lemonBasilMocktail, price: 5.99, likes: 978},
    {name: "Lemon Vanilla Milkshake", id: 20, image: lemonVanillaMilkshake, price: 5.49, likes: 655},
    {name: "Frosty Lemon Smoothie", id: 21, image: frostyLemonSmoothie, price: 5.99, likes: 368}
  ]
  
  return (
    <div>
      OrderOnline
    </div>
  )
}

export default OrderOnline