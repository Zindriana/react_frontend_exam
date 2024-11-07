import {useEffect, useState} from "react";
import {API_BASE_URL} from "../config.js";


function ScrollList(){
    const [scrolls, setScrolls] = useState([]);
    const [scrollText, setScrollText] = useState("");

    useEffect(() => {
        fetch(`${API_BASE_URL}/getscrolls`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setScrolls(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    function handleReadScroll(scroll) {
        console.log(scroll);
    }

    return (
        <>
            <p className="scrollText">Scroll text: {scrollText}</p>
            <h1>Scroll List</h1>
            <ul>
                {scrolls.map((scroll, index) => (
                    <li key={index}>
                        <h2>{scroll.name}</h2>
                        <h3>{scroll.content}</h3>
                        <button className="readScrollBtn" onClick={() => {handleReadScroll(scroll)}}>Läs</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ScrollList