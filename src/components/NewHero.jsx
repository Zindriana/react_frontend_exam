import React, { useState } from 'react';

function NewHero() {
    const [newHeroName, setNewHeroName] = useState('');
    const [languages, setLanguages] = useState([]);

    function createHero(){

    }
    return(
        <>
            <h3>Create a new hero</h3>
            <h4>Hero name</h4>
            <input className="newHeroName" type="text" placeholder="Name"
                   onChange={(event) => setNewHeroName(event.target.value)}/>
            <h4>Select Languages</h4>
            <label>
                <input type="checkbox" className="dwarvenCheckbox" onChange={() => setLanguages()}/>
                Dwarven
            </label>
            <label>
                <input type="checkbox" className="elvenCheckbox" onChange={() => setLanguages()}/>
                Elven
            </label>
            <label>
                <input type="checkbox"  className="humanCheckbox" onChange={() => setLanguages()}/>
                Human
            </label>
            <label>
                <input type="checkbox" className="orcCheckbox" onChange={() => setLanguages()}/>
                Orc
            </label>
            <button className="createNewHeroBtn" onClick={createHero}>Create hero</button>
        </>
    )
}

export default NewHero;