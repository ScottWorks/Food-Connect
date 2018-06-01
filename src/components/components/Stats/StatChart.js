import React from 'react';
import {Bar} from 'react-chartjs-2';
import * as utilFunc  from '../../../config/analyticsUtil';

export default class StatChart extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: {
                datasets: [
                    {
                        data: [1,2,3],
                        backgroundColor: utilFunc.generateRandomColors(3)
                    }
                ],
                labels:['red', 'yellow', 'blue']
            },
            options: {
                responsive: true,
                title: {
                    display: true,
                    position: "top",
                    text: "MONTHLY CHARITABLE CONTRIBUTIONS",
                    fontSize: 25,
                    fontColor: "#000000"
                },
                legend: {display: false},
                sacles : {
                    yAxes: [{
                        ticks: {
                            callback: function (value, index, values) {
                                return //TODO:
                            }
                        }
                    }]
                }
            }
        }
    }


    render() {
        return (
            <Bar/>
        )
    }
}