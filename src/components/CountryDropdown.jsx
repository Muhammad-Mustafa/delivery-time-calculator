import React, { useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import {fetchCountries} from '../api'

function CountryDropdown({ handelCountryChange }){

    useEffect(() =>{
        async function getCountry (){
            const country = await fetchCountries();
        }
        getCountry();

    },[]
    )
    
    return(
    <FormControl >
        <NativeSelect defaultValue="" onChange={(e) => handelCountryChange(e.target.value)}>
            <option value="">Country</option>
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
            {/* {countries.map((country, i) => <option key={i} value={country} >{country}</option> )} */}
        </NativeSelect>
    </FormControl>

    )
}

export default CountryDropdown;