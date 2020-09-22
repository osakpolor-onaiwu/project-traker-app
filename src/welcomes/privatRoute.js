import React, { Component } from 'react'
import {Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const PrivateRoute=({component:Component,auth,...rest})=>{
return(
 <Route
 {...rest}
 render={props=>{
     if(auth.isLoading){
         return <h2>is loading</h2>
     }
     else if(!auth.isAuthenticated){
         return <Redirect to='/login'/>
         //note by default isAuthenticated is null, so here we are saying if null or if it is false 
         //then redirect to login page else if true ie it is true the render the components we will supply as props in app.js
         //remember once authenticated d isAuthenticated will turn to true hence we won't be redirected, hence the !isAuthenticated
     }
     else{
     return <Component {...props}/>
     }
 }}
 />
 )
}

const mapStateToProps=(state)=>{
    return{
    auth:state.auth
    }
}

export default connect(mapStateToProps)(PrivateRoute) 

// what we did at the top is destructuring. we said any Component  we put in component={}
// app .jsx should taken as a prop called component so we then take those component  and rename the Component in line 20
//note it is componen t we assign to Component, and not the usual way
// , then we did for auth and then ...rest
// this means all other props we send should be assigned to rest and returned, then update the component prop and auth prop.
// just as ...state takes all item in the state, then you can update some. ...state is the spread operator for
//state, ...rest is the spread operator for props