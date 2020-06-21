import React ,{ useState } from 'react';
import { Container } from '@material-ui/core';

import styles from './App.module.css';

import DateTimePicker from './components/DateTimePicker'
import OrderTypeDropdown from './components/OrderTypeDropdown'
import CountryDropdown from './components/CountryDropdown'
import DeliveryTimeBtn from './components/DeliveryTimeBtn'
import Header from './components/Header'

const App = () => {
  let [dateTime, setDateTime] = useState("");
  let [orderType, setOrderType] = useState("");
  let [country, setCountry] = useState("");

  const handelCountryChange = (country) => {  
    setCountry(country);
  }
  const handelOrderType = (OrderTypecountry) => {  
    setOrderType(OrderTypecountry);
    // console.log(orderType);
  }
  const handelDateTime = (DateTime) => {  
    setDateTime(DateTime);
    // console.log(dateTime);
  }
  
  return (
    <div>
    <Container maxWidth="sm">
      <div className={styles.display}>
      <Header className={styles.spacing} />
      <DateTimePicker handelDateTime={handelDateTime} className={styles.spacing} />
      <OrderTypeDropdown handelOrderType={handelOrderType} className={styles.spacing} />
      <CountryDropdown handelCountryChange={handelCountryChange} className={styles.spacing} />
      <DeliveryTimeBtn dateTime={dateTime} orderType={orderType} country={country} className={styles.spacing} />
      </div>
    </Container>
    </div>
    );
}

export default App;
