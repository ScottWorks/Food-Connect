import React from 'react';
import {Bar} from 'react-chartjs-2';
import * as utilFunc  from '../../../config/analyticsUtil';
import {connect} from 'react-redux';
import {getBusinessBasketsCompleted} from '../../../ducks/analyticsReducer'

export class StatChart extends React.Component{
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

    componentDidMount(){
        this.props.getBusinessBasketsCompleted(4);
    }


    render() {
        return (
            <div>
            <Bar height={100} weight={100} data={this.state.data} options = {this.state.options}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        businessBaskets: state.analyticsReducer.businessBaskets
    }
}

export default connect(mapStateToProps, {getBusinessBasketsCompleted})(StatChart);