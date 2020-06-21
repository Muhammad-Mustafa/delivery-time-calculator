import React from 'react'
import { Button } from '@material-ui/core';

function DeliveryTimeBtn({dateTime, orderType, country}){

    const validation = () =>{
        if(dateTime == ""){
            alert("Insert Date Time")
        }else if(orderType == ""){
            alert("Insert OrderType")
        }else if(country == ""){
            alert("Insert Country")
        }else{
            //change this after creating the Api
            alert("Calculated time"+ new Date());
        }
    }
    return(
        <Button variant="contained" color="primary" onClick={validation}>
            Calculate Delivery Time
        </Button>
    );
}

export default DeliveryTimeBtn;