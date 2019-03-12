// listens for click to run algoritm 

import React, { Component } from "react";

class TempCollect extends Component {

    handleButtonClick = event => {
        // your code here
        }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Log your temperature and any symptoms or notes you have!!
                
                TEST!!!!</h3>
                <br/>
                <br/>

                <form class="form-inline">
                    <div class="form-group">
                        <label class="sr-only" for="exampleInputAmount">Temperature (in degrees)</label>
                        <div class="input-group">
                        <div class="input-group-addon"><i class="fas fa-temperature-low"></i></div>
                        <input type="text" class="form-control" id="exampleInputAmount" placeholder="Temperature"></input>
                        <div class="input-group-addon"> .00 </div>
                        </div>
                    </div>
                </form>
                   <br/>
                   <br/>

                   <form class="form-inline">
                    <div class="form-group">
                        <label class="sr-only" for="exampleInputAmount">Weight (in pounds)</label>
                        <div class="input-group">
                        <div class="input-group-addon"><i class="fas fa-weight"></i></div> 
                        <input type="text" class="form-control" id="exampleInputAmount" placeholder="Weight"></input>
                        <div class="input-group-addon"> .00 </div>
                        </div>
                    </div>
                    </form>

                    <br/>
                    <br/>

                    <form>
                    <div class="form-group">
                    <i class="fas fa-bed"></i> <label for="hoursSlept"> How many hours did you sleep last night?</label>          


                    <select class="form-control">
                        <option placeholder="0">0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                    </div>
                    </form>
                <br/>

                <form>
                    <div class="form-group">
                    <i class="fas fa-tint"></i> <label for="spotting"> If any, how would you rate your spotting?</label>          


                    <select class="form-control">
                        <option placeholder="5 is some serious spotting!">5 is some serious spotting!</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    </div>
                    </form>
                <br/>

                <form>
                <i class="fas fa-cocktail"></i> <label for="hangover">Are you hungover?</label>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox" id="blankCheckbox" value="option1" aria-label="..."></input> Yes
                         </label>
                        </div>
                        <div class="checkbox">
                        <label>
                            <input type="checkbox" id="blankCheckbox" value="option1" aria-label="..."></input> No
                         </label>
                        </div>
                    </form>

                    <br/>
                    <br/>

                    <form>
                    <div>
                    <textarea class="form-control" rows="3" placeholder="What symptoms are you experiencing?"></textarea>
                    </div>
                    </form>
                    <br/>
                    
                    

                    <button type="submit" class="btn btn-primary">Log Entry</button>
                           
            </div>
        )
    }
}

export default TempCollect;
