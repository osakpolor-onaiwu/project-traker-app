import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from "react-google-charts";
const ColumnChart = ({project,target}) => {

    console.log (project.length)
    console.log(target.length)


    return (
        <div>
    <Chart
        width={'500px'}
        height={'300px'}
        chartType="Bar"
        loader={<div>Loading Chart</div>}
        data={[
            ['Year', 'projects', 'targets'],
            ['Projects and Targets', project.length, target.length],
           
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
