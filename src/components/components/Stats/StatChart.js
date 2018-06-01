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
                        data: [1000,2038,32048],
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
                    text: "Charitable Contributions",
                    fontSize: 25,
                    fontColor: "#000000"
                },
                legend: {display: false},
                scales : {
                    yAxes: [{
                        ticks: {
                            callback: function (value, index, values) {
                                return "$" + utilFunc.formatNumber(value, 2, 3, ',', '.');
                            }
                        }
                    }]
                }
            }
        }
    }


    render() {
        return (
            <Bar data={this.state.data} options = {this.state.options}/>
        )
    }
}