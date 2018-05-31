import React from 'react'

import {Doughnut} from 'react-chartjs-2';

export default class Donut extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: [], 
            options:{}
        }
    }

    render(){
        return (
            <Doughnut>

            </Doughnut>
        )
    }
}