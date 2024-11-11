import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const ProductList = () => {
  const products = [
    {
      name: 'Earthen Bottle',
      price: 48.00,
      image: 'https://prod-eurasian-res.popmart.com/default/20241107_152003_471007____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp',
    },
    {
      name: 'Nomad Tumbler',
      price: 35.00,
      image: 'https://prod-eurasian-res.popmart.com/default/20240731_172225_989554____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp',
    },
    {
      name: 'Focus Paper Refill',
      price: 89.00,
      image: 'https://prod-eurasian-res.popmart.com/default/20240726_171216_646723____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp',
    },
    {
      name: 'Machined Mechanical Pencil',
      price: 35.00,
      image: 'https://prod-eurasian-res.popmart.com/default/1_vwwDGJiw2a_1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp',
    },
    {
      name: 'Focus Card Tray',
      price: 64.00,
      image: 'https://prod-eurasian-res.popmart.com/default/1_eK0BjHmIy6_1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp',
    },
    {
      name: 'Focus Multi-Pack',
      price: 39.00,
      image: 'https://prod-eurasian-res.popmart.com/default/20241106_150140_868624____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp',
    },
    {
      name: 'Brass Scissors',
      price: 50.00,
      image: 'https://prod-eurasian-res.popmart.com/default/20241107_144129_987660____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp',
    },
    {
      name: 'Focus Carry Pouch',
      price: 32.00,
      image: 'https://prod-eurasian-res.popmart.com/default/20241107_142442_881353____2_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp',
    },
    {
      name: 'Focus Carry Pouch',
      price: 32.00,
      image: 'https://prod-eurasian-res.popmart.com/default/20241024_094513_263034____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp',
    },
  ];

  return (
    <div className="product-grid">
      {products.map(item => (
        <div className="product-item" key={item.name}>
          <img src={item.image} alt={item.name} />
          <span>{item.name} - ${item.price.toFixed(2)}</span>
          <button> Add to cart</button>
        </div>
      ))}
    </div>
  );
};


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form class ="welcome">
      <h2>Welcome to MEGAMOLLY</h2>

      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" />
        <div class="cut"></div>
        <label for="firstname" class="placeholder">First name</label>
      </div>

      <div class="input-container ic2">
        <input id="lastname" class="input" type="text"  />
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Last name</label>
      </div>


      <div class="input-container ic2">
        <input id="email" class="input" type="text" />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Email</label>
      </div>

      <div class="input-container ic2">
        <input id="email" class="input" type="password" />
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Password</label>
      </div>

      <button type="text" class="submit">Submit</button>
    </form>   

    <ProductList/>
    </>

  )
}

export default App;