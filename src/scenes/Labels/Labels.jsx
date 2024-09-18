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

const Labels= () => {
  const [Label_035ml, setLabel_035ml] =  useState(0);
  const [Label_06ml, setLabel_06ml] =  useState(0);
  const [Label_1L, setLabel_1L] =  useState(0);
  const [Label_2L, setLabel_2L] =  useState(0);
  const [Label_total, setLabel_total] =  useState(0);
  const [Label_time, setLabel_time] =  useState('');


  useEffect(() => {
    const total = parseInt(Label_035ml) + parseInt(Label_06ml) + parseInt(Label_1L) + parseInt(Label_2L);
    setLabel_total(total.toString());
  }, [Label_035ml, Label_06ml, Label_1L, Label_2L]);
  
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('Label_035ml', Label_035ml);
    formData.append('Label_06ml', Label_06ml);
    formData.append('Label_1L', Label_1L);
    formData.append('Label_2L', Label_2L);
    formData.append('Label_total', Label_total);
    formData.append('Label_time', Label_time);
    console.log(formData);
  
    fetch("http://localhost:8000/commerce/create-rawmtaerial/label/", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Label_035ml: formData.get('Label_035ml'),
        Label_06ml: formData.get('Label_06gml'),
        Label_1L: formData.get('Label_1L'),
        Label_2L: formData.get('Label_2l'),
        Label_total: formData.get('Label_total'),
        Label_time: formData.get('Label_time'),
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
        subtitle="Use the form below to request Label"
      /> 
    <ToastContainer />
    <form onSubmit={handleFormSubmit}>


     

   
     <div style={{display: "flex", alignItems:"center", padding:'20px'}} >

     <label htmlFor="0.35ml">0.35ml:</label>
      <input
        type="number"
        id="Qp"
        label="0.35ml"
        value={Label_035ml}
        onChange={(event) => setLabel_035ml(event.target.value)}
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

      

<label htmlFor="0.6ml">0.6ml</label>
      <input
        type="text"
        id="Q_CASH"
        value={Label_06ml}
        onChange={(event) => setLabel_06ml(event.target.value)}
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
    

<label htmlFor="1L">1L</label>
      <input
        type="text"
        id="Totalp"
        value={Label_1L}
        onChange={(event) => setLabel_1L(event.target.value)}
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

<label htmlFor="Hp">2L:</label>
      <input
        type="number"
        id="Hp"
        value={Label_2L}
        onChange={(event) => setLabel_2L(event.target.value)}
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
            value={Label_total}
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
    selected={Label_time} // Update the prop name to 'selected'
    onChange={(newValue) => setLabel_time(newValue)}
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
export default Labels;
 