
import axios from "axios";

const url = "http://localhost:5000";

export const fetchCountries = async () => {
  try {

    const data = await axios.get(`${url}/countries/countrynames`);

    // return(countries.map((country) => country.country))
    
    console.log(data.data.country);

  } catch (error) {
    console.log(error);
  }
}