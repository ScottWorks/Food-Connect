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
                        backgroundColor: utilFunc.generateRandomColors(data.length)
                    }
                ], 
                labels:['red', 'yellow', 'blue']
            }, 
            options:{}
        }
    }

    render(){
        return (
            <Doughnut data={this.state.data}>

            </Doughnut>
        )
    }
}