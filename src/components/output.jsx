import React, { Component } from 'react';
import Heading from './heading';
import qs from 'qs';
import Axios from 'axios';

class Output extends Component {
    constructor() {
        super();
        this.state = {
            timeFrame: 'day',
            targetCalories: 1000,
            diet: 'low-carb',
            exclude: 'onions',
            isLoaded: true,
            food: [],
            nutrition:'',
            anwser: '',
            to: 'es',
            from: 'en',
            text: 'hi'
        }
        this.updateCalories = this.updateCalories.bind(this)
        this.updateExclude = this.updateExclude.bind(this)
        this.updateDiet = this.updateDiet.bind(this)
        this.updateTime = this.updateTime.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateTo = this.updateTo.bind(this)
        this.updateFrom = this.updateFrom.bind(this)
        this.updateText = this.updateText.bind(this)
        this.handleTranslate = this.handleTranslate.bind(this)
    }




    componentDidMount() {
        Axios
        const data = {
            targetCalories: this.state.targetCalories,
            diet: this.state.diet,
            exclude: this.state.exclude
        }
        const options = {
            method: 'GET',
            headers: {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "effe5e8d05msh6027af72dedf0d8p177413jsn9bbeeec1a90a"
            },
            data: qs.stringify(data),
            url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=${this.state.timeFrame}`,
        };
        Axios(options)
            .then(res => {

                const food = res.data.meals;
                const nutrition = res.data.nutrients
                console.log(nutrition)
               
                
                this.setState({ food: food, nutrition:nutrition, isLoaded: true });
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    // translateCall() {
    //     Axios
    //     const data = {
    //        from: "en",
    //        to: "es",
    //        text: "hi"
    //     }
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             "x-rapidapi-host": "microsoft-azure-translation-v1.p.rapidapi.com",
    //             "x-rapidapi-key": "effe5e8d05msh6027af72dedf0d8p177413jsn9bbeeec1a90a",
    //             "accept": "application/json"
    //         },
    //         data: qs.stringify(data),
    //         url: "https://microsoft-azure-translation-v1.p.rapidapi.com/translate"
    //     };
    //     Axios(options)
    //         .then(res => {
    //             res = res.data;
    //             // const food = res.data.items;
    //             // console.log(food)
    //             this.setState({
    //                 anwser:res
    //             })


    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    // }

    newCall() {
        Axios
            .get(`https://microsoft-azure-translation-v1.p.rapidapi.com/translate?from=${this.state.from}&to=${this.state.to}&text=${this.state.text}!`, {

                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "microsoft-azure-translation-v1.p.rapidapi.com",
                    "x-rapidapi-key": "effe5e8d05msh6027af72dedf0d8p177413jsn9bbeeec1a90a",
                    "accept": "application/json"
                }
            })
            .then(response => {
                response = response.data;

                // let parser = new DOMParser()
                // let doc = parser.parseFromString(response, "application/xml")
                this.setState({
                    anwser: response
                })
            })
    }

    updateTo(e) {
        this.setState({
            to: e.target.value,
        })
    }
    updateFrom(e) {
        this.setState({
            from: e.target.value
        })
    }
    updateText(e) {
        this.setState({
            text: e.target.value
        })
    }
    updateTime(e) {
        this.setState({
            timeFrame: e.target.value
        })
    }

    updateCalories(e) {
        this.setState({
            targetCalories: e.target.value
        })

    }
    updateExclude(e) {
        this.setState({
            exclude: e.target.value
        })

    }
    updateDiet(e) {
        this.setState({
            diet: e.target.value
        })

    }
    handleSubmit() {
        const timeFrame = this.state.timeFrame
        const targetCalories = this.state.targetCalories
        const diet = this.state.diet
        const exclude = this.state.exclude
       
        this.apiCall()
        this.setState({
            timeFrame: timeFrame,
            targetCalories: targetCalories,
            diet: diet,
            exclude: exclude,
            
        })


    }
    handleTranslate() {
        const from = this.state.from
        const to = this.state.to
        const text = this.state.text
        this.newCall()
        this.setState({
            to: to,
            from: from,
            text: text
        })

    }
    render() {
        //        const fakeData = [{"id":628527,"imageType":"jpg","title":"brownie batter breakfast bake"},
        // {"id":264166,"imageType":"jpg","title":"Mexican Cabbage"},
        // {"id":655269,"imageType":"jpg","title":"Peanut Butter Chocolate Cream Pie"},
        // {"id":1141428,"imageType":"jpg","title":"Pumpkin Buckwheat Waffles with Caramelized Pear"},
        // {"id":641072,"imageType":"jpg","title":"Curried Chickpeas and Vegetables"},
        // {"id":635217,"imageType":"jpg","title":"Blackberry Grilled Cheese Sandwich"},
        // {"id":1100990,"imageType":"jpg","title":"Blueberry, Chocolate & Cocao Superfood Pancakes - Gluten-Free/Paleo/Vegan"},
        // {"id":660185,"imageType":"jpg","title":"Singapore Curry"},
        // {"id":715595,"imageType":"jpg","title":"Cheesiest Bowtie Mac and Cheese"},
        // {"id":655239,"imageType":"jpg","title":"Peanut Butter Banana French Toast"},
        // {"id":633744,"imageType":"jpg","title":"Baked Potatoes with Creamy Mushroom Ragout"},
        // {"id":652417,"imageType":"jpg","title":"Moroccan chickpea and lentil stew"},
        // {"id":635488,"imageType":"jpg","title":"Blueberry Lemon Pancakes"},
        // {"id":649496,"imageType":"jpg","title":"Lemon and Arënkha Msc Risotto With Anchovy-Fried Crumbs"},
        // {"id":20179,"imageType":"jpg","title":"Butternut Squash, Swiss Chard and Apple Risotto"},
        // {"id":1122971,"imageType":"jpg","title":"Plum, Cinnamon, and Almond Muffins"},
        // {"id":638893,"imageType":"jpg","title":"Chocolate Cherry Cheesecake"},
        // {"id":716627,"imageType":"jpg","title":"Easy Homemade Rice and Beans"},
        // {"id":207992,"imageType":"jpg","title":"Sunday Brunch: Tomato-Basil Marmalade"},
        // {"id":652919,"imageType":"jpg","title":"Nachos Grande"},
        // {"id":677755,"imageType":"jpg","title":"Butternut Squash, Black Bean & Spinach Enchiladas"}];
        const { error, isLoaded, food, anwser, nutrition } = this.state;
        // console.log(error,isLoaded,food)
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Heading
                        updateDiet={this.updateDiet}
                        updateCalories={this.updateCalories}
                        updateExclude={this.updateExclude}
                        updateTime={this.updateTime}
                        handleSubmit={this.handleSubmit}
                        updateTo={this.updateTo}
                        updateFrom={this.updateFrom}
                        updateText={this.updateText}
                        handleTranslate={this.handleTranslate}
                    />
                    <ul>
                        {food.map(food => (
                            <div>
                                <p>{food.title}</p>
                                
                            </div>


                        ))}
                    </ul>
                        
                    <p>{anwser}</p>
                </div>
            );
        }
    }
}
export default Output;