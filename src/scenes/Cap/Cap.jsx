import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, MenuItem } from "@mui/material";
import { useFormik } from "formik";
import { TableRow, TableCell } from '@mui/material';
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";

const Caps = () => {
const [customers, setCustomers] = useState([]);
const [selectedCustomer, setSelectedCustomer] = useState('');
const [Caps, setCaps] = useState('');
const [Caps_time, setCaps_time] = useState("");

const handleFormSubmit = (event) => {
event.preventDefault();
const formData = new FormData();
formData.append('Caps', Caps);
formData.append('Caps_time', Caps_time);

console.log(formData);
fetch("http://localhost:8000/commerce/create-rawmtaerial/caps", {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    Caps: formData.get('Caps'),
    Caps_time: formData.get('Caps_time'),
  })
 
})
  .then((response) => response.json())
  .then((data) => {
    // Handle successful response
    console.log(data);
    toast.success('Order created successfully!');
  })
  .catch((error) => {
    // Handle error
    console.log(error);
    toast.error('An error occurred. Please try again.');
  });
};

return (
  
  <div
  
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth:"50%",
    width: "50%",
    minWidth:"30%",   
    padding: '20px',
    borderRadius: '10px',
    width: '100wh',
    minWidth: '800px',
  }}
>
  <div>
  <Header
        title="Create Raw Material Request"
        subtitle="Use the form below to request Caps"
      /> 
    <ToastContainer />
    <form onSubmit={handleFormSubmit}>


     

   
    

  
<div style={{display: "flex", alignItems:"center", padding:'20px'}}>
    

<label htmlFor="TOTAlq">Caps:</label>
      <input
        type="text"
        id="Caps"
        value={Caps}
        onChange={(event) => setCaps(event.target.value)}
        style={{
          margin:" 0 auto",
          padding: "0.7rem 2rem",
          backgroundColor: "rgb(255, 255, 255)",
          border: "none",
          width: "50%",
          maxWidth:"50%",
          width: "50%",
          minWidth:"30%",
          display: "block",
          marginLeft: "3.2rem",
          marginRight: "2rem",
          borderbottom: "0.3rem solid transparent",
          transition: "all 0.3s",
        }}
      />   


</div>
  
     

      
         


<div style={{display: "flex", Width:"800px", justifyContent:"space-between", alignItems:"center", padding:'20px'}}>
<label htmlFor="TOTAlq">Item Required Date:</label>
<TableRow  display="center">
<TableCell>
  <DatePicker
    selected={Caps_time} // Update the prop name to 'selected'
    onChange={(newValue) => setCaps_time(newValue)}
    renderInput={(params) => (
      <TextField
        {...params}
        fullWidth
        margin="normal"
        InputProps={{
          style: {
            color: "black",
            paddingTop: "10px",
          },
        }}
        sx={{
          paddingTop: "10px",
          borderRadius: "5px",
          boxShadow: "2px 2px 4px rgba(30, 30, 30, 30)",
          "& .MuiInputBase-root": {
            backgroundColor: "inherit",
          },
          "& .MuiInputBase-input": {
            padding: "10px 12px",
          },
        }}
      />
    )}
  />
</TableCell>
</TableRow>
     
      <button
        type="submit"
        style={{
          padding: '5px',
          borderRadius: '3px',
          backgroundColor: 'blue',
          width: '100px',
          color: 'white',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        Submit
      </button>
</div>

    </form>
  </div>
</div>
);
};
export default Caps;
 