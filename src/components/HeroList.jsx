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
                console.log('Fetched heroes:', data); // Lägg till denna rad för att se vad som hämtas
                setHeroes(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    function handleChooseHero(selectedHero){
            fetch(`${API_BASE_URL}/choosehero`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(selectedHero),
            })
                .then(data => {
                    console.log('Success:', data);
                })
                .catch(error => console.error('Error updating character:', error));
    }

    return(
        <>
            <h1>All heroes</h1>
            <ul>
                {heroes.map((hero, index) => (
                    <li key={index}>
                        <h2>{hero.name}</h2>
                        <button className="chooseHeroBtn" onClick={ () => handleChooseHero(hero)}>Choose hero</button>
                        <h4>Choosen: {hero.choosen ? 'Yes' : 'No'}</h4>
                        <ul>
                            {hero.languages?.map((language, index) => (
                                <li key={index}>
                                    <h3>{language}</h3>
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