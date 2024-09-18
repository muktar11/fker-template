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

const Preform= () => {
  const [Preform_14gm , setPreform_14gm ] =  useState(0);
  const [Preform_18gm , setPreform_18gm ] =  useState(0);
  const [Preform_28gm , setPreform_28gm ] =  useState(0);
  const [Preform_40gm , setPreform_40gm ] =  useState(0);
  const [Preform_total, setPreform_total] =  useState(0);
  const [Preform_time, setPreform_time] =  useState('');

  
useEffect(() => {
  const total = parseInt(Preform_14gm) + parseInt(Preform_18gm) + parseInt(Preform_28gm) + parseInt(Preform_40gm);
  setPreform_total(total.toString());
}, [Preform_14gm, Preform_18gm, Preform_28gm, Preform_40gm]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('Preform_14gm', Preform_14gm);
    formData.append('Preform_18gm', Preform_18gm);
    formData.append('Preform_28gm', Preform_28gm);
    formData.append('Preform_40gm', Preform_40gm);
    formData.append('Preform_total', Preform_total);
    formData.append('Preform_time', Preform_time);
    console.log(formData);
  
    fetch("http://localhost:8000/commerce/create-rawmtaerial/preform", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Preform_14gm: formData.get('Preform_14gm'),
        Preform_18gm: formData.get('Preform_18gm'),
        Preform_28gm: formData.get('Preform_28gm'),
        Preform_40gm: formData.get('Preform_40gm'),
        Preform_total: formData.get('Preform_total'),
        Preform_time: formData.get('Preform_time'),
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
        subtitle="Use the form below to request Preform"
      /> 
    <ToastContainer />
    <form onSubmit={handleFormSubmit}>


     

   
     <div style={{display: "flex", alignItems:"center", padding:'20px'}} >

     <label htmlFor="Qp">14gm:</label>
      <input
        type="number"
        id="Qp"
        label="0.35ml"
        value={Preform_14gm}
        onChange={(event) => setPreform_14gm(event.target.value)}
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
          marginLeft: "2rem",
          marginRight: "1rem",
          borderbottom: "0.3rem solid transparent",
          transition: "all 0.3s",
        }}
      />

      

<label htmlFor="Q_CASH">18gm:</label>
      <input
        type="text"
        id="Q_CASH"
        value={Preform_18gm}
        onChange={(event) => setPreform_18gm(event.target.value)}
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
          marginLeft: "3rem",
          marginRight: "1rem",
          borderbottom: "0.3rem solid transparent",
          transition: "all 0.3s",
       
        }}
      />
 
  

 
    </div>

<div style={{display: "flex", alignItems:"center", padding:'20px'}}>
    

<label htmlFor="TOTAlq">28gm:</label>
      <input
        type="text"
        id="Totalp"
        value={Preform_28gm}
        onChange={(event) => setPreform_28gm(event.target.value)}
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

<label htmlFor="Hp">40gm:</label>
      <input
        type="number"
        id="Hp"
        value={Preform_40gm}
        onChange={(event) => setPreform_40gm(event.target.value)}
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
          marginLeft: "1.8rem",
          marginRight: "2rem",
          borderbottom: "0.3rem solid transparent",
          transition: "all 0.3s",
        }}
      />
     
    





</div>
  
     

     
<div style={{display: "flex", alignItems:"center", padding:'20px'}}>
    

    <label htmlFor="TOTAlq">Total:</label>
          <input
            type="text"
            id="Totalp"
            value={Preform_total}
            readOnly
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
    selected={Preform_time} // Update the prop name to 'selected'
    onChange={(newValue) => setPreform_time(newValue)}
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
export default Preform;
 