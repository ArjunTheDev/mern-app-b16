import { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Home({text}) {
    const [toogle, setToggle] = useState(false);
    const {data, updateData} = useContext(AppContext);
    useEffect(() => {
        console.log('Home Page mounted');
        return () => {
            console.log('Home Page Unmounted');
        }
    }, []);

    useEffect(() => {
        console.log('Home Page Updated');
    }, [toogle]);
    return ( <>
        <h3>Home Page</h3>
        <input type="text" value={data.homePage} onChange={(e) => updateData('homePage', e.target.value)} />
        <h4>{data.homePage}</h4>
        <button onClick={() => setToggle(!toogle)}>{text}</button>
    </> );
}

export default Home;