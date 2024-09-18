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


const FinanceLedger = () => {
  const theme = useTheme();
  const [customerData, setCustomerData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const [loading, setLoading] = useState(true);
  const [ledgerDepositHistory, setLedgerDepositHistory] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(false);
  const [filters, setFilters] = useState({
    transaction_id: "",
    transaction_ref: "",
    transaction_type: "",
    start_date: "",
    end_date: "",
  });

  const colors = tokens(theme.palette.mode);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(process.env.REACT_APP_API_URL + "/commerce/combined-transactions/");
      const data = await response.json();
      setCustomerData(data);
      setLoading(false);
 
    } catch (error) {
      console.error("Error fetching customer data:", error);
      setLoading(false);
    }
  };

  const fetchDataWithFilters = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams(filters);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/commerce/combined-transactions/filter/?${queryParams.toString()}`);
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
      transaction_id: "",
      transaction_ref: "",
      transaction_type: "",
      start_date: "",
      end_date: "",
    });
    fetchData();
  };

  const columns = [
    { field: "transaction_id", headerName: "Transaction id", flex: 0.5 },
    { field: "transaction_ref", headerName: "Transaction Ref", flex: 1 },
    { field: "transaction_date", headerName: "Transaction Date", flex: 1 },
    { field: "transaction_amount", headerName: "Transaction Amount", flex: 1 },
    { field: "balance", headerName: "Balance", flex: 1 },
    { field: "transaction_type", headerName: "Transaction Type", flex: 1 },
    
  ];

  const getRowId = (row) => row.transaction_id;

  const rows = customerData.map((row) => ({
    transaction_id: row.transaction_id,
    transaction_ref: row.transaction_ref,
    trasaction_date: row.transaction_date,
    transaction_amount: row.transaction_amount,
    balance: row.balance,
    transaction_type: row.transaction_type,
  }));




  return (
    <Box m="20px">
      <Header title="Finance Ledger" subtitle="Finance ledger deposit" />
      <ToastContainer />
      <Box mb={2}>
        <TextField
          label="Transaction Id"
          variant="outlined"
          name="transaction_id"
          value={filters.transaction_id}
          onChange={handleFilterChange}
        />
        <TextField
          label="Transaction Ref"
          variant="outlined"
          name="transaction_ref"
          value={filters.transaction_ref}
          onChange={handleFilterChange}
        />
        <TextField
          label="Transaction Type"
          variant="outlined"
          name="transaction_type"
          value={filters.transaction_type}
          onChange={handleFilterChange}
        />
        <TextField
          label="Start Date"
          type="date"
          variant="outlined"
          name="Start_Date"
          value={filters.start_date}
          onChange={handleFilterChange}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="End_Date"
          type="date"
          variant="outlined"
          name="End_Date"
          value={filters.end_date}
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
           
          
          />
          )}
        </Box>
      </Box>
    );
  };
  
export default FinanceLedger;