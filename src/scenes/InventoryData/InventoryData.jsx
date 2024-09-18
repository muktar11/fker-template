import React, { useEffect, useState } from "react";
import { Box, Button, Modal, TextField } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import DatePicker from "react-datepicker";
import useMediaQuery from "@mui/material/useMediaQuery";
import {  MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const InventoryData = () => {
  const theme = useTheme();
  const [customerData, setCustomerData] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null);
  const [loading, setLoading] = useState(true);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const colors = tokens(theme.palette.mode);
  const [filters, setFilters] = useState({
    issue_store: "",
    recipat_store: "",
    is_Preform: "",
    is_Shrink: "",
    is_Label: "",
    is_Caps: "",
    is_FG_Standardized: "",
    is_FG_Damaged_Total: "",
    start_date: "",
    end_date: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/commerce/raw-material-data/`);
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
     queryParams.set('is_Preform', filters.is_Preform);
    queryParams.set('is_Shrink', filters.is_Shrink);
    queryParams.set('is_Label', filters.is_Label);
    queryParams.set('is_Caps', filters.is_Caps);
    queryParams.set('is_FG_Standardized', filters.is_FG_Standardized);
    queryParams.set('is_FG_Damaged_Total', filters.is_FG_Damaged_Total)
      const response = await fetch(`${process.env.REACT_APP_API_URL}/commerce/raw-material-requests-filter/?${queryParams.toString()}`);
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
      [name]: value,
    }));
  };

  const handleApplyFilters = () => {
    fetchDataWithFilters();
  };

  const handleGetAll = () => {
    setFilters({
      issue_store: "",
      recipat_store: "",
      is_Preform: "",
      is_Shrink: "",
      is_Label: "",
      is_Caps: "",
      is_FG_Standardized: "",
      is_FG_Damaged_Total: "",
      start_date: "",
      end_date: "",
    });
    fetchData();
  };

  const columns = [
    { field: "_id", headerName: "ID", flex: 0.5 },
    { field: "issue_store", headerName: "Issue Store", flex: 10 },
    { field: "recipant_store", headerName: "Recipient Store", flex: 10 },
    { field: "FG_Standardized_035ml", headerName: "FG Standardized 0.35ml", flex: 10 },
    { field: "FG_Standardized_06ml", headerName: "FG Standardized 0.6ml", flex: 10 },
    { field: "FG_Standardized_1L", headerName: "FG Standardized 1L", flex: 10 },
    { field: "FG_Standardized_2l", headerName: "FG Standardized 2L", flex: 10 },
    { field: "FG_Standardized_Total", headerName: "FG Standardized Total", flex: 10 },
    { field: "FG_Damaged_035ml", headerName: "FG Damaged 0.35ml", flex: 10 },
    { field: "FG_Damaged_06ml", headerName: "FG Damaged 0.6ml", flex: 10 },
    { field: "FG_Damaged_1L", headerName: "FG Damaged 1L", flex: 10 },
    { field: "FG_Damaged_2l", headerName: "FG Damaged 2L", flex: 10 },
    { field: "FG_Damaged_Total", headerName: "FG Damaged Total", flex: 10 },

    { field: "Preform_14gm", headerName: "Preform 14gm", flex: 1 },
    { field: "Preform_18gm", headerName: "Preform 18gm", flex: 1 },
    { field: "Preform_28gm", headerName: "Preform 28gm", flex: 1 },
    { field: "Preform_40gm", headerName: "Preform 40gm", flex: 1 },
    { field: "Shrink_35gm", headerName: "Shrink 35gm", flex: 1 },
    { field: "Shrink_38gm", headerName: "Shrink 38gm", flex: 1 },
    { field: "Shrink_42gm", headerName: "Shrink 42gm", flex: 1 },
    { field: "Shrink_48gm", headerName: "Shrink 48gm", flex: 1 },
    { field: "Label_035ml", headerName: "Label 0.35ml", flex: 1 },
    { field: "Label_06ml", headerName: "Label 0.6ml", flex: 1 },
    { field: "Label_1Lgm", headerName: "Label 1L", flex: 1 },
    { field: "Label_2L", headerName: "Label 2L", flex: 1 },
    { field: "Caps", headerName: "Caps", flex: 1 },
    { field: "time", headerName: "Time", flex: 1 },
   
  ];

  const getRowId = (row) => row._id;

  const handleRowClick = (params) => {
    setSelectedRow(params.row);
  };

  const noPending = selectedRow?.inventory_return_forms?.[0]?.no_pending || 0;
  const repetitionArray = Array.from({ length: parseInt(noPending) }, (_, i) => i);

  const deduction = selectedRow?.inventory_return_forms?.[0]?.deductions[0];

  return (
    <Box m="20px">
      <ToastContainer />
      <Header
        title="Stock Transaction"
        subtitle="List of orders"
      />
      <Box mb={2}>
        <TextField
          label="Issue Store"
          variant="outlined"
          name="issue_store"
          value={filters.issue_store}
          onChange={handleFilterChange}
          sx={{ marginTop: "10px", marginBottom: '10px', marginRight: '10px', border: '2px solid', borderColor: 'white' }}
        />
        <TextField
          label="Recipient Store"
          variant="outlined"
          name="recipat_store"
          value={filters.recipat_store}
          onChange={handleFilterChange}
          sx={{ marginTop: "10px", marginBottom: '10px', marginRight: '10px', border: '2px solid', borderColor: 'white' }}
        />
        <FormControl sx={{ marginTop: "10px", marginBottom: '10px', marginRight: '10px' }}>
          <InputLabel id="is_Preform-label">Preform</InputLabel>
          <Select
            labelId="is_Preform-label"
            name="is_Preform"
            value={filters.is_Preform}
            onChange={handleFilterChange}
            variant="outlined"
            sx={{ border: '2px solid', width:"155px", borderColor: 'white' }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="true">True</MenuItem>
            <MenuItem value="false">False</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginTop: "10px", marginBottom: '10px', marginRight: '10px' }}>
          <InputLabel id="is_Shrink-label">Shrink</InputLabel>
          <Select
            labelId="is_Shrink-label"
            name="is_Shrink"
            value={filters.is_Shrink}
            onChange={handleFilterChange}
            variant="outlined"
             sx={{ border: '2px solid', width:"155px", borderColor: 'white' }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="true">True</MenuItem>
            <MenuItem value="false">False</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginTop: "10px", marginBottom: '10px', marginRight: '10px' }}>
          <InputLabel id="is_Label-label">Label</InputLabel>
          <Select
            labelId="is_Label-label"
            name="is_Label"
            value={filters.is_Label}
            onChange={handleFilterChange}
            variant="outlined"
             sx={{ border: '2px solid', width:"155px", borderColor: 'white' }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="true">True</MenuItem>
            <MenuItem value="false">False</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginTop: "10px", marginBottom: '10px', marginRight: '10px' }}>
          <InputLabel id="is_Caps-label">Caps</InputLabel>
          <Select
            labelId="is_Caps-label"
            name="is_Caps"
            value={filters.is_Caps}
            onChange={handleFilterChange}
            variant="outlined"
             sx={{ border: '2px solid', width:"155px", borderColor: 'white' }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="true">True</MenuItem>
            <MenuItem value="false">False</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginTop: "10px", marginBottom: '10px', marginRight: '10px' }}>
          <InputLabel id="is_FG_Standardized-label">FG Standardized</InputLabel>
          <Select
            labelId="is_FG_Standardized-label"
            name="is_FG_Standardized"
            value={filters.is_FG_Standardized}
            onChange={handleFilterChange}
            variant="outlined"
            sx={{ border: '2px solid', width:"155px", borderColor: 'white' }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="true">True</MenuItem>
            <MenuItem value="false">False</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginTop: "10px", marginBottom: '10px', marginRight: '10px' }}>
          <InputLabel id="is_FG_Damaged_Total-label">FG Damaged Total</InputLabel>
          <Select
            labelId="is_FG_Damaged_Total-label"
            name="is_FG_Damaged_Total"
            value={filters.is_FG_Damaged_Total}
            onChange={handleFilterChange}
            variant="outlined"
             sx={{ border: '2px solid', width:"155px", borderColor: 'white' }}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="true">True</MenuItem>
            <MenuItem value="false">False</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Start Date"
          type="date"
          variant="outlined"
          name="start_date"
          value={filters.start_date}
          onChange={handleFilterChange}
          InputLabelProps={{ shrink: true }}
          sx={{ marginTop: "10px", marginBottom: '10px', marginRight: '10px', border: '2px solid', borderColor: 'white' }}
        />
        <TextField
          label="End Date"
          type="date"
          variant="outlined"
          name="end_date"
          value={filters.end_date}
          onChange={handleFilterChange}
          InputLabelProps={{ shrink: true }}
          sx={{ marginTop: "10px", marginBottom: '10px', marginRight: '10px', border: '2px solid', borderColor: 'white' }}
        />
         <Button variant="contained" color="secondary" onClick={handleApplyFilters} style={{ marginTop: '20px', marginLeft: "10px" }}>
          Apply Filters
        </Button>
        <Button variant="contained" color="secondary" onClick={handleGetAll} style={{ marginLeft: "10px" }}>
          Clear
        </Button>
      </Box>
      <Box
        m="0 0 0"
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
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={customerData}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={getRowId}
          pagination
          pageSize={10}
          onPageChange={(newPage) => setPage(newPage + 1)}
          onRowClick={handleRowClick}
        />
      </Box>
    </Box>
  );
};

export default InventoryData;