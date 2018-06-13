import React from 'react'

import {Doughnut} from 'react-chartjs-2';
import * as utilFunc  from '../../../config/analyticsUtil';
import {connect} from 'react-redux';
import {getBusinessBasketsCompleted} from '../../../ducks/analyticsReducer'
import './Donut.css'
import { equal } from 'assert';

export class Donut extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: {
                datasets:[
                    {
                        data:[],
                        backgroundColor: utilFunc.generateRandomColors(this.props.numColors) 
                    }
                ], 
                labels:[] 
            }, 
            options:{
                responsive:true,
                title: {
                    display: true,
                    position: "top",
                    text: "Pounds of Food Saved", 
                    fontSize: 25,
                    fontColor: "#000000"
                }
            }
        }
    }

    componentDidMount(){
        let labels=[]
        let data = []
        let dataCopy = Object.assign({}, this.state.data)
        
        for(var i=0; i < this.props.allItems.length ; i++){
            labels.push(this.props.allItems[i].item);
        }
        for(var i=0; i < this.props.allItems.length ; i++){
            data.push(~~this.props.allItems[i].weight);
        }

        dataCopy.datasets[0].data = data;
        dataCopy.datasets[0].backgroundColor = utilFunc.generateRandomColors(this.props.numColors) 
        dataCopy.labels = labels;

        this.setState({data: dataCopy})
    }

    componentWillReceiveProps(nextProps){
        if(nextProps !== this.props){
            let labels=[]
            let data = []
            let dataCopy = Object.assign({}, this.state.data)
            
            for(var i=0; i < nextProps.allItems.length ; i++){
                labels.push(nextProps.allItems[i].item);
            }
            for(var i=0; i < nextProps.allItems.length ; i++){
                data.push(~~nextProps.allItems[i].weight);
            }
    
            dataCopy.datasets[0].data = data;
            dataCopy.datasets[0].backgroundColor = utilFunc.generateRandomColors(nextProps.numColors) 
            dataCopy.labels = labels;
    
            this.setState({data: dataCopy})
        }
    }

    render(){
        
        return (
            <div className='donut-chart'>
                <Doughnut height={100} weight={100}  data={this.state.data} options={this.state.options}>
                </Doughnut>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        businessBaskets: state.analyticsReducer.businessBaskets
    }
}

export default connect(mapStateToProps, {getBusinessBasketsCompleted})(Donut);