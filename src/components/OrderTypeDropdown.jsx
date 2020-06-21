import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

function OrderTypeDropdown({handelOrderType}){
    return(
    <FormControl >
        <NativeSelect defaultValue="" onChange={(e) => handelOrderType(e.target.value)}>
            <option >Order Type</option>
            <option value="Urgent">Urgent</option>
            <option value="Normal">Normal</option>
            {/* {countries.map((country, i) => <option key={i} value={country} >{country}</option> )} */}
        </NativeSelect>
    </FormControl>

    )
}

export default OrderTypeDropdown;