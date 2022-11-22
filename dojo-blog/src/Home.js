import { useState } from "react";

const Home = () => {

    // let name = 'name';

    const [name, setName] = useState('name1');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('name2');
        setAge(30)
    } 

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;