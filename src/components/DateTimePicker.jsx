import React from 'react';
import { TextField } from '@material-ui/core';


function DateTimePicker({handelDateTime}) {
  return (
        
    <form  noValidate>
      <TextField
        id="datetime"
        label="Order date"
        type="datetime-local"
        onChange={(e) => handelDateTime(e.target.value)}
        defaultValue="2017-05-24T10:30"
        // className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    );
}

export default DateTimePicker;
