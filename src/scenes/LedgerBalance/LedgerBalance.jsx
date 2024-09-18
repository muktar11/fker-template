import React, { useEffect, useState } from "react";
import { Box, Button, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DatePicker from "react-datepicker";
import Header from "../../components/Header";
import CircularProgress from "@mui/material/CircularProgress";
import { LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


const LedgerBalance = () => {
  const theme = useTheme();
  const [customerData, setCustomerData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [loading, setLoading] = useState(true);
  const [ledgerDepositHistory, setLedgerDepositHistory] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [filters, setFilters] = useState({
    customers_name: "",
    Bank_Name: "",
    Deposit_Amount: "",
    Deposit_Date_Start: "",
    Deposit_Date_End: "",
    Balance: ""
  });

  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + "/commerce/ledger-deposit-view/");
      const data = await response.json();
      setCustomerData(data);
      setLoading(false);
      if (data && data.length > 0) {
        const selectCustomer = data[0].customer_id;
        setSelectedCustomer(selectCustomer);
        fetchLedgerDepositHistory(selectCustomer);
      }
    } catch (error) {
      console.error("Error fetching customer data:", error);
      setLoading(false);
    }
  };

  const fetchLedgerDepositHistory = async (selectCustomer) => {
    setLoadingHistory(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/commerce/ledger-deposit-history-view/${selectCustomer}/`);
      const data = await response.json();
      setLedgerDepositHistory(data);
      setLoadingHistory(false);
    } catch (error) {
      console.error("Error fetching ledger deposit history:", error);
      setLoadingHistory(false);
    }
  };

  const fetchDataWithFilters = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams(filters);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/commerce/ledger-deposits/filter/?${queryParams.toString()}`);
      const data = await response.json();
      setCustomerData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching customer data:", error);
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleApplyFilters = () => {
    fetchDataWithFilters();
  };

  const handleGetAll = () => {
    setFilters({
      customers_name: "",
      Bank_Name: "",
      Deposit_Amount: "",
      Deposit_Date_Start: "",
      Deposit_Date_End: "",
      Balance: ""
    });
    fetchData();
  };

  const columns = [
    { field: "_id", headerName: "ID", flex: 0.5 },
    { field: "customers_name", headerName: "Customers Name", flex: 1 },
    { field: "Bank_Name", headerName: "Bank Name", flex: 1 },
    { field: "Bank_Reference_Number", headerName: "Bank Reference Number", flex: 1 },
    { field: "Branch_Name", headerName: "Branch Name", flex: 1 },
    { field: "Narrative", headerName: "Narrative", flex: 1 },
    { field: "Deposit_Date", headerName: "Deposit Date", flex: 1 },
    { field: "Deposit_Amount", headerName: "Deposit Amount", flex: 1 },
    { field: "previous_balance", headerName: "Previous Balance", flex: 1 },
    { field: "Balance", headerName: "Balance", flex: 1 },
  ];

  const getRowId = (row) => row._id;

  const rows = customerData.map((row) => ({
    _id: row._id,
    customers_name: row.customers_name,
    Bank_Name: row.Bank_Name,
    Bank_Reference_Number: row.Bank_Reference_Number,
    Branch_Name: row.Branch_Name,
    Narrative: row.Narrative,
    Deposit_Date: row.Deposit_Date,
    previous_balance: row.previous_balance,
    Balance: row.Balance,
  }));

  const handleRowClick = (params) => {
    setSelectedRow(params.row);
    fetchLedgerDepositHistory(params.row.customer_id);
  };

  const handleCloseModal = () => {
    setSelectedRow(null);
  };

  return (
    <Box m="20px">
      <Header title="Finance Ledger" subtitle="Finance ledger deposit" />
      <ToastContainer />
      <Box mb={2}>
        <TextField
          label="Customer's Name"
          variant="outlined"
          name="customers_name"
          value={filters.customers_name}
          onChange={handleFilterChange}
        />
        <TextField
          label="Bank Name"
          variant="outlined"
          name="Bank_Name"
          value={filters.Bank_Name}
          onChange={handleFilterChange}
        />
      
        <TextField
          label="Deposit Date Start"
          type="date"
          variant="outlined"
          name="Deposit_Date_Start"
          value={filters.Deposit_Date_Start}
          onChange={handleFilterChange}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Deposit Date End"
          type="date"
          variant="outlined"
          name="Deposit_Date_End"
          value={filters.Deposit_Date_End}
          onChange={handleFilterChange}
          InputLabelProps={{ shrink: true }}
        />
       
        <Button variant="contained" color="primary" onClick={handleApplyFilters} style={{ marginLeft: '10px' }}>
          Apply Filters
        </Button>
       

         <Button variant="contained" color="secondary" onClick={handleGetAll} style={{ marginLeft: '10px' }}>
          Clear
        </Button>
      </Box>
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
              {loading ? (
          // Show loading animation if loading is true
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <DataGrid
            rows={customerData}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
            getRowId={getRowId}
            pageSize={10}
            onRowClick={handleRowClick}
           
          />
          )}
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
      width: "70%",
      height:"80%",
      fontFamily: "Arial, sans-serif",
      color: "#333",
      overflow: "auto" // Add t
    }}
  >
    {selectedRow && (
      <div>
  <TableContainer component={Paper}>
  <Header
      title="Customer Ledger History"
      subtitle=" Customers Transaction and Deposit"
    />
  <Table sx={{}} size="small" aria-label="a dense table">

    <TableHead>
    
        
        {ledgerDepositHistory.map((item) => (
          <React.Fragment key={item._id}>
            {item.ledger ? (
              <TableRow>
                 <Header
      title="Ledger Deposit"
    />
            
               <TableRow>
               <TableCell>Bank_Name</TableCell>
               <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
           
                
                <TableCell>{item.ledger.Bank_Name}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
               </TableRow>
              
                <TableRow>
                <TableCell>Branch_Name</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
           
                
                <TableCell>{item.ledger.Branch_Name}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                </TableRow>
               
                <TableRow>
                <TableCell>Narrative</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
            
                
                <TableCell>{item.ledger.Narrative}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                </TableRow>
               
               
                <TableRow>
                <TableCell>Bank_Reference_Number</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
 
                <TableCell>{item.ledger.Bank_Reference_Number}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                </TableRow>

                 <TableRow>
                <TableCell>Deposit_Amount</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
            
                
                <TableCell>{item.ledger.Deposit_Amount}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                </TableRow>
                
                

                  <TableRow>
                <TableCell>Previous Balance</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
            
                
                <TableCell>{item.ledger.previous_balance}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                </TableRow>


                   <TableRow>
                <TableCell>Balance</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>

                
                
                <TableCell>{item.ledger.Balance}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                

                
                </TableRow>
                
                <TableRow>
                <TableCell>Bank_Reference_Number</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
 
                <TableCell>{item.ledger.Bank_Reference_Number}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                </TableRow>
               
                <TableRow>
                <TableCell>Deposit_Date</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
              
                
                <TableCell>{item.ledger.Deposit_Date}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                </TableRow>


                <TableRow>
                <TableCell>Created At</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
              
                
                <TableCell>{item.ledger.created_at}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
                <TableCell>{item.ledger.CSI_CSRI_Numb}</TableCell>
              
                </TableRow>
               
             
               
              </TableRow>
            ) : (
              <TableRow>
                 <TableRow>
  <Header title="SalesOrder" />
</TableRow>
<TableRow>
  <TableCell>Customer Name</TableCell>
  

  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>


  <TableCell>{item.sales.customers_name}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>

</TableRow>
<TableRow>
  <TableCell>Sales Route</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.sales_Route}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>


</TableRow>
<TableRow>
  <TableCell>Route</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.Route}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  

</TableRow>
<TableRow>
  <TableCell>Ledger Balance</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.LedgerBalance}</TableCell>
 

</TableRow>
<TableRow>
  <TableCell>0.35ml</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.Qp}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
 

</TableRow>
<TableRow>
  <TableCell>0.6ml</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.Hp}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
 
</TableRow>
<TableRow>
  <TableCell>1L</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.ONEp}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>


</TableRow>
<TableRow>
  <TableCell>2L</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.TWOp}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>



</TableRow>
<TableRow>
  <TableCell>Total Qty</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.Totalp}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>


