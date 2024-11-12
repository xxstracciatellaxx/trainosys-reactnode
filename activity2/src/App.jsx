import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './component/Input'
import Card from './component/Card'
import Alert from './component/Alert'
import Rating from './component/Rating'
const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome</h1>

      <div className="container">
        <Input
          type="text"
          label="First Name: "
          placeholder="Enter your first name"
        />
        <Input
          type="text"
          label="Last Name: "
          placeholder="Enter your last name"
        />
        <Input
          type="email"
          label="Email: "
          placeholder="Enter your email address"
        />
        <Input
          type="password"
          label="Password: "
          placeholder="Enter your secure password"
        />
      </div>

      <div className="card-container">
        <Card
          imageUrl="https://prod-eurasian-res.popmart.com/default/20241003_111249_729332____1_____1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp"
          title="MEGA SPACE MOLLY - JOKER"
          price="$35"
          rating={4}
        />
        <Card
          imageUrl="https://prod-eurasian-res.popmart.com/default/20240321_100837_500058__1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp"
          title="MEGA SPACE MOLLY - PALMER"
          price="$35"
          rating={4}
        />
        <Card
          imageUrl="https://prod-eurasian-res.popmart.com/default/20240201_103450_806331__1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp"
          title="MEGA SPACE MOLLY - HAN MEILIN"
          price="$35"
          rating={4}
        />
        <Card
          imageUrl="https://prod-eurasian-res.popmart.com/default/20240105_162710_167352__1200x1200.jpg?x-oss-process=image/resize,p_40,format,webp,format,webp"
          title="MEGA SPACE MOLLY - BALMAIN"
          price="$45"
          rating={4}
        />
      </div>


      <div className="alert-container">
        <Alert title="Successfully uploaded" type="success" />
        <Alert title="Attention needed" type="warning" message="Lorem ipsum ..." />
        <Alert title="Error" type="error" message="Lorem ipsum ..." />
      </div>

      <div className="rating-container">
      <Rating value={3} />

      {/* <h2>Custom Maximum Value (10)</h2>
      <Rating value={7} maximumValue={10} /> */}

      {/* <h2>Custom Color and Size</h2>
      <Rating value={4} color="purple" size="30px" />

      <h2>Custom Icon</h2>
      <Rating value={4.5} maximumValue={5} icon="❤️" /> */}
    </div>
    </>

  );
}

export default App
