import {useEffect, useState} from "react";
import {API_BASE_URL} from "../config.js";

function HeroList(){

    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}/getheroes`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setHeroes(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return(
        <>
            <h1>All heroes</h1>
            <ul>
                {heroes.map((hero, index) => (
                    <li key={index}>
                        <h2>{hero.name}</h2>
                        <ul>
                            {heroes.languages.map((language, index) => (
                                <li key={index}>
                                    <h3>{language.name}</h3>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default HeroList