</TableRow>
<TableRow>
  <TableCell>0.35ml Unit Price</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.Q_Unit}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>


</TableRow>
<TableRow>
  <TableCell>0.6ml Unit Price</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.H_Unit}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>

</TableRow>
<TableRow>
  <TableCell>1L Unit Price</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.ONE_Unit}</TableCell>

  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
</TableRow>
<TableRow>
  <TableCell>2L Unit Price</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.TWO_Unit}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>

</TableRow>

<TableRow>
  <TableCell>0.35ml Value </TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.Q_CASH}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>

</TableRow>
<TableRow>
  <TableCell>0.6ml Value</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.H_CASH}</TableCell>

  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
</TableRow>
<TableRow>
  <TableCell>1L Value</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.ONE_CASH}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>

</TableRow>
<TableRow>
  <TableCell>2L Value</TableCell> <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.TWO_CASH}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>

</TableRow>
<TableRow>
  <TableCell>Total Value</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.Total_CASH}</TableCell>

  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
</TableRow>
<TableRow>
  <TableCell>Plate</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.PLATE}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>

</TableRow>
<TableRow>
  <TableCell>CSI/CRSI Number</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.CSI_CRSI_Number}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>

</TableRow>
<TableRow>
  <TableCell>TIN Numbers</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.tin_numbers}</TableCell>
  
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
</TableRow>
<TableRow>
  <TableCell>Reg Numbers</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.reg_numbers}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>

