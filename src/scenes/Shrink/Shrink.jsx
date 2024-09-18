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

const Shrink= () => {
const [Shrink_35gm, setShrink_35gm] =  useState(0);
const [Shrink_38gm, setShrink_38gm] = useState(0);
const [Shrink_42gm, setShrink_42gm] = useState(0);
const [Shrink_48gm, setShrink_48gm] = useState(0);
const [Shrink_total, setShrink_total] = useState(0);
const [Shrink_time, setShrink_time] = useState('');



useEffect(() => {
  const total = parseInt(Shrink_35gm) + parseInt(Shrink_38gm) + parseInt(Shrink_42gm) + parseInt(Shrink_48gm);
  setShrink_total(total.toString());
}, [Shrink_35gm, Shrink_38gm, Shrink_42gm, Shrink_48gm]);

const handleFormSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData();
  formData.append('Shrink_35gm', Shrink_35gm);
  
  formData.append('Shrink_42gm', Shrink_42gm);
  formData.append('Shrink_48gm', Shrink_48gm);
  formData.append('Shrink_total', Shrink_total);
  formData.append('Shrink_time', Shrink_time);
  
  console.log(formData);

  fetch(process.env.REACT_APP_API_URL+"/commerce/create-rawmtaerial/shrink/", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Shrink_35gm: formData.get('Shrink_35gm'),
      Shrink_38gm: formData.get('Shrink_38gm'),
      Shrink_42gm: formData.get('Shrink_42gm'),
      Shrink_48gm: formData.get('Shrink_48gm'),
      Shrink_total: formData.get('Shrink_total'),
      Shrink_time: formData.get('Shrink_time'),
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
        subtitle="Use the form below to request Shrink"
      /> 
    <ToastContainer />
    <form onSubmit={handleFormSubmit}>


     

   
     <div style={{display: "flex", alignItems:"center", padding:'20px'}} >

     <label htmlFor="Shrink">0.32gm:</label>
      <input
        type="number"
        value={Shrink_35gm}
        onChange={(event) => setShrink_35gm(event.target.value)}
        id="Shrink_32gm"
        label="Shrink_32gm"
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

      

<label htmlFor="Shrink_38gm">0.38cm</label>
      <input
        type="number"
        id="Shrink_38gm"
        value={Shrink_38gm}
        onChange={(event) => setShrink_38gm(event.target.value)}
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
    

<label htmlFor="Shrink48">0.42cm:</label>
      <input
        type="number"
        id="Shrink48"
        value={Shrink_42gm}
        onChange={(event) => setShrink_42gm(event.target.value)}
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

<label htmlFor="Shrink">0.48cm:</label>
      <input
        type="number"
        id="Hp"
        value={Shrink_48gm}
        onChange={(event) => setShrink_48gm(event.target.value)}
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
            value={Shrink_total}
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
    selected={Shrink_time} // Update the prop name to 'selected'
    onChange={(newValue) => setShrink_time(newValue)}
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
export default Shrink;
 