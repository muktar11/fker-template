import React, { useEffect, useState } from "react";
import { Box, Button, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DatePicker from "react-datepicker";
import Header from "../../components/Header";

const InventoryRawAccess=() => {
  const theme = useTheme();
  const [customerData, setCustomerData] = useState([]);
  const colors = tokens(theme.palette.mode);
  const [selectedRow, setSelectedRow] = useState(null);

  
  const[Preform_14gm_inventory_deducut, setPreform_14gm_inventory_deducut] = useState("");
  const[Preform_18gm_inventory_deducut, setPreform_18gm_inventory_deducut] = useState("");
  const[Preform_28gm_inventory_deducut, setPreform_28gm_inventory_deducut] = useState("");
  const[Preform_40gm_inventory_deducut, setPreform_40gm_inventory_deducut] = useState("");
  const[Shrink_35gm_inventory_deducut, setShrink_35gm_inventory_deducut] = useState("");
  const[Shrink_38gm_inventory_deducut, setShrink_38gm_inventory_deducut] = useState("");
  const[Shrink_42gm_inventory_deducut, setShrink_42gm_inventory_deducut] = useState("");
  const[Shrink_48gm_inventory_deducut, setShrink_48gm_inventory_deducut] = useState("");
  const[Label_035ml_inventory_deducut, setLabel_035ml_inventory_deducut] = useState("");
  const[Label_06ml_inventory_deducut, setLabel_06ml_inventory_deducut] = useState("");
  const[Label_1L_inventory_deducut, setLabel_1L_inventory_deducut] = useState("");
  const[Label_2L_inventory_deducut, setLabel_2L_inventory_deducut] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL+"/commerce/view-rawmtaerial/");
        const data = await response.json();
        setCustomerData(data);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    { field: "_id", headerName: "ID", flex: 0.5 },
    { field: "staff", headerName: "Staff", flex: 1 },
    { field: "wareHouse", headerName: "WareHouse", flex: 1 },

  
    // Add other fields as needed
  ];

  const getRowId = (row) => row._id;

  const handleApprove = async () => {
    const firstName = localStorage.getItem("first_name");
    const lastName = localStorage.getItem("last_name");
    if (selectedRow) {
      try {

  
        const response = await fetch(process.env.REACT_APP_API_URL+`/commerce/sales-order/finance-create/${selectedRow._id}/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          
          }),
        });
        const data = await response.json();
        console.log("Customer approved successfully:", data);
        toast.success("Sales Order Verification successfully");
        // You can update the customerData state or perform any other action here
      } catch (error) {
        console.error("Error approving customer:", error);
        toast.error("Error approving customer");
      }
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL+`/commerce/sales-order/sdm-rejects/${id}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sdm_returned_issue: selectedRow.sdm_returned_issue,
        }),
      });
      const data = await response.json();
      console.log("Sales Order Returned successfully:", data);
      toast.success("Sales Order Returned successfully");
      // You can update the customerData state or perform any other action here
    } catch (error) {
      console.error("Error approving Sales Order:", error);
      toast.error("Error approving Sales Order");
    }
  };

  


  const rows = customerData.map((row) => ({
    _id: row._id,
    name: row.customers_name,
    salesRoute: row.sales_Route,
    Plate: row.plate,
    Qp: row.Qp,
    Q_CASH: row.Q_CASH,
    Hp: row.Hp,
    H_CASH: row.H_CASH,
    ONEp: row.ONEp,
    ONE_CASH: row.ONE_CASH,
    TWOp: row.TWOp,
    TWO_CASH: row.TWO_CASH,
    Totalp: row.Totalp,
    Total_CASH: row.Total_CASH,
  }));


  const handleRowClick = (params) => {
    setSelectedRow(params.row);
  };

  const handleCloseModal = () => {
    setSelectedRow(null);
  };

  const handleSave = () => {
    if (selectedRow) {
      handleApprove(selectedRow._id);
    }
  };

 
    return (
      <Box m="20px">
            <Header title="Raw Material Request" subtitle="listed of request Raw Materials" />
        <ToastContainer />
        <Box
        m=" 0 0 0"
        height="100vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            height: "10vh",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: colors.greenAccent[200] + " !important",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: colors.grey[100] + " !important",
          },
        }}
        >
          <DataGrid
            rows={customerData}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            getRowId={getRowId}
            pageSize={10}
            onRowClick={handleRowClick}
          />
        </Box>
        <Modal open={selectedRow !== null} onClose={handleCloseModal}>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",

      borderRadius: "15px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      width: "60%",
      height:"80%",
      fontFamily: "Arial, sans-serif",
      color: "#333",
      overflow: "auto" // Add t
    }}
  >
    {selectedRow && (
      <div>
    
<TableContainer component={Paper}>
<div style={{ textAlign: 'center', padding: '10px' }}>
    <Header
      title="Inventory"
      subtitle="Raw Material Requests"
    />
  </div>
  <Table sx={{}} size="small" aria-label="a dense table">
    <TableHead>
      <TableRow>
        <TableCell>WareHouse</TableCell>
        
          <TableCell>{selectedRow.warehouse}</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell component="th" scope="row">
          Preform_14gm
        </TableCell>
          <TableCell>{selectedRow.Preform_14gm}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Preform_18gm
        </TableCell>
          <TableCell>{selectedRow.Preform_18gm}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Preform_28gm
        </TableCell>
          <TableCell>{selectedRow.Preform_28gm}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Preform_40gm
        </TableCell>
          <TableCell>{selectedRow.Preform_40gm}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Shrink_35gm
        </TableCell>
          <TableCell>{selectedRow.Shrink_35gm}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Shrink_38gm
        </TableCell>
          <TableCell>{selectedRow.Shrink_38gm}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Shrink_42gm
        </TableCell>
          <TableCell>{selectedRow.Shrink_42gm}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Shrink_48gm
        </TableCell>
          <TableCell>{selectedRow.Shrink_48gm}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Shrink_time
        </TableCell>
          <TableCell>{selectedRow.Shrink_time}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Label_035ml
        </TableCell>
          <TableCell>{selectedRow.Label_035ml}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Label_06ml
        </TableCell>
          <TableCell>{selectedRow.Label_06ml}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Label_1L
        </TableCell>
          <TableCell>{selectedRow.Label_1L}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Label_2L
        </TableCell>
          <TableCell>{selectedRow.Label_2L}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Label_time
        </TableCell>
          <TableCell>{selectedRow.Label_time}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Caps
        </TableCell>
          <TableCell>{selectedRow.Caps}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell component="th" scope="row">
          Caps_time
        </TableCell>
          <TableCell>{selectedRow.Caps_time}</TableCell>
      </TableRow>
    
    
      <TableRow  display="column">

  <TableCell>
    <input
      type="text"
      value={Preform_14gm_inventory_deducut}
      onChange={(e) => setPreform_14gm_inventory_deducut(e.target.value)}
      placeholder="Preform 14gm inventory deducut"
      // Add your input field logic here
      style={{
        // Add your styling properties here
        border: '1px solid black',
        padding: '8px',
        borderRadius: '4px',
        width: '100%',
        height: '100%',
      }}
    />
  </TableCell>
  <TableCell>
    <input
      type="text"
      placeholder="Preform 18gm inventory deducut"
      value={Preform_18gm_inventory_deducut}
      onChange={(e) => setPreform_18gm_inventory_deducut(e.target.value)}
      // Add your input field logic here
      style={{
        // Add your styling properties here
        border: '1px solid black',
        padding: '8px',
        borderRadius: '4px',
        width: '100%',
        height: '100%',
      }}
    />
  </TableCell>

</TableRow>

<TableRow  display="column">

  <TableCell>
    <input
      type="text"
      value={Preform_28gm_inventory_deducut}
      onChange={(e) => setPreform_28gm_inventory_deducut(e.target.value)}
      placeholder="Preform 28gm inventory deducut"
      // Add your input field logic here
      style={{
        // Add your styling properties here
        border: '1px solid black',
        padding: '8px',
        borderRadius: '4px',
        width: '100%',
        height: '100%',
      }}
    />
  </TableCell>
  <TableCell>
    <input
      type="text"
      placeholder="Preform 40gm inventory deduct"
      value={Preform_40gm_inventory_deducut}
      onChange={(e) => setPreform_40gm_inventory_deducut(e.target.value)}
      // Add your input field logic here
      style={{
        // Add your styling properties here
        border: '1px solid black',
        padding: '8px',
        borderRadius: '4px',
        width: '100%',
        height: '100%',
      }}
    />
  </TableCell>

</TableRow>


<TableRow  display="column">
  <TableCell>
    <input
      type="text"
      placeholder="Shrink 35gm inventory deduct"
      value={Shrink_35gm_inventory_deducut}
      onChange={(e) => setShrink_35gm_inventory_deducut(e.target.value)}
      // Add your input field logic here
      style={{
        // Add your styling properties here
        border: '1px solid black',
        padding: '8px',
        borderRadius: '4px',
        width: '100%',
        height: '100%',
      }}
    />
  </TableCell>

  <TableCell>
    <input
      type="text"
      value={Shrink_38gm_inventory_deducut}
      onChange={(e) => setShrink_38gm_inventory_deducut(e.target.value)}
      placeholder="Shrink 38gm inventory deduct"
      // Add your input field logic here
      style={{
        // Add your styling properties here
        border: '1px solid black',
        padding: '8px',
        borderRadius: '4px',
        width: '100%',
        height: '100%',
      }}
    />
  </TableCell>
</TableRow>


<TableRow  display="column">
  <TableCell>
    <input
      type="text"
      placeholder="Shrink 42gm inventory deduct"
      value={Shrink_42gm_inventory_deducut}
      onChange={(e) => setShrink_42gm_inventory_deducut(e.target.value)}
      // Add your input field logic here
      style={{
        // Add your styling properties here
        border: '1px solid black',
        padding: '8px',
        borderRadius: '4px',
        width: '100%',
        height: '100%',
      }}
    />
  </TableCell>

  <TableCell>
    <input
      type="text"
      value={Shrink_48gm_inventory_deducut}
      onChange={(e) => setShrink_48gm_inventory_deducut(e.target.value)}
      placeholder="ShrinK 48gm inventory deduct"
      // Add your input field logic here
      style={{
        // Add your styling properties here
        border: '1px solid black',
        padding: '8px',
        borderRadius: '4px',
        width: '100%',
        height: '100%', 
      }}
    />
  </TableCell>
</TableRow>


<TableRow  display="column">
  <TableCell>
    <input
      type="text"
      placeholder="Label 035ml inventory deduct"
      value={Label_035ml_inventory_deducut}
      onChange={(e) => setLabel_035ml_inventory_deducut(e.target.value)}
      // Add your input field logic here
      style={{
        // Add your styling properties here
        border: '1px solid black',
        padding: '8px',
        borderRadius: '4px',
        width: '100%',
        height: '100%',
      }}
    />
  </TableCell>

  <TableCell>
    <input
      type="text"
      value={Label_06ml_inventory_deducut}
      onChange={(e) => setLabel_06ml_inventory_deducut(e.target.value)}
      placeholder="Label 035ml inventory deduct"
      // Add your input field logic here
      style={{
        // Add your styling properties here
        border: '1px solid black',
        padding: '8px',
        borderRadius: '4px',
        width: '100%',
        height: '100%',
      }}
    />
  </TableCell>
</TableRow>



<TableRow  display="column">
  <TableCell>
    <input
      type="text"
      placeholder="Label 1L inventory deduct"
      value={Label_1L_inventory_deducut}
      onChange={(e) => setLabel_1L_inventory_deducut(e.target.value)}
      // Add your input field logic here
      style={{
        // Add your styling properties here
        border: '1px solid black',
        padding: '8px',
        borderRadius: '4px',
        width: '100%',
        height: '100%',
      }}
    />
  </TableCell>

  <TableCell>
    <input
      type="text"
      value={Label_2L_inventory_deducut}
      onChange={(e) => setLabel_2L_inventory_deducut(e.target.value)}
      placeholder="Label 2L inventory deduct"
      // Add your input field logic here
      style={{
        // Add your styling properties here
        border: '1px solid black',
        padding: '8px',
        borderRadius: '4px',
        width: '100%',
        height: '100%',
      }}
    />
  </TableCell>
</TableRow>


<TableRow  display="center">
<TableCell>
  <DatePicker
  label="Deposit Date"
  placeholderText="Deposit Date"

  renderInput={(params) => (
    <TextField
      {...params}
      fullWidth
      margin="normal"
      InputProps={{
        style: {
          color: "black", // Change the font color to black
          paddingTop:"10px"
        },
      }}
      sx={{
        paddingTop:"10px",
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

<TableRow>
  <TableCell align="left">
  
      <Button
        key={selectedRow._id}
        variant="contained"
        color="primary"
        onClick={() => handleReject(selectedRow._id)}
        style={{
          borderRadius: "5px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
          width: "100px",
          height: "40px",
          marginLeft: "10px",
        }}
      >
        Return
      </Button>
  </TableCell>
  <TableCell align="right">
      <Button
        key={selectedRow._id}
        variant="contained"
        color="primary"
        onClick={() => handleApprove(selectedRow._id)}
        style={{
          borderRadius: "5px",
          backgroundColor: "#00BFFF",
          color: "white",
          border: "none",
          cursor: "pointer",
          width: "100px",
          height: "40px",
          marginRight: "10px",
        }}
      >
        Approve
      </Button>
  </TableCell>
</TableRow> 
    </TableBody>    
  </Table>
</TableContainer>

      </div>
    )}
  </Box>
</Modal>
      </Box>
    );
  };
  
  export default InventoryRawAccess;

