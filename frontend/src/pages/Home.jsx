import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Item from "../components/Item";


function Home() {
    
    function createitem(item,index){
        return <Item key={index} id={index} onDelete={deleteItem} name={item.name} quantity={item.quantity} price={item.price}/>
    }
    function deleteItem(id){
        setitemsarray(previtems => {
            return previtems.filter((arrayitem,index) => {
                return index !== id;
            })
        })
    }
  const [itemsarray,setitemsarray] = useState([]);
  
  const [item,setitem]=useState({
    id: "",
    name:"",
    price:"",
    quantity:""
  })
 
  function handleChange(event){
    const {name,value}=event.target
    setitem(previtem => {
        
        return { ...previtem,[name]:value};
    })
  }
  function handleClick(event){
    
    setitemsarray(prevarray => {

        // error handling
        // if (!item.name || !item.price || !item.quantity) {
        //   alert("Can't add empty item")
        //   return prevarray
        // }

        const productNames = ["Sexy Oil", "Tata Salt", "Fresh Saaboon", "Chipchipa shampoo"]

        const sitem = {
          id: itemsarray.length + 1, // id starts from 1
          name: '',
          price: 0,
          quantity: 0,
        }

        sitem.name = item.name ? item.name : productNames[Math.floor(Math.random() * productNames.length)]
        sitem.price = item.price ? item.price : Math.random() * 1000
        sitem.quantity = item.quantity ? item.quantity : Math.random() * 100

        return [...prevarray, sitem];
    })
    setitem({
    name:"",
    price:"",
    quantity:""
    })
    event.preventDefault();
  }

  return (
    <section className='home-section'>
    <div>
      <form className='item-form'>
        <input type="text" placeholder='Item-name' name='name' value={item.name} onChange={handleChange}/>
        <input type="text" placeholder='buying-price' name='price' value={item.price} onChange={handleChange}/>
        <input type="text" placeholder='quantity'name='quantity' value={item.quantity} onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
    {itemsarray.map(createitem)}
    
    </section>

  )
}

export default Home;