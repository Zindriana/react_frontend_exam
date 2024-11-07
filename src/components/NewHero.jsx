import React, { useState } from 'react';
import {API_BASE_URL} from "../config.js";

function NewHero() {
    const [newHeroName, setNewHeroName] = useState('');
    const [languages, setLanguages] = useState([]);

    function createHero(){
        fetch(`${API_BASE_URL}/newhero`,  {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: newHeroName,
                languages: languages,
            }),
        })

            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    function handleLanguageChange(event) {
        const language = event.target.value;
        const isChecked = event.target.checked;

        setLanguages(prevLanguages => {
            if (isChecked) {
                return [...prevLanguages, language];
            } else {
                return prevLanguages.filter(lang => lang !== language);
            }
        });
    }
    return(
        <>
            <h3>Create a new hero</h3>
            <h4>Hero name</h4>
            <input className="newHeroName" type="text" placeholder="Name"
                   onChange={(event) => setNewHeroName(event.target.value)}/>
            <h4>Select Languages</h4>
            <label>
                <input type="checkbox" className="dwarvenCheckbox" value="dwarven" onChange={handleLanguageChange}/>
                Dwarven
            </label>
            <label>
                <input type="checkbox" className="elvenCheckbox" value="elven" onChange={handleLanguageChange}/>
                Elven
            </label>
            <label>
                <input type="checkbox" className="humanCheckbox" value="human" onChange={handleLanguageChange}/>
                Human
            </label>
            <label>
                <input type="checkbox" className="orcCheckbox" value="orc" onChange={handleLanguageChange}/>
                Orc
            </label>
            <button className="createNewHeroBtn" onClick={createHero}>Create hero</button>
        </>
    )
}

export default NewHero;