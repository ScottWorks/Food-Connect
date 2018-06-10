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
                        data:[1088,208,308, 4000, 4930],
                        backgroundColor: utilFunc.generateRandomColors(5) // TODO: need to generate number based on number of data points
                    }
                ], 
                labels:['red', 'yellow', 'blue'] // TODO: Need to auto generate labels based on food
            }, 
            options:{
                responsive:true,
                title: {
                    display: true,
                    position: "top",
                    text: "Pounds of Food Saved", // TODO:
                    fontSize: 25,
                    fontColor: "#000000"
                }
            }
        }
    }

    componentDidMount = async() => {
        await this.props.getBusinessBasketsCompleted(this.props.businessID);
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