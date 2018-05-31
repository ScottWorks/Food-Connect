import React from 'react'

import {Doughnut} from 'react-chartjs-2';

export default class Donut extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: {
                datasets:[
                    {
                        data:[10,20,30]
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