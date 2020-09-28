import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from "react-google-charts";
const ColumnChart = () => {
    var x = new Date();
    x.getMonth()
    return (
        <div>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Month', 'Projects', 'Targets'],
                    ['Jan', 3, 12],
                    ['Feb', 11, 10],
                    ['Mar', 5, 11],
                    ['Apr', 2, 10],
                    ['May', 4, 5],
                    ['Jun', 2, 12],
                    ['Jul', 6, 12],
                    ['Aug', 2, 12],
                    ['Sep', 8, 12],
                    ['Oct', 11, 12],
                    ['Nov', 2, 12],
                    ['Dec', 9, 12],
                ]}
                options={{
                    // Material design options
                    chart: {
                    },
                }}
                // For tests
                rootProps={{ 'data-testid': '2' }}
                />
        </div>
    )
}

const mapStateToProps = (state) => ({
    project:state.project.projects,
    chats:state.chat.chat,
    auth:state.auth.user,
    target:state.target.target 
})

const mapDispatchToProps = ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(ColumnChart)
