import React, { Component } from 'react';


function Heading(props) {
    return (
        <div>
            <h1>Meal Generator</h1>
            <div>
                <label>Would you like a day or a weeks worth of meals?</label>
               <input type="text" value={props.timeFrame} onChange={props.updateTime}/>
                <label>How many Calories would you like to eat?</label>
                <input value={props.targetCalories} onChange={props.updateCalories} />
                <label>What type of diet would you like to use?</label>
                <select name="diet_type" value={props.diet} onChange={props.updateDiet}>
                    <option value="low carb">Low Carb</option>
                    <option value="Ketogenic">Ketogenic</option>
                    <option value="vegan">Vegan</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="pescetarian">Pescetarian</option>
                    <option value="gluten free">Gluten Free</option>
                    <option value="grain free">Grain Free</option>
                    <option value="grain free high protein">Grain Free High Protein</option>
                    <option value="low sodium">Low Sodium</option>
                    <option value="Paleo">Paleo</option>
                    <option value="Primal">Primal</option>
                    <option value="FODMAP">FODMAP</option>
                    <option value="Whole 30">Whole 30</option>
                </select>
                <input type="text" name="exclude" value={props.exclude} onChange={props.updateExclude} placeholder="anything you want to exclude" />
                <button type="submit" onClick={props.handleSubmit}>Generate</button>
            </div>
            <div>
                <h1>Translate your meals</h1>
                <label>From</label>
                <input type="text" value={props.from} onChange={props.updateFrom}/>
                <label>To</label>
                <input type="text" value={props.to} onChange={props.updateTo}/>
                <label>Text</label>
                <input type="text" value={props.text} onChange={props.updateText}/>
                <button onClick={props.handleTranslate}>Translate</button>
            </div>

        </div>

    )
}


export default Heading;