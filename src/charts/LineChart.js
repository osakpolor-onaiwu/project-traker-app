import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from 'react-google-charts'

const LineChart = () => {
    var x = new Date();
    x.getMonth()
    return (
        <div>
            <Chart
                width={'600px'}
                height={'300px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['', ''],
                    ['jan', 0],
                    ['feb', 10],
                    ['mar', 23],
                    ['Apr', 17],
                    ['May', 18],
                    ['Jun', 9],
                    ['Jul', 11],
                    ['Aug', 27],
                    ['Sep', 33],
                    ['Oct', 40],
                    ['Nov', 32],
                    ['Dec', 35],
                ]}
                options={{
                    hAxis: {
                    title: 'Month',
                    },
                    vAxis: {
                    title: 'No of visit',
                    },
                }}
                rootProps={{ 'data-testid': '1' }}
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

const mapDispatchToProps =()=>({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(LineChart)
