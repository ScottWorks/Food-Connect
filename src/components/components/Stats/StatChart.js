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
                        data: [],
                        backgroundColor: utilFunc.generateRandomColors(this.props.numColors)
                    }
                ],
                labels:[]
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
        let labels=[]
        let data = []
        let dataCopy = Object.assign({}, this.state.data)
        
        for(var i=0; i < this.props.allItems.length ; i++){
            labels.push(this.props.allItems[i].item);
        }
        for(var i=0; i < this.props.allItems.length ; i++){
            data.push(~~this.props.allItems[i].FMV);
        }

        dataCopy.datasets[0].data = data;
        dataCopy.labels = labels;
        this.setState({data: dataCopy})
    }


    render() {
        console.log(this.props.businessBaskets)
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