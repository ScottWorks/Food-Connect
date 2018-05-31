import React from 'react'

import {Doughnut} from 'react-chartjs-2';
import * as utilFunc  from '../../../config/analyticsUtil';

export default class Donut extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: {
                datasets:[
                    {
                        data:[10,20,30],
                        backgroundColor: utilFunc.generateRandomColors(3)
                    }
                ], 
                labels:['red', 'yellow', 'blue']
            }, 
            options:{
                responsive: true,
                title: {
                    display: true,
                    position: "top",
                    text: "Total lbs of food weighs", // TODO:
                    fontSize: 20,
                    fontColor: "#000000"
                }
            }
        }
    }

    render(){
        return (
            <Doughnut data={this.state.data} options={this.state.options}>
            </Doughnut>
        )
    }
}