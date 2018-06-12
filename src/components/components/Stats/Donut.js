import React from 'react'

import {Doughnut} from 'react-chartjs-2';
import * as utilFunc  from '../../../config/analyticsUtil';
import {connect} from 'react-redux';
import {getBusinessBasketsCompleted} from '../../../ducks/analyticsReducer'

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
        dataCopy.labels = labels;
        this.setState({data: dataCopy})
    }

    render(){
        return (
            <Doughnut height={100} weight={100}  data={this.state.data} options={this.state.options}>
            </Doughnut>
        )
    }
}

function mapStateToProps(state){
    return {
        businessBaskets: state.analyticsReducer.businessBaskets
    }
}

export default connect(mapStateToProps, {getBusinessBasketsCompleted})(Donut);