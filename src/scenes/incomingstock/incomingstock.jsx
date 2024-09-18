import React, { useState, useEffect } from 'react';
import { Box, Button, Modal, Paper, Table, TableBody,Link, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";


const IncomingStock = () => {
const [customers, setCustomers] = useState([]);
const [selectedCustomer, setSelectedCustomer] = useState('');
const [selectedCustomerId, setSelectedCustomerId] = useState('');
const [salesRoute, setSalesRoute] = useState('');
const [InterStore, setInterStore] = useState('');
const [Drivers, setDrivers] = useState('');;
const [plate, setPlate] = useState('');
const [plateOptions, setPlateOptions] = useState([]);
const [selectedPlate, setSelectedPlate] = useState('');
const [GrandTotalCash, setGrandTotalCash] = useState('');
const [selectedItem, setSelectedItem] = useState('');
const [showCapsRows, setShowCapsRows] = useState(false);
const [showPreformRows, setPreformsRows] = useState(false);
const [showLabelsRows, setLabelsRows] = useState(false);

const [Qp_Standardized, setQp_Standardized] = useState('');
const [Hp_Standardized, setHp_Standardized] = useState('');
const [ONEp_Standardized, setONEp_Standardized] = useState('');
const [TWOp_Standardized, setTWOp_Standardized] = useState('');
const [Total_Standardized, setTotal_Standardized] = useState('');
const [Qp_Damaged, setQp_Damaged] = useState('');
const [Hp_Damaged, setHp_Damaged] = useState('');
const [ONEp_Damaged, setONEp_Damaged] = useState('');
const [TWOp_Damaged, setTWOp_Damaged] = useState('');
const [Total_Damaged, setTotal_Damaged] = useState('');

const [issue_store, setissue_store] = useState('');
const [recipant_store, setrecipant_store] = useState('');
const [Perform_14, setPreform_14] = useState('');
const [Perform_18, setPreform_18] = useState('');
const [Perform_28, setPreform_28] = useState('');
const [Perform_40, setPreform_40] = useState('');
const[Shrink_35gm, setShrink_35gm] = useState('');
const[Shrink_38gm, setShrink_38gm] = useState('');
const[Shrink_42gm, setShrink_42gm] = useState('');
const[Shrink_48gm, setShrink_48gm] = useState('');
const[Label_035ml, setLabel_035ml] = useState('');
const[Label_06ml, setLabel_06ml] = useState('');
const[Label_1L, setLabel_1L] = useState('');
const[Label_2L, setLabel_2L] = useState('');
const [Caps, setCaps] = useState('');
const [time, set_time] = useState('');




const handleIssueStoreChange = (event) => {
  setissue_store(event.target.value);
};

const handleRecipantStoreChange = (event) => {
  setrecipant_store(event.target.value);
};

const handlePerform_14Change = (event) => {
  setPreform_14(event.target.value);
};

const handlePerform_18Change = (event) => {
  setPreform_18(event.target.value);
};

const handlePerform_28Change = (event) => {
  setPreform_28(event.target.value);
};

const handlePerform_40Change = (event) => {
  setPreform_40(event.target.value);
};

const handle_TimeChange = (event) => {
  // Check if event and event.target are defined before accessing 'value'
  if (event && event.target && event.target.value) {
    set_time(event.target.value);
  }
};



const handleQpStandardizedChange = (event) => {
  const newQp = parseInt(event.target.value);
  setQp_Standardized(newQp);
  };
  
const handleHpStandardizedChange = (event) => {
  const newHp = parseInt(event.target.value);
  setHp_Standardized(newHp);
  };
  
const handleONEpStandardizedChange = (event) => {
  const newONEp = parseInt(event.target.value);
  setONEp_Standardized(newONEp);
  };
  
const handleTWOpStandardizedChange = (event) => {
  const newTWOp = parseInt(event.target.value);
  setTWOp_Standardized(newTWOp);
  };



  
const handleQpDamagedChange = (event) => {
  const newQp = parseInt(event.target.value);
  setQp_Damaged(newQp);
  };
  
const handleHpDamagedChange = (event) => {
  const newHp = parseInt(event.target.value);
  setHp_Damaged(newHp);
  };
  
const handleONEpDamagedChange = (event) => {
  const newONEp = parseInt(event.target.value);
  setONEp_Damaged(newONEp);
  };
  
const handleTWOpDamagedChange = (event) => {
  const newTWOp = parseInt(event.target.value);
  setTWOp_Damaged(newTWOp);
  };



  useEffect(() => {
    const totalp = (parseInt(Qp_Standardized) || 0) + (parseInt(Hp_Standardized) || 0) + (parseInt(ONEp_Standardized) || 0) + (parseInt(TWOp_Standardized) || 0);
    setTotal_Standardized(parseInt(totalp));
  }, [Qp_Standardized, Hp_Standardized, ONEp_Standardized, TWOp_Standardized]);
  
  useEffect(() => {
    const totalCash = (parseInt(Qp_Damaged) || 0) + (parseInt(Hp_Damaged) || 0) + (parseInt(ONEp_Damaged) || 0) + (parseInt(TWOp_Damaged) || 0);
    setTotal_Damaged(parseInt(totalCash));
  }, [Qp_Damaged, Hp_Damaged, ONEp_Damaged, TWOp_Damaged]);
  
  
const handleShrink_35Change = (event) => {
  setShrink_35gm(event.target.value);
};

const handleShrink_38Change = (event) => {
  setShrink_38gm(event.target.value);
};

const handleShrink_42Change = (event) => {
  setShrink_42gm(event.target.value);
};

const handleShrink_48Change = (event) => {
  setShrink_48gm(event.target.value);
};



const handleLabel_035mlChange = (event) => {
  setLabel_035ml(event.target.value);
};

const handleLabel_06mlChange = (event) => {
  setLabel_06ml(event.target.value);
};

const handleLabel_1LChange = (event) => {
  setLabel_1L(event.target.value);
};

const handleLabel_2LChange = (event) => {
  setLabel_2L(event.target.value);
};


const handleCapsChange = (event) => {
  setCaps(event.target.value);
};




const handleItemChange = (event) => {
  setSelectedItem(event.target.value);
};



const [tableHeads, setTableHeads] = useState([
  // Initial TableHeads
  [
    <TableCell key="description">Description</TableCell>,
    <TableCell key="uom">UOM/Quantity</TableCell>,
  
    <TableCell key="remark">Remark</TableCell>,
  ],
  [
  
<TableCell key="empty1"  sx={{ }}><input
    type="Text"  
      style={{
        color: '#333',
        padding: '0.3rem 2rem',
        backgroundColor: 'rgb(255, 255, 255)',
        border: '0.1rem solid #333',
        borderRadius: '5px',
        display: 'block',
        borderBottom: '0.3rem solid transparent',
        transition: 'all 0.3s',
}}
/></TableCell>,

<TableCell key="empty1"  sx={{ }}><input
    type="Text"
      style={{
        color: '#333',
          padding: '0.3rem 2rem',
          backgroundColor: 'rgb(255, 255, 255)',
          border: '0.1rem solid #333',
          borderRadius: '5px',
          display: 'block',
          borderBottom: '0.3rem solid transparent',
          transition: 'all 0.3s',
}}
/></TableCell>,
<TableCell key="empty1"  sx={{ }}><input
    type="Text"
      style={{
        color: '#333',
        padding: '0.3rem 2rem',
        backgroundColor: 'rgb(255, 255, 255)',
        border: '0.1rem solid #333',
        borderRadius: '5px',
        display: 'block',
        borderBottom: '0.3rem solid transparent',
        transition: 'all 0.3s',
}}
/></TableCell>,
  
    

  ],
]);

const addTableHead = () => {
  const newTableHead = Array.from({ length: 3 }, (_, index) => (
    <TableCell key={`empty${index + 1}`} sx={{ maxWidth: `${(index + 1) * 10}px` }}>
      <input
        type="text"
        placeholder={` `}
        label={``}
        style={{
          color: '#333',
          padding: '0.3rem 2rem',
          backgroundColor: 'rgb(255, 255, 255)',
          border: '0.1rem solid #333',
          borderRadius: '5px',
          display: 'block',
          borderBottom: '0.3rem solid transparent',
          transition: 'all 0.3s',
        }}
      />
    </TableCell>
  ));
  setTableHeads([...tableHeads, newTableHead]);
};
const removeTableHead = () => {
  if (tableHeads.length > 1) {
    const updatedTableHeads = [...tableHeads];
    updatedTableHeads.pop(); // Remove the last added TableHead
    setTableHeads(updatedTableHeads);
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData();
  formData.append('issue_store', issue_store);
  formData.append('recipant_store', recipant_store);
  formData.append('Perform_14', Perform_14);
  formData.append('Perform_18', Perform_18);
  formData.append('Perform_28', Perform_28);
  formData.append('Perform_40', Perform_40);
  formData.append('Shrink_35gm', Shrink_35gm);
  formData.append('Shrink_38gm', Shrink_38gm);
  formData.append('Shrink_42gm', Shrink_42gm);
  formData.append('Shrink_48gm', Shrink_48gm);
  formData.append('Label_035ml', Label_035ml);
  formData.append('Label_06ml', Label_06ml);
  formData.append('FG_Standardized_035ml', Qp_Standardized);
  formData.append('FG_Standardized_06ml', Hp_Standardized);
  formData.append('FG_Standardized_1l', ONEp_Standardized);
  formData.append('FG_Standardized_2l', TWOp_Standardized);
  formData.append('FG_Standardized_Total', Total_Standardized)
  formData.append('FG_Damaged_035ml', Qp_Damaged);
  formData.append('FG_Damaged_06ml', Hp_Damaged);
  formData.append('FG_Damaged_1l', ONEp_Damaged);
  formData.append('FG_Damaged_2l', TWOp_Damaged);
  formData.append('FG_Damaged_Total', Total_Damaged);
  formData.append('Label_1L', Label_1L);
  formData.append('Label_2L', Label_2L);
  formData.append('Caps', Caps);
  formData.append('time', time);

  console.log(formData);
  
  fetch(process.env.REACT_APP_API_URL+`/commerce/create-rawmtaerial/`, {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle successful response
      console.log(data);
      toast.success('Order created successfully!');
      
      // Reset the state to initial values or clear the form fields
      setissue_store('');
      setrecipant_store('');
      setPreform_14('');
      setPreform_18('');
      setPreform_28('');
      setPreform_40('');
      setShrink_35gm('');
      setShrink_38gm('');
      setShrink_42gm('');
      setShrink_48gm('');
      setLabel_035ml('');
      setLabel_06ml('');
      setLabel_1L('');
      setLabel_2L('');
      setCaps('');
      set_time('');
      setQp_Standardized('');
      setHp_Standardized('');
      setONEp_Standardized('');
      setTWOp_Standardized('');
      setTotal_Standardized('');
      setQp_Damaged('');
      setHp_Damaged('');
      setONEp_Damaged('');
      setTWOp_Damaged('');
      setTotal_Damaged('');
    })
    .catch((error) => {
      // Handle error
      console.log(error);
      toast.error(`An error occurred: ${error.message}`);
    });
};


return (
  
  <div  style={{ display: "flex", flexDirection: "column",  padding: "20px",  width: "100%", minWidth:"100%"}}>

  <Header
        title="Inventory Request"
        subtitle="Use the form below to request an Order"
      /> 
    <ToastContainer />
    <form onSubmit={handleFormSubmit}>

    <div style={{display: "flex",   width: "100%", padding: "20px", alignItems:"center",   justifyContent: "space-between"}}>
<div style={{ display: "flex", flexDirection: "row",  alignItems:"center",marginBottom: "10px" }}>
     
      <select
        id="issue_store"
        value={issue_store}
        onChange={handleIssueStoreChange}
        style={{
          color: "#333",
          margin:" 0 auto",
          padding: "0.7rem 2rem",
          backgroundColor: "rgb(255, 255, 255)",
          border: "none",
          width: "100%",
          display: "block",
          borderbottom: "0.3rem solid transparent",
          transition: "all 0.3s",
        }}
      >
        <option value="">-- Issue Store --</option>
        <option value="AdissAbaba">AdissAbaba</option>
        <option value="Wolketie">Wolketie</option>
        <option value="Agena">Agena</option>
        <option value="Factory">Factory</option>
        <option value="Promotion">Promotion</option>
  
      
      </select>
    
</div>
<div style={{ display: "flex", flexDirection: "row",  alignItems:"center",marginBottom: "10px" }}>
            <select
              id="plate"
              value={recipant_store}
              onChange={handleRecipantStoreChange}
              style={{
                color: "#333",
                margin:" 0 auto",
                padding: "0.7rem 2rem",
                backgroundColor: "rgb(255, 255, 255)",
                border: "none",
                width: "100%",              
                display: "block",           
                borderbottom: "0.3rem solid transparent",
                transition: "all 0.3s",
              }}
            >
              <option value="">To:</option>
              <option value="">-- Issue Store --</option>
              <option value="AdissAbaba">AdissAbaba</option>
              <option value="Wolketie">Wolketie</option>
              <option value="Agena">Agena</option>
              <option value="Factory">Factory</option>
            </select>
</div>

      
<div style={{ display: "flex", flexDirection: "row",  alignItems:"center",marginBottom: "10px" }}>
<select
        id="Caps"
        value={selectedItem}
        onChange={handleItemChange}
        style={{
          color: "#333",
          margin:" 0 auto",
          padding: "0.7rem 2rem",
          backgroundColor: "rgb(255, 255, 255)",
          border: "none",
          width: "100%",
          maxWidth:"100%",     
          minWidth:"30%",
          display: "block",
        
          borderbottom: "0.3rem solid transparent",
          transition: "all 0.3s",
        }}
      >
    <option value="Materials">Select Item</option>
    <option value="Caps">Caps</option>
            <option value="Labels">Labels</option>
            <option value="Preform">Preform</option>
            <option value="Shrink">Shrink</option>
            <option value="FG Standaridzed">FG Standaridzed</option>
            <option value="FGDamaged">FG Damaged</option>
      
      </select>
</div>

<TableRow display="center">
<DatePicker
  label="Date"
  placeholderText='Date'
    selected={time}
    onChange={(newValue) =>  set_time(newValue)}
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
</TableRow>


     </div>






     

   
 
     {selectedItem === 'Shrink'&& (
 
     <div style={{display: "flex",   width: "100%", padding: "20px", alignItems:"center",   justifyContent: "space-between"}}>

<div style={{ display: "flex", flexDirection: "row",  alignItems:"center",marginBottom: "10px" }}>
 

      <input
        type="number"
        id="Shrink"
        label="Shrink"
        placeholder='Shrink_35gm'
        value={Shrink_35gm}
        onChange={handleShrink_35Change}
        style={{
          color: "#333",
          margin:" 0 auto",
          padding: "0.7rem 2rem",
          backgroundColor: "rgb(255, 255, 255)",
          border: "none",
          width: "100%",
          display: "block",
          borderbottom: "0.3rem solid transparent",
          transition: "all 0.3s",
        }}
      />

      
</div>



<div style={{ display: "flex", flexDirection: "row",  alignItems:"center",marginBottom: "10px" }}>
 

      <input
        type="number"
        id="Shrink_38gm"
        label="Shrink_38gm"
        placeholder='Shrink_38gm'
        value={Shrink_38gm}
        onChange={handleShrink_38Change}
        style={{
          color: "#333",
          margin:" 0 auto",
          padding: "0.7rem 2rem",
          backgroundColor: "rgb(255, 255, 255)",
          border: "none",
          width: "100%",
          display: "block",
          borderbottom: "0.3rem solid transparent",
          transition: "all 0.3s",
        }}
      />

      
</div>

<div style={{ display: "flex", flexDirection: "row",  alignItems:"center",marginBottom: "10px" }}>
 

      <input
        type="number"
        id="Shrink_42gm"
        label="Shrink_42gm"
        placeholder='Shrink_42gm'
        value={Shrink_42gm}
        onChange={handleShrink_42Change}
        style={{
          color: "#333",
          margin:" 0 auto",
          padding: "0.7rem 2rem",
          backgroundColor: "rgb(255, 255, 255)",
          border: "none",
          width: "100%",
          display: "block",
          borderbottom: "0.3rem solid transparent",
          transition: "all 0.3s",
        }}
      />

      
</div>
        
<div style={{ display: "flex", flexDirection: "row",  alignItems:"center",marginBottom: "10px" }}>
 

 <input
   type="number"
   id="Shrink_48gm"
   label="Shrink_48gm"
   placeholder='Shrink_48gm'
   value={Shrink_48gm}
   onChange={handleShrink_48Change}
   style={{
     color: "#333",
     margin:" 0 auto",
     padding: "0.7rem 2rem",
     backgroundColor: "rgb(255, 255, 255)",
     border: "none",
     width: "100%",
     display: "block",
     borderbottom: "0.3rem solid transparent",
     transition: "all 0.3s",
   }}
 />

 
</div>
    </div>

)}




{selectedItem === 'FG Standaridzed'&& (
 <div>
<div style={{display: "flex",   width: "100%", padding: "20px", alignItems:"center",   justifyContent: "space-between"}}>

<div style={{ display: "flex", flexDirection: "row",  alignItems:"center",marginBottom: "10px" }}>


  <input
    type="number"
    id="Qp"
    label="0.35ml"
    placeholder='0.35ml'
    value={Qp_Standardized}
    onChange={handleQpStandardizedChange}
    style={{
      color: "#333",
      margin:" 0 auto",
      padding: "0.7rem 2rem",
      backgroundColor: "rgb(255, 255, 255)",
      border: "none",
      width: "100%",
      display: "block",
      borderbottom: "0.3rem solid transparent",
      transition: "all 0.3s",
    }}
  />

  
</div>



<div style={{ display: "flex", flexDirection: "row",  alignItems:"center",marginBottom: "10px" }}>


<input
  type="number"
  id="Hp"
  label="0.6ml"
  placeholder='0.6ml'
  value={Hp_Standardized}
  onChange={handleHpStandardizedChange}
  style={{
    color: "#333",
    margin: "0 auto",
    padding: "0.7rem 2rem",
    backgroundColor: "rgb(255, 255, 255)",
    border: "none",
    width: "100%",
    display: "block",
    borderBottom: "0.3rem solid transparent",
    transition: "all 0.3s",
  }}
/>


  
</div>

<div style={{ display: "flex", flexDirection: "row",  alignItems:"center",marginBottom: "10px" }}>


  <input
    type="number"
    id="ONEp"
    label="1L:"
    placeholder='1L:'
    value={ONEp_Standardized}
    onChange={handleONEpStandardizedChange}
    style={{
      color: "#333",
      margin:" 0 auto",
      padding: "0.7rem 2rem",
      backgroundColor: "rgb(255, 255, 255)",
      border: "none",
      width: "100%",
      display: "block",
      borderbottom: "0.3rem solid transparent",
      transition: "all 0.3s",
    }}
  />

  
</div>
    
<div style={{ display: "flex", flexDirection: "row",  alignItems:"center",marginBottom: "10px" }}>


<input
type="number"
id="TWOp"
label="2L:"
placeholder='2L:'
value={TWOp_Standardized}
onChange={handleTWOpStandardizedChange}
style={{
 color: "#333",
 margin:" 0 auto",
 padding: "0.7rem 2rem",
 backgroundColor: "rgb(255, 255, 255)",
 border: "none",
 width: "100%",
 display: "block",
 borderbottom: "0.3rem solid transparent",
 transition: "all 0.3s",
}}
/>


</div>
</div>

<div style={{display: "flex",   width: "100%", padding: "20px", alignItems:"center",   justifyContent: "space-between"}}>

<div style={{ display: "flex", flexDirection: "row",  alignItems:"center",marginBottom: "10px" }}>


  <input
    type="number"
    id="Qp"
    label="Total Qty"
    placeholder='Total Qty'
    value={Total_Standardized}
    style={{
      color: "#333",
      margin:" 0 auto",
      padding: "0.7rem 2rem",
      backgroundColor: "rgb(255, 255, 255)",
      border: "none",
      width: "100%",
      display: "block",
      borderbottom: "0.3rem solid transparent",
      transition: "all 0.3s",
    }}
  />

  
</div>
</div>
 </div>
 



)}





{selectedItem === 'FGDamaged'&& (
 <div>
<div style={{display: "flex",   width: "100%", padding: "20px", alignItems:"center",   justifyContent: "space-between"}}>

<div style={{ display: "flex", flexDirection: "row",  alignItems:"center",marginBottom: "10px" }}>


  <input
    type="number"
    id="Qp"
    label="0.35ml"
    placeholder='0.35ml'
    value={Qp_Damaged}
    onChange={handleQpDamagedChange}
    style={{
      color: "#333",
      margin:" 0 auto",
      padding: "0.7rem 2rem",
      backgroundColor: "rgb(255, 255, 255)",
      border: "none",
      width: "100%",
      display: "block",
      borderbottom: "0.3rem solid transparent",
      transition: "all 0.3s",
    }}
  />

  
</div>



<div style={{ display: "flex", flexDirection: "row",  alignItems:"center",marginBottom: "10px" }}>


  <input
    type="number"
    id="Qp"
    label="0.35ml"
    placeholder='0.6ml'
    value={Hp_Damaged}
    onChange={handleHpDamagedChange}
    style={{
      color: "#333",
      margin:" 0 auto",
      padding: "0.7rem 2rem",
      backgroundColor: "rgb(255, 255, 255)",
      border: "none",
      width: "100%",
      display: "block",
      borderbottom: "0.3rem solid transparent",
      transition: "all 0.3s",
    }}
  />

  
</div>

<div style={{ display: "flex", flexDirection: "row",  alignItems:"center",marginBottom: "10px" }}>


  <input
    type="number"
    id="Qp"
    label="0.35ml"
    placeholder='1L:'
    value={ONEp_Damaged}
    onChange={handleONEpDamagedChange}
    style={{
      color: "#333",
      margin:" 0 auto",
      padding: "0.7rem 2rem",
      backgroundColor: "rgb(255, 255, 255)",
      border: "none",
      width: "100%",
      display: "block",
      borderbottom: "0.3rem solid transparent",
      transition: "all 0.3s",
    }}
  />

  
</div>
    
<div style={{ display: "flex", flexDirection: "row",  alignItems:"center",marginBottom: "10px" }}>


<input
type="number"
id="Qp"
label="0.35ml"
placeholder='2L:'
value={TWOp_Damaged}
onChange={handleTWOpDamagedChange}
style={{
 color: "#333",
 margin:" 0 auto",
 padding: "0.7rem 2rem",
 backgroundColor: "rgb(255, 255, 255)",
 border: "none",
 width: "100%",
 display: "block",
 borderbottom: "0.3rem solid transparent",
 transition: "all 0.3s",
}}
/>


</div>
</div>

<div style={{display: "flex",   width: "100%", padding: "20px", alignItems:"center",   justifyContent: "space-between"}}>

<div style={{ display: "flex", flexDirection: "row",  alignItems:"center",marginBottom: "10px" }}>

<input
type="number"
id="Qp"
label="0.35ml"
placeholder='Total:'
value={Total_Damaged}
style={{
 color: "#333",
 margin:" 0 auto",
 padding: "0.7rem 2rem",
 backgroundColor: "rgb(255, 255, 255)",
 border: "none",
 width: "100%",
 display: "block",
 borderbottom: "0.3rem solid transparent",
 transition: "all 0.3s",
}}
/>


</div>
</div>

<div style={{display: "flex",   width: "100%", padding: "20px", alignItems:"center",   justifyContent: "space-between"}}>

</div>
 </div>
 



)}

 

{selectedItem === 'Preform'&& ( 
    <div style={{display: "flex",   width: "100%", padding: "20px", alignItems:"center",   justifyContent: "space-between"}}>
<div style={{ display: "flex", flexDirection: "row",  alignItems:"center" }}>
       

      <input
        type="number"
        id="Preform"
        value={Perform_14}
        placeholder='14gm:'
        onChange={handlePerform_14Change}
        style={{
          color: "#333",
          margin:" 0 auto",
          padding: "0.7rem 2rem",
          backgroundColor: "rgb(255, 255, 255)",
          border: "none",
          width: "100%",
          display: "block",
          borderbottom: "0.3rem solid transparent",
          transition: "all 0.3s",
        }}
      />
  </div>
<div style={{ display: "flex", flexDirection: "row",  alignItems:"center" }}>
    
 
      <input
        type="text"
        id="Preform"
        value={Perform_18}
        placeholder='18gm:'
        onChange={handlePerform_18Change}
        style={{
          color: "#333",
          margin:" 0 auto",
          padding: "0.7rem 2rem",
          backgroundColor: "rgb(255, 255, 255)",
          border: "none",
          width: "100%",
          display: "block",
          borderbottom: "0.3rem solid transparent",
          transition: "all 0.3s",
        }}
      />

</div>
<div>

      <input
        type="text"
        id="Preform"
        value={Perform_28}
        placeholder='28gm:'
        onChange={handlePerform_28Change}
        style={{
          color: "#333",
          margin:" 0 auto",
          padding: "0.7rem 2rem",
          backgroundColor: "rgb(255, 255, 255)",
          border: "none",
          width: "100%",
          display: "block",
          borderbottom: "0.3rem solid transparent",
          transition: "all 0.3s",
        }}
      />   



 
</div>
<div>
<input
        type="number"
        id="Preform"
        value={Perform_40}
        placeholder='40gm:'
        onChange={handlePerform_40Change}
        style={{
          color: "#333",
          margin:" 0 auto",
          padding: "0.7rem 2rem",
          backgroundColor: "rgb(255, 255, 255)",
          border: "none",
          width: "100%",
          display: "block",
          borderbottom: "0.3rem solid transparent",
          transition: "all 0.3s",
        }}
      />
</div>

 
</div>
       


       )}




 

{selectedItem === 'Materials'&& ( 
   <TableContainer component={Paper}>
   <div style={{ textAlign: 'center', padding: '10px' }}>
       <Header
         title="Purchase Requistion"
         subtitle="Order Detail that requires Approval"
       />
     </div>
     <Table size="small" aria-label="a dense table">
      {tableHeads.map((tableHead, index) => (
        <TableHead key={index}>
          <TableRow>{tableHead}</TableRow>
        </TableHead>
      ))}
    </Table>
      <Button variant="contained" onClick={addTableHead}>
        Add Order Input
      </Button>
      <Button variant="contained" onClick={removeTableHead}>
        Remove Order Input
      </Button>
   </TableContainer>
       )}


      

{selectedItem === 'Labels'&& (
<div style={{display: "flex",   width: "100%", padding: "20px", alignItems:"center",   justifyContent: "space-between"}}>
<div style={{ display: "flex", flexDirection: "row",  alignItems:"center" }}>
       

      <input
        type="number"
        id="Label"
        value={Label_035ml}
        placeholder='Label_035ml:'
        onChange={handleLabel_035mlChange}
        style={{
          color: "#333",
          margin:" 0 auto",
          padding: "0.7rem 2rem",
          backgroundColor: "rgb(255, 255, 255)",
          border: "none",
          width: "100%",
          display: "block",
          borderbottom: "0.3rem solid transparent",
          transition: "all 0.3s",
        }}
      />
  </div>
  


<div  style={{ display: "flex", flexDirection: "row",  alignItems:"center"}}> 

    <input
      type="text"
      id="Label"
      value={Label_06ml}
      placeholder='Label_06ml:'
      onChange={handleLabel_06mlChange}
      style={{
        color: "#333",
        margin:" 0 auto",
        padding: "0.7rem 2rem",
        backgroundColor: "rgb(255, 255, 255)",
        border: "none",
        width: "100%",
        display: "block",
        borderbottom: "0.3rem solid transparent",
        transition: "all 0.3s",
      }}
    />   




</div>

<div  style={{ display: "flex", flexDirection: "row",  alignItems:"center"}}>
<input
        type="number"
        id="Label"
        value={Label_1L}
        placeholder='Label_1L:'
        onChange={handleLabel_1LChange}
        style={{
          color: "#333",
          margin:" 0 auto",
          padding: "0.7rem 2rem",
          backgroundColor: "rgb(255, 255, 255)",
          border: "none",
          width: "100%",
          display: "block",
          borderbottom: "0.3rem solid transparent",
          transition: "all 0.3s",
        }}
      />
</div>



<div  style={{ display: "flex", flexDirection: "row",  alignItems:"center"}}>
<input
        type="number"
        id="Label"
        value={Label_2L}
        placeholder='Label_2L:'
        onChange={handleLabel_2LChange}
        style={{
          color: "#333",
          margin:" 0 auto",
          padding: "0.7rem 2rem",
          backgroundColor: "rgb(255, 255, 255)",
          border: "none",
          width: "100%",
          display: "block",
          borderbottom: "0.3rem solid transparent",
          transition: "all 0.3s",
        }}
      />
</div>




</div>    

       )}

 


{selectedItem === 'Caps'&& (
<div style={{display: "flex",   width: "100%", padding: "20px", alignItems:"center",   justifyContent: "space-between"}}>
<div style={{ display: "flex", flexDirection: "row",  alignItems:"center",marginBottom: "10px" }}>
       

      <input
        type="number"
        id="Caps"      
        placeholder='Caps:'
        value={Caps}
        onChange={handleCapsChange}
        
        style={{
          color: "#333",
          margin:" 0 auto",
          padding: "0.7rem 2rem",
          backgroundColor: "rgb(255, 255, 255)",
          border: "none",
          width: "100%",
          display: "block",
          borderbottom: "0.3rem solid transparent",
          transition: "all 0.3s",
        }}
      />


  </div>
  
</div>    

       )}


<div style={{display: "flex", Width:"800px", justifyContent:"space-between", alignItems:"center", padding:'20px'}}>

     
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
);
};
export default IncomingStock;