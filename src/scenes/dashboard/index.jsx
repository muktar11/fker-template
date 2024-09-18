import { Box, Button, TextField, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import React, { useEffect, useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BusAlertIcon from '@mui/icons-material/BusAlert';
import FlagIcon from '@mui/icons-material/Flag';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../data/mockData";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import ChartJSS from "../../chart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [customerData, setCustomerData] = useState([]);
  const [customersData, setCustomersData] = useState([]);
  const [customerssData, setCustomerssData] = useState([]);
  const [customersssData, setCustomersssData] = useState([]);
  const [customerssssData, setCustomerssssData] = useState([])
  const [customerssaleData, setCustomerssaleData] = useState([])
  const [customersssaleData, setCustomersssaleData] = useState([])
  const [customerinfodata, setCustomerInfoData] = useState([])
  const [selectedRow, setSelectedRow] = useState(null);
  const [loading, setLoading] = useState(true); // State for showing/hiding the loading animation
  const [page, setPage] = useState(1);
  const [fetchedData, setFetchedData] = useState({});
  const [showBox, setShowBox] = useState(false);
  const [start_time, setStartTime] = useState(null);
  const [end_time, setEndTime] = useState(null);
  
  
  const handleButtonClick = () => {
    setShowBox(!showBox); // Toggle the state to show/hide the Box
  };

   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + "/commerce/sales-order-by-sales-info/");
        const data = await response.json();
        setCustomerData(data); // Map the fetched data to an object
        setLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error("Error fetching customer data:", error);
        setLoading(false); // Set loading state to false if there's an error
      }
    };
  
    fetchData();
  }, [page]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL+"/commerce/sales-order-recent-transaction");
        const datas = await response.json();
        setCustomersData(datas); // Map the fetched data to an object
        setLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error("Error fetching customer data:", error);
        setLoading(false); // Set loading state to false if there's an error
      }
    };
  
    fetchData();
  }, [page]);


  const formatDateString = (date) => {
    return dayjs(date).format('YYYY-MM-DDTHH:mm:ss.SSSSSSZ');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL+"/commerce/add_total_cash/");
        const datas = await response.json();
        setCustomersssData(datas); // Map the fetched data to an object
        setLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error("Error fetching customer data:", error);
        setLoading(false); // Set loading state to false if there's an error
      }
    };
  
    fetchData();
  }, [page]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL+"/commerce/sales-order-by-sales-info-Dashboard/");
        const data = await response.json();
        setCustomerssssData(data); // Map the fetched data to an object
        setLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error("Error fetching customer data:", error);
        setLoading(false); // Set loading state to false if there's an error
      }
    };
  
    fetchData();
  }, [page]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL+"/commerce/sales-order-monthly-sales-target");
        const data = await response.json();
        setCustomerInfoData(data); // Map the fetched data to an object
        setLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error("Error fetching customer data:", error);
        setLoading(false); // Set loading state to false if there's an error
      }
    };
  
    fetchData();
  }, [page]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL+"/commerce/sales-order-monthly-customer");
        const data = await response.json();
        setCustomerssaleData(data); // Map the fetched data to an object
        setLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error("Error fetching customer data:", error);
        setLoading(false); // Set loading state to false if there's an error
      }
    };
  
    fetchData();
  }, [page]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + "/commerce/sales-order-monthly-sales-target");
        const data = await response.json();
        setCustomerInfoData(data); // Set fetched data in state (using correct state variable)
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };
  
    fetchData();
  }, []); // Remove 'page' from dependencies if 'page' is not used inside this useEffect


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL+"/commerce/sales-order-by-sales-item-info/");
        const data = await response.json();
        setCustomerssData(data); // Map the fetched data to an object
        setLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error("Error fetching customer data:", error);
        setLoading(false); // Set loading state to false if there's an error
      }
    };
  
    fetchData();
  }, [page]);

 // This check will execute when both start_time and end_time are Date objects and their getTime() values are valid numbers


  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_API_URL}/commerce/sales-order-by-sales-item-info/${start_time}/${end_time}/`);
      const data = await response.json();
      setCustomerssData(data);
   
  
      const response2 = await fetch(`${process.env.REACT_APP_API_URL}/commerce/sales-order-monthly-customer/${start_time}/${end_time}/`);
      const data2 = await response2.json();
      setCustomerssaleData(data2); // Map the fetched data to an object


      const response3 = await fetch(`${process.env.REACT_APP_API_URL}+/commerce/sales-order-monthly-salesPerson/${start_time}/${end_time}/`);
      const data3 = await response3.json();
      setCustomersssaleData(data3); // Map the fetched data to an object
      setLoading(false); // Set loading state to false after data is fetched
    } catch (error) {
      console.error("Error fetching customer data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [end_time]); 
  
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL+"/commerce/sales-order-monthly-salesPerson");
        const data = await response.json();
        setCustomersssaleData(data); // Map the fetched data to an object
        setLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error("Error fetching customer data:", error);
        setLoading(false); // Set loading state to false if there's an error
      }
    };
  
    fetchData();
  }, [page]);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + "/commerce/sales-order-monthly-sales-target");
        const data = await response.json();
        setFetchedData(data); // Set fetched data in state
        // setLoading(false); // Set loading state to false after data is fetched (if needed)
      } catch (error) {
        console.error("Error fetching customer data:", error);
        // setLoading(false); // Set loading state to false if there's an error (if needed)
      }
    };
  
    fetchData();
  }, [page]);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "start_time", headerName: "Starting Date", flex: 1},
    { field: "end_time", headerName: "Ending Date", flex: 1},
    { field: "name", headerName: "Name", flex: 1},
    { field: "035mlQty", headerName: "035ml Qty", flex: 0.5 },
    { field: "035mlCash", headerName: "035ml Cash", flex: 0.5 },
    { field: "06mlQty", headerName: "06ml Qty", flex: 0.5 },
    { field: "06mlCash", headerName: "06ml Cash", flex: 0.5 },
    { field: "1LQty", headerName: "1L Qty", flex: 0.5 },
    { field: "1LCash", headerName: "1L Cash", flex: 0.5 },
    { field: "2LQty", headerName: "2L Qty", flex: 0.5 },
    { field: "2LCash", headerName: "2L Cash", flex: 0.5 },
    { field: "TotalQty", headerName: "TotalQty", flex: 0.5 },
    { field: "TotalCash", headerName: "TotalCash", flex: 0.5 },
    

   
  ];


  
  const columns2 = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 1},
    { field: "total_start_time", headerName: "Starting Date", flex: 0.5 },
    { field: "total_end_time", headerName: "Ending Date", flex: 0.5 },
    { field: "total_qp", headerName: "035ml Qty", flex: 0.5 },
    { field: "total_q_cash", headerName: "035ml Cash", flex: 0.5 },
    { field: "total_hp", headerName: "06ml Qty", flex: 0.5 },
    { field: "total_h_cash", headerName: "06ml Cash", flex: 0.5 },
    { field: "total_onep", headerName: "1L Qty", flex: 0.5 },
    { field: "total_one_cash", headerName: "1L Cash", flex: 0.5 },
    { field: "total_twop", headerName: "2L Qty", flex: 0.5 },
    { field: "total_two_cash", headerName: "2L Cash", flex: 0.5 },
    { field: "total_total_p", headerName: "TotalQty", flex: 0.5 },
    { field: "total_grand_total_cash", headerName: "TotalCash", flex: 0.5 },

    
    
    
   
  ];


  
  
  const columns3 = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "SalesPerson", flex: 1},
    { field: "total_start_time", headerName: "Starting Date", flex: 0.5 },
    { field: "total_end_time", headerName: "Ending Date", flex: 0.5 },
    { field: "total_qp", headerName: "035ml Qty", flex: 0.5 },
    { field: "total_q_cash", headerName: "035ml Cash", flex: 0.5 },
    { field: "total_hp", headerName: "06ml Qty", flex: 0.5 },
    { field: "total_h_cash", headerName: "06ml Cash", flex: 0.5 },
    { field: "total_onep", headerName: "1L Qty", flex: 0.5 },
    { field: "total_one_cash", headerName: "1L Cash", flex: 0.5 },
    { field: "total_twop", headerName: "2L Qty", flex: 0.5 },
    { field: "total_two_cash", headerName: "2L Cash", flex: 0.5 },
    { field: "total_total_p", headerName: "TotalQty", flex: 0.5 },
    { field: "total_total_cash", headerName: "TotalCash", flex: 0.5 },
    
    
    
   
  ];
  

  const columns4 = [
    { field: 'area', headerName: 'Area', flex: 1 },
    { field: 'sales_target_web', headerName: 'Sales Target (Customer)', flex: 1 },
    { field: 'total_sales_web', headerName: 'Total Sales (Customer)',flex: 1 },
    { field: 'percentage_completion_web', headerName: 'Percentage Completion (Customer)', flex: 1 },
    { field: 'sales_target_salesperson', headerName: 'Sales Target (SalesPerson)',flex: 1 },
    { field: 'total_sales_salesperson', headerName: 'Total Sales (SalesPerson)', flex: 1 },
    { field: 'percentage_completion_salesperson', headerName: 'Percentage Completion (SalesPerson)', flex: 1 },
  ];

  const rows = [
    ...Object.entries(customerinfodata.aggregated_data_by_route || {}).map(([area, data]) => ({
      id: area,
      area,
      sales_target_web: data.WebCustomer?.sales_target || 0,
      total_sales_web: data.WebCustomer?.total_sales || 0,
      percentage_completion_web: data.WebCustomer?.percentage_completion || '0%',
      sales_target_salesperson: data.SalesPerson?.sales_target || 0,
      total_sales_salesperson: data.SalesPerson?.total_sales || 0,
      percentage_completion_salesperson: data.SalesPerson?.percentage_completion || '0%',
    })),
    {
      id: 'aggregated_data_all_instances',
      area: 'All Instances',
      sales_target_web: customerinfodata.aggregated_data_all_instances?.WebCustomer?.sales_target || 0,
      total_sales_web: customerinfodata.aggregated_data_all_instances?.WebCustomer?.total_sales || 0,
      percentage_completion_web: customerinfodata.aggregated_data_all_instances?.WebCustomer?.percentage_completion || '0%',
      sales_target_salesperson: customerinfodata.aggregated_data_all_instances?.SalesPerson?.sales_target || 0,
      total_sales_salesperson: customerinfodata.aggregated_data_all_instances?.SalesPerson?.total_sales || 0,
      percentage_completion_salesperson: customerinfodata.aggregated_data_all_instances?.SalesPerson?.percentage_completion || '0%',
    },
  ];
  
  

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard monthly Sales Report" />
    {/* 
       <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
    */}
       
      </Box>




      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
        
            title={customerData.aad_sales_order_total_cash}
            subtitle="AADS$"
            progress="0.75"
            increase={customerData.aad_sales_order_total_cash_percentage}
            icon={
              <BusAlertIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={customerData.aags_sales_order_total_cash}
            subtitle=" AA Agent Sales$"
            progress="0.50"
            increase={customerData.aags_sales_order_total_rate}
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
                 title={customerData.upc_sales_order_total_cash}
            subtitle="UPC$"
            progress="0.30"
            increase={customerData.upc_sales_order_rate}
            icon={
              <FlagIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={customerData.sales_order_total_sum} 
            subtitle="Grand Total$"
            progress="1"
            increase="100%"
            
            icon={
              <ShoppingCartIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>




        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
        
            title={customerssssData.aad_sales_order_total_qty}
            subtitle="AADS Qty Share"
            progress="0.75"
            increase={customerssssData.aad_sales_order_total_qty_percentage}
            
            icon={
              <BusAlertIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }

            
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={customerssssData.sales_order_total_qty}
            subtitle= "Agent Sales Qty Share"
            progress="0.50"
            increase={customerssssData.sales_order_total_qty_percentage}
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={customerssssData.upc_sales_order_total_qty}
            subtitle=" UPC Qty Share"
            progress="0.30"
            increase={customerssssData.upc_sales_order_rate}
            icon={
              <FlagIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={customerssssData.sales_order_total_sum}
            subtitle="Total Qty Share"
            progress="100"
            increase="100%"
            icon={
              <ShoppingCartIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

     
        

        {/* ROW 2 */}
        { /*
        <Box
          gridColumn="span 12"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}> Total Sales in ETB </Typography>
              <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>${customersssData.total_cash_sum}</Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon       sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="350px" m="-20px 0 0 0">
          <ChartJSS />
          </Box>
        </Box>
     */}
      </Box>

{/*
  <Box m="10px">
     
      <Button variant="contained" onClick={handleButtonClick}>
        SELECT DATE
      </Button>
      {showBox && (
        <Box height="40vh" display="flex" justifyContent="space-between">
          <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DateCalendar
    onChange={(date) => {
      console.log('Start Date:', formatDateString(date));
      
      setStartTime(formatDateString(date));
    }}
    renderInput={(props) => (
      <TextField {...props} variant="standard" placeholder="Start Date" />
    )}
    format="'YYYY-MM-DDTHH:mm:ss.SSSSSSZ/YYYY-MM-DDTHH:mm:ss.SSSSSSZ'" // Adjust this according to your desired format
  />
</LocalizationProvider>
          </Box>




          <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar onChange={(date) => {
            console.log('End Date:', formatDateString(date));
            setEndTime(formatDateString(date));
          }} 
          renderInput={(props) => (
            <TextField {...props} variant="standard" placeholder="Start Date" />
          )}
          format="'YYYY-MM-DDTHH:mm:ss.SSSSSSZ/YYYY-MM-DDTHH:mm:ss.SSSSSSZ'" // Adjust this according to your desired format
        />
        
            </LocalizationProvider>
          </Box>
        </Box>
      )}



      </Box>

      */}


{/* 
<Box m="20px">
      <Header
        subtitle=""
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
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
     rows={customerssData?.data?.map((item) => ({
    id: item.id,
    name: item.name,
    "start_time": item.value?.["start_time"] || 0,
    "end_time": item.value?.["end_time"] || 0,
    "035mlQty": item.value?.["035mlQty"] || 0,
    "035mlCash": item.value?.["035mlCash"] || 0,
    "06mlQty": item.value?.["06mlQty"] || 0,
    "06mlCash": item.value?.["06mlCash"] || 0,
    "1LQty": item.value?.["1LQty"] || 0,
    "1LCash": item.value?.["1LCash"] || 0,
    "2LQty": item.value?.["2LQty"] || 0,
    "2LCash": item.value?.["2LCash"] || 0,
    "TotalQty": item.value?.["TotalQty"] || 0,
    "TotalCash": item.value?.["TotalCash"] || 0,
    "Total": item.value?.["Total"] || 0,

    // Add more fields as needed following the same pattern
  })) || []} // Provide a default empty array if customerssData or data is undefined
  columns={columns}
  components={{ Toolbar: GridToolbar}}
/>
      </Box>


      </Box>
      
      
      <Box m="20px">
            <Header 
              subtitle="  sales of customers"
            />
            <Box
              m="40px 0 0 0"
              height="75vh"
              sx={{
                "& .MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: "none",
                },
                "& .name-column--cell": {
                  color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: colors.blueAccent[700],
                  borderBottom: "none",
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
  rows={
    (Object.values(customerssaleData) || []).map((customerData) => {
      if (!customerData || !customerData.aggregated_value) {
        return {
          id: 0,
          name: '',
          total_start_time: 0,
          total_end_time: 0,
          total_qp: 0,
          total_hp: 0,
          total_onep: 0,
          total_twop: 0,
          total_q_unit: 0,
          total_h_unit: 0,
          total_one_unit: 0,
          total_two_unit: 0,
          total_q_cash: 0,
          total_h_cash: 0,
          total_one_cash: 0,
          total_two_cash: 0,
          total_total_cash: 0,
          total_total_p: 0,
          total_grand_total_cash: 0,
          // Set other fields to default values or adjust as needed
          // ...
        };
      }

      return {
        id: customerData.customer_id || 0,
        name: customerData.customer_name || '',
        total_start_time: customerData.aggregated_value.total_start_time || 0,
        total_end_time: customerData.aggregated_value.total_end_time || 0,
        total_qp: customerData.aggregated_value.total_qp || 0,
        total_hp: customerData.aggregated_value.total_hp || 0,
        total_onep: customerData.aggregated_value.total_onep || 0,
        total_twop: customerData.aggregated_value.total_twop || 0,
        total_q_unit: customerData.aggregated_value.total_q_unit || 0,
        total_h_unit: customerData.aggregated_value.total_h_unit || 0,
        total_one_unit: customerData.aggregated_value.total_one_unit || 0,
        total_two_unit: customerData.aggregated_value.total_two_unit || 0,
        total_q_cash: customerData.aggregated_value.total_q_cash || 0,
        total_h_cash: customerData.aggregated_value.total_h_cash || 0,
        total_one_cash: customerData.aggregated_value.total_one_cash || 0,
        total_two_cash: customerData.aggregated_value.total_two_cash || 0,
        total_total_cash: customerData.aggregated_value.total_total_cash || 0,
        total_total_p: customerData.aggregated_value.total_total_p || 0,
        total_grand_total_cash: customerData.aggregated_value.total_grand_total_cash || 0,
        // Add other fields similarly
        // ...
      };
    })
  }
  columns={columns2}
  components={{ Toolbar: GridToolbar }}
/>


            </Box>

            </Box>

            <Box m="20px">
            <Header 
              subtitle=" sales of SalesPerson"
            />
            <Box
              m="40px 0 0 0"
              height="75vh"
              sx={{
                "& .MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: "none",
                },
                "& .name-column--cell": {
                  color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: colors.blueAccent[700],
                  borderBottom: "none",
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
  rows={
    (Object.values(customersssaleData) || []).map((customerData) => {
      if (
        !customerData ||
        !customerData.aggregated_value ||
        !customerData.aggregated_value.total_start_time
      ) {
        return {
          id: 0,
          name: '',
          total_start_time: 0,
          total_end_time: 0,
          total_qp: 0,
          total_hp: 0,
          total_onep: 0,
          total_twop: 0,
          total_q_unit: 0,
          total_h_unit: 0,
          total_one_unit: 0,
          total_two_unit: 0,
          total_q_cash: 0,
          total_h_cash: 0,
          total_one_cash: 0,
          total_two_cash: 0,
          total_total_cash: 0,
          total_total_p: 0,
          total_grand_total_cash: 0,
          // Set other fields to default values or adjust as needed
          // ...
        };
      }

      return {
        id: customerData.customer_id || 0,
        name: customerData.customer_name || '',
        total_start_time: customerData.aggregated_value.total_start_time || 0,
        total_end_time: customerData.aggregated_value.total_end_time || 0,
        total_qp: customerData.aggregated_value.total_qp || 0,
        total_hp: customerData.aggregated_value.total_hp || 0,
    total_onep: customerData.aggregated_value.total_onep || 0,
    total_twop: customerData.aggregated_value.total_twop || 0,
    total_q_unit: customerData.aggregated_value.total_q_unit || 0,
    total_h_unit: customerData.aggregated_value.total_h_unit || 0,
    total_one_unit: customerData.aggregated_value.total_one_unit || 0,
    total_two_unit: customerData.aggregated_value.total_two_unit || 0,
    total_q_cash: customerData.aggregated_value.total_q_cash || 0,
    total_h_cash: customerData.aggregated_value.total_h_cash || 0,
    total_one_cash: customerData.aggregated_value.total_one_cash || 0,
    total_two_cash: customerData.aggregated_value.total_two_cash || 0,
    total_total_cash: customerData.aggregated_value.total_total_cash || 0,
    total_total_p: customerData.aggregated_value.total_total_p || 0,
    total_grand_total_cash: customerData.aggregated_value.total_grand_total_cash || 0,
        // Add other fields similarly
        // ...
      };
    })
  }
  columns={columns3}
  components={{ Toolbar: GridToolbar }}
/>

          
    </Box>

    </Box>
*/}




{/*

    
    <Box m="20px">
            <Header 
              subtitle=" sales Target and Completion"
            />
            <Box
              m="40px 0 0 0"
              height="75vh"
              sx={{
                "& .MuiDataGrid-root": {
                  border: "none",
                },
                "& .MuiDataGrid-cell": {
                  borderBottom: "none",
                },
                "& .name-column--cell": {
                  color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: colors.blueAccent[700],
                  borderBottom: "none",
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
          rows={rows}
          columns={columns4}
          components={{ Toolbar: GridToolbar }}
        />
          
    </Box>

    </Box>
    
*/}
    </Box>
  );
};

export default Dashboard;
