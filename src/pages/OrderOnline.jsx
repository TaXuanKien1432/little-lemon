import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import freshLemonPancakes from '../images/freshlemonpancakes.jpg'
import zestyAvocadoToast from '../images/zestyavocadotoast.png'
import citrusSmoothie from '../images/citrussmoothie.jpg'
import lemonSouffleOmelette from '../images/lemonsouffleomelette.webp'
import greekSalad from '../images/greek salad.jpg'
import bruchetta from '../images/bruchetta.svg'

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
import lemonDesert from '../images/desert.jpg'

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
    {name: "Parmesan-Crusted Lemon Chicken", id: 10, image: parmesanCrustedChickenWithLemonCreamSauce, price: 16.99, type: "Dinner", likes: 288},
    {name: "Mediterranean Lemon Lamb Chops", id: 11, image: mediterraneanLemonLambChops, price: 21.99, type: "Dinner", likes: 306},
    {name: "Zesty Creamy Pasta", id: 12, image: zestyCreamyPasta, price: 14.49, type: "Dinner", likes: 245},
    {name: "Classic Lemon Tart", id: 13, image: classicLemonTart, price: 6.99, type: "Dessert", likes: 421},
    {name: "Lemon Cheesecake with Raspberry Sauce", id: 14, image: lemonCheesecakeWithRaspberrySauce, price: 7.99, type: "Dessert", likes: 263},
    {name: "Mini Lemon Meringue Pies", id: 15, image: miniLemonMeringuePies, price: 5.99, type: "Dessert", likes: 985},
    {name: "Lemon Sorbet", id: 16, image: lemonSorbet, price: 4.99, type: "Dessert", likes: 438},
    {name: "Freshly Squeezed Lemonade", id: 17, image: freshlySqueezedLemonade, price: 3.99, type: "Drink", likes: 578},
    {name: "Lemon Mint Cooler", id: 18, image: lemonMintCooler, price: 4.49, type: "Drink", likes: 877},
    {name: "Lemon Basil Mocktail", id: 19, image: lemonBasilMocktail, price: 5.99, type: "Drink", likes: 978},
    {name: "Lemon Vanilla Milkshake", id: 20, image: lemonVanillaMilkshake, price: 5.49, type: "Drink", likes: 655},
    {name: "Frosty Lemon Smoothie", id: 21, image: frostyLemonSmoothie, price: 5.99, type: "Drink", likes: 368},
    {name: "Greek Salad", id: 22, image: greekSalad, price: 12.99, type: "Breakfast", likes: 538},
    {name: "Bruchetta", id: 23, image: bruchetta, price: 5.99, type: "Breakfast", likes: 456},
    {name: "Lemon Dessert", id: 24, image: lemonDesert, price: 5.00, type: "Dessert", likes: 201},
  ].sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  const breakfastProducts = products.filter(product => product.type === "Breakfast");
  const lunchProducts = products.filter(product => product.type === "Lunch");
  const dinnerProducts = products.filter(product => product.type === "Dinner");
  const dessertProducts = products.filter(product => product.type === "Dessert");
  const drinkProducts = products.filter(product => product.type === "Drink");

  const [query, setQuery] = useState("");
  const location = useLocation();
  const [searchedProducts, setSearchedProducts] = useState([]);
  useEffect(() => {
    switch (location.pathname) {
      case "/order-online":
        setSearchedProducts(products.filter(item => item.name.toLowerCase().includes(query)));
        break;
      case "/order-online/breakfast":
        setSearchedProducts(breakfastProducts.filter(item => item.name.toLowerCase().includes(query)));
        break;
      case "/order-online/lunch":
        setSearchedProducts(lunchProducts.filter(item => item.name.toLowerCase().includes(query)));
        break;
      case "/order-online/dinner":
        setSearchedProducts(dinnerProducts.filter(item => item.name.toLowerCase().includes(query)));
        break;
      case "/order-online/dessert":
        setSearchedProducts(dessertProducts.filter(item => item.name.toLowerCase().includes(query)));
        break;
      case "/order-online/drink":
        setSearchedProducts(drinkProducts.filter(item => item.name.toLowerCase().includes(query)));
        break;
    }
  }, [location.pathname]);
  const handleSearch = (e) => {
    e.preventDefault();
    let value = e.target.value.toLowerCase();
    setQuery(value);
    switch (location.pathname) {
      case "/order-online":
        setSearchedProducts(products.filter(item => item.name.toLowerCase().includes(value)));
        break;
      case "/order-online/breakfast":
        setSearchedProducts(breakfastProducts.filter(item => item.name.toLowerCase().includes(value)));
        break;
      case "/order-online/lunch":
        setSearchedProducts(lunchProducts.filter(item => item.name.toLowerCase().includes(value)));
        break;
      case "/order-online/dinner":
        setSearchedProducts(dinnerProducts.filter(item => item.name.toLowerCase().includes(value)));
        break;
      case "/order-online/dessert":
        setSearchedProducts(dessertProducts.filter(item => item.name.toLowerCase().includes(value)));
        break;
      case "/order-online/drink":
        setSearchedProducts(drinkProducts.filter(item => item.name.toLowerCase().includes(value)));
        break;
    }
  }

  return (
    <div className="order-online-container">
      <p>Menu</p>
      <form>
        <input onChange={(e) => handleSearch(e)} placeholder='Search...'></input>
        <div className="search-button"><FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} style={{color: "#ffffff",}} /></div>
      </form>
      <div className="food-nav-container">
        <NavLink to="" end>All</NavLink>
        <NavLink to="breakfast">Breakfast</NavLink>
        <NavLink to="lunch">Lunch</NavLink>
        <NavLink to="dinner">Dinner</NavLink>
        <NavLink to="dessert">Dessert</NavLink>
        <NavLink to="drink">Drink</NavLink>
      </div>
      <Outlet context={{ products, breakfastProducts, lunchProducts, dinnerProducts, dessertProducts, drinkProducts, addToCart, searchedProducts, query }}/>
    </div>
  )
}

export default OrderOnline