</TableRow>
<TableRow>
  <TableCell>Inventory</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.Inventory}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>

</TableRow>
<TableRow>
  <TableCell>Driver</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.Driver}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
</TableRow>
<TableRow>
  <TableCell>Is Loaded</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.is_loaded ? 'Yes' : 'No'}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
</TableRow>
<TableRow>
  <TableCell>Inventory Check</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.inventory_check ? 'Yes' : 'No'}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
</TableRow>
<TableRow>
  <TableCell>Inventory Recipient</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>

  <TableCell>{item.sales.inventory_recipant}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
</TableRow>
<TableRow>
  <TableCell>Created At</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.created_at}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
</TableRow>
<TableRow>
  <TableCell>SDM Created At</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>

  <TableCell>{item.sales.sdmcreated_at}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
</TableRow>
<TableRow>
  <TableCell>SDM Created By</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.sdmcreated_first_name} {item.sdmcreated_last_name}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
</TableRow>
<TableRow>
  <TableCell>Finance Created At</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.financecreated_at}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
</TableRow>
<TableRow>
  <TableCell>Finance Created By</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>

  <TableCell>{item.financecreated_first_name} {item.financecreated_first_name}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
</TableRow>
<TableRow>
  <TableCell>Logistic Manager Created At</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>

  <TableCell>{item.sales.logisitcmanagercreated_at}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
</TableRow>
<TableRow>
  <TableCell>Logistic Manager Created By</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>

  <TableCell>{item.sales.logisitcmanagercreated_first_name} {item.sales.logisitcmanagercreated_last_name}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
</TableRow>
<TableRow>
  <TableCell>Inventory Created At</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
 

  <TableCell>{item.sales.inventorycreated_at}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  

</TableRow>
<TableRow>
  <TableCell>Inventory Created By</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>

  <TableCell>{item.sales.inventorycreated_first_name} {item.sales.inventorycreated_last_name}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
  <TableCell>{item.sales.customers_nae}</TableCell>
</TableRow>
               
              </TableRow>
            )}
          </React.Fragment>
        ))}
     
    </TableHead>
  </Table>
</TableContainer>
      </div>
    )}
  </Box>
</Modal>
      </Box>
    );
  };
  
export default LedgerBalance;
