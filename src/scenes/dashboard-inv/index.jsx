import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
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
import { useState, useEffect } from "react";
import CheckIcon from '@mui/icons-material/Check';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import BusAlertIcon from '@mui/icons-material/BusAlert';
const DashboardInv = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [customerData, setCustomerData] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true); 
  const [increaseValue28gm, setIncreaseValue28gm] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL +"/commerce/warehouse-stocks-data/");
        const data = await response.json();
        console.log(data)
        setCustomerData(data); // Map the fetched data to an object
        setLoading(false); // Set loading state to false after data is fetched
      } catch (error) {
        console.error("Error fetching customer data:", error);
        setLoading(false); // Set loading state to false if there's an error
      }
    };
  
    fetchData();
  }, [page]);


  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">


        

      <Header title="Total" subtitle="Total Inventory Stock Status" />

       
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
      title="Preform"
      subtitle="14gm"
      progress="0.75"
      increase={customerData?.Total?.Preform_14gm}
      icon={
        <CheckIcon
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
     title="Preform"
     subtitle="18gm"
      progress="0.50"
      increase={customerData?.Total?.Preform_18gm}
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
      title="Preform"
      subtitle="28gm"
      progress="0.30"
      increase={customerData?.Total?.Preform_28gm}
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
      title="Preform"
      subtitle="40gm"
      progress="0.80"
      increase={customerData?.Total?.Preform_40gm}
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
      title="Shrink"
      subtitle="35gm"
      progress="0.75"
      increase={customerData?.Total?.Shrink_35gm}
      icon={
        <CheckIcon
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
       title="Shrink"
       subtitle="38gm"
      progress="0.50"
      increase={customerData?.Total?.Shrink_38gm}
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
      title="Shrink"
      subtitle="42gm"
      progress="0.30"
      increase={customerData?.Total?.Shrink_42gm}
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
     title="Shrink"
     subtitle="48gm"
      progress="0.80"
      increase={customerData?.Total?.Shrink_48gm}
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
      title="Label"
      subtitle="035gm"
      progress="0.75"
      increase={customerData?.Total?.Label_035ml}
      icon={
        <CheckIcon
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
      title="Label"
      subtitle="06ml"
      progress="0.50"
      increase={customerData?.Total?.Label_06ml}
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
      title="Label"
      subtitle="1L"
      progress="0.30"
      increase={customerData?.Total?.Label_1Lgm}
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
      title="Label"
      subtitle="2L"
      progress="0.80"
      increase={customerData?.Total?.Label_2L}
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
            title="FG_Standardized"
            subtitle="035ml"
            progress="0.75"
            increase={customerData?.Total?.FG_Standardized_035ml}
            icon={
              <CheckIcon
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
           title="FG_Standardized"
           subtitle="06ml"
            progress="0.50"
            increase={customerData?.Total?.FG_Standardized_06ml}
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
            title="FG_Standardized"
            subtitle="1L"
            progress="0.30"
            increase={customerData?.Total?.FG_Standardized_1L}
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
            title="FG_Standardized"
            subtitle="2L"
            progress="0.80"
            increase={customerData?.Total?.FG_Standardized_2l}
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
            title="FG_Damaged"
            subtitle="035ml"
            progress="0.75"
            increase={customerData?.Total?.FG_Damaged_035ml}
            icon={
              <CheckIcon
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
           title="FG_Damaged"
           subtitle="06ml"
            progress="0.50"
            increase={customerData?.Total?.FG_Damaged_06ml}
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
            title="FG_Damaged"
            subtitle="1L"
            progress="0.30"
            increase={customerData?.Total?.FG_Damaged_1L}
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
            title="FG_Damaged"
            subtitle="2L"
            progress="0.80"
            increase={customerData?.Total?.FG_Damaged_2l}
            icon={
              <BusAlertIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>




        <Header title="Agena" subtitle="Stock Status" />

       
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
            title="Preform"
            subtitle="14gm"
            progress="0.75"
            increase={customerData?.Agena?.Preform_14gm}
            icon={
              <CheckIcon
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
           title="Preform"
           subtitle="18gm"
            progress="0.50"
            increase={customerData?.Agena?.Preform_18gm}
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
            title="Preform"
            subtitle="28gm"
            progress="0.30"
            increase={customerData?.Agena?.Preform_28gm}
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
            title="Preform"
            subtitle="40gm"
            progress="0.80"
            increase={customerData?.Agena?.Preform_40gm}
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
            title="Shrink"
            subtitle="35gm"
            progress="0.75"
            increase={customerData?.Agena?.Shrink_35gm}
            icon={
              <CheckIcon
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
             title="Shrink"
             subtitle="38gm"
            progress="0.50"
            increase={customerData?.Agena?.Shrink_38gm}
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
            title="Shrink"
            subtitle="42gm"
            progress="0.30"
            increase={customerData?.Agena?.Shrink_42gm}
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
           title="Shrink"
           subtitle="48gm"
            progress="0.80"
            increase={customerData?.Agena?.Shrink_48gm}
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
            title="Label"
            subtitle="035gm"
            progress="0.75"
            increase={customerData?.Agena?.Label_035ml}
            icon={
              <CheckIcon
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
            title="Label"
            subtitle="06ml"
            progress="0.50"
            increase={customerData?.Agena?.Label_06ml}
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
            title="Label"
            subtitle="1L"
            progress="0.30"
            increase={customerData?.Agena?.Label_1Lgm}
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
            title="Label"
            subtitle="2L"
            progress="0.80"
            increase={customerData?.Agena?.Label_2L}
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
            title="FG_Standardized"
            subtitle="035ml"
            progress="0.75"
            increase={customerData?.Agena?.FG_Standardized_035ml}
            icon={
              <CheckIcon
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
           title="FG_Standardized"
           subtitle="06ml"
            progress="0.50"
            increase={customerData?.Agena?.FG_Standardized_06ml}
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
            title="FG_Standardized"
            subtitle="1L"
            progress="0.30"
            increase={customerData?.Agena?.FG_Standardized_1L}
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
            title="FG_Standardized"
            subtitle="2L"
            progress="0.80"
            increase={customerData?.Agena?.FG_Standardized_2l}
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
            title="FG_Damaged"
            subtitle="035ml"
            progress="0.75"
            increase={customerData?.Agena?.FG_Damaged_035ml}
            icon={
              <CheckIcon
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
           title="FG_Damaged"
           subtitle="06ml"
            progress="0.50"
            increase={customerData?.Agena?.FG_Damaged_06ml}
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
            title="FG_Damaged"
            subtitle="1L"
            progress="0.30"
            increase={customerData?.Agena?.FG_Damaged_1L}
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
            title="FG_Damaged"
            subtitle="2L"
            progress="0.80"
            increase={customerData?.Agena?.FG_Damaged_2l}
            icon={
              <BusAlertIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}

      
        <Header title="AdissAbaba" subtitle="Stock Status" />

       
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
            title="Preform"
            subtitle="14gm"
            progress="0.75"
            increase={customerData?.AdissAbaba?.Preform_14gm}
            icon={
              <CheckIcon
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
           title="Preform"
           subtitle="18gm"
            progress="0.50"
            increase={customerData?.AdissAbaba?.Preform_18gm}
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
            title="Preform"
            subtitle="28gm"
            progress="0.30"
            increase={customerData?.AdissAbaba?.Preform_28gm}
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
            title="Preform"
            subtitle="40gm"
            progress="0.80"
            increase={customerData?.AdissAbaba?.Preform_40gm}
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
            title="Shrink"
            subtitle="35gm"
            progress="0.75"
            increase={customerData?.AdissAbaba?.Shrink_35gm}
            icon={
              <CheckIcon
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
             title="Shrink"
             subtitle="38gm"
            progress="0.50"
            increase={customerData?.AdissAbaba?.Shrink_38gm}
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
            title="Shrink"
            subtitle="42gm"
            progress="0.30"
            increase={customerData?.AdissAbaba?.Shrink_42gm}
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
           title="Shrink"
           subtitle="48gm"
            progress="0.80"
            increase={customerData?.AdissAbaba?.Preform_48gm}
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
            title="Label"
            subtitle="035gm"
            progress="0.75"
            increase={customerData?.AdissAbaba?.Label_035ml}
            icon={
              <CheckIcon
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
            title="Label"
            subtitle="06ml"
            progress="0.50"
            increase={customerData?.AdissAbaba?.Label_06ml}
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
            title="Label"
            subtitle="1L"
            progress="0.30"
            increase={customerData?.AdissAbaba?.Label_1Lgm}
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
            title="Label"
            subtitle="2L"
            progress="0.80"
            increase={customerData?.AdissAbaba?.Label_2L}
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
            title="FG_Standardized"
            subtitle="035ml"
            progress="0.75"
            increase={customerData?.AdissAbaba?.FG_Standardized_035ml}
            icon={
              <CheckIcon
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
           title="FG_Standardized"
           subtitle="06ml"
            progress="0.50"
            increase={customerData?.AdissAbaba?.FG_Standardized_06ml}
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
            title="FG_Standardized"
            subtitle="1L"
            progress="0.30"
            increase={customerData?.AdissAbaba?.FG_Standardized_1L}
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
            title="FG_Standardized"
            subtitle="2L"
            progress="0.80"
            increase={customerData?.AdissAbaba?.FG_Standardized_2l}
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
            title="FG_Damaged"
            subtitle="035ml"
            progress="0.75"
            increase={customerData?.AdissAbaba?.FG_Damaged_035ml}
            icon={
              <CheckIcon
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
           title="FG_Damaged"
           subtitle="06ml"
            progress="0.50"
            increase={customerData?.AdissAbaba?.FG_Damaged_06ml}
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
            title="FG_Damaged"
            subtitle="1L"
            progress="0.30"
            increase={customerData?.AdissAbaba?.FG_Damaged_1L}
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
            title="FG_Damaged"
            subtitle="2L"
            progress="0.80"
            increase={customerData?.AdissAbaba?.FG_Damaged_2l}
            icon={
              <BusAlertIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>




        <Header title="Wolkete" subtitle="Stock Status" />

       
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
            title="Preform"
            subtitle="14gm"
            progress="0.75"
            increase={customerData?.Wolkete?.Preform_14gm}
            icon={
              <CheckIcon
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
           title="Preform"
           subtitle="18gm"
            progress="0.50"
            increase={customerData?.Wolkete?.Preform_18gm}
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
            title="Preform"
            subtitle="28gm"
            progress="0.30"
            increase={customerData?.Wolkete?.Preform_28gm}
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
            title="Preform"
            subtitle="40gm"
            progress="0.80"
            increase={customerData?.Wolkete?.Preform_40gm}
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
            title="Shrink"
            subtitle="35gm"
            progress="0.75"
            increase={customerData?.Wolkete?.Shrink_35gm}
            icon={
              <CheckIcon
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
             title="Shrink"
             subtitle="38gm"
            progress="0.50"
            increase={customerData?.Wolkete?.Shrink_38gm}
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
            title="Shrink"
            subtitle="42gm"
            progress="0.30"
            increase={customerData?.Wolkete?.Shrink_42gm}
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
           title="Shrink"
           subtitle="48gm"
            progress="0.80"
            increase={customerData?.Wolkete?.Preform_48gm}
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
            title="Label"
            subtitle="035gm"
            progress="0.75"
            increase={customerData?.Wolkete?.Label_035ml}
            icon={
              <CheckIcon
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
            title="Label"
            subtitle="06ml"
            progress="0.50"
            increase={customerData?.Wolkete?.Label_06ml}
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
            title="Label"
            subtitle="1L"
            progress="0.30"
            increase={customerData?.Wolkete?.Label_1Lgm}
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
            title="Label"
            subtitle="2L"
            progress="0.80"
            increase={customerData?.Wolkete?.Label_2L}
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
            title="FG_Standardized"
            subtitle="035ml"
            progress="0.75"
            increase={customerData?.Wolkete?.FG_Standardized_035ml}
            icon={
              <CheckIcon
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
           title="FG_Standardized"
           subtitle="06ml"
            progress="0.50"
            increase={customerData?.Wolkete?.FG_Standardized_06ml}
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
            title="FG_Standardized"
            subtitle="1L"
            progress="0.30"
            increase={customerData?.Wolkete?.FG_Standardized_1L}
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
            title="FG_Standardized"
            subtitle="2L"
            progress="0.80"
            increase={customerData?.Wolkete?.FG_Standardized_2l}
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
            title="FG_Damaged"
            subtitle="035ml"
            progress="0.75"
            increase={customerData?.Wolkete?.FG_Damaged_035ml}
            icon={
              <CheckIcon
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
           title="FG_Damaged"
           subtitle="06ml"
            progress="0.50"
            increase={customerData?.Wolkete?.FG_Damaged_06ml}
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
            title="FG_Damaged"
            subtitle="1L"
            progress="0.30"
            increase={customerData?.Wolkete?.FG_Damaged_1L}
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
            title="FG_Damaged"
            subtitle="2L"
            progress="0.80"
            increase={customerData?.Wolkete?.FG_Damaged_2l}
            icon={
              <BusAlertIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>







        <Header title="Factory" subtitle="Stock Status" />

       
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
      title="Preform"
      subtitle="14gm"
      progress="0.75"
      increase={customerData?.Factory?.Preform_14gm}
      icon={
        <CheckIcon
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
     title="Preform"
     subtitle="18gm"
      progress="0.50"
      increase={customerData?.Factory?.Preform_18gm}
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
      title="Preform"
      subtitle="28gm"
      progress="0.30"
      increase={customerData?.Factory?.Preform_28gm}
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
      title="Preform"
      subtitle="40gm"
      progress="0.80"
      increase={customerData?.Factory?.Preform_40gm}
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
      title="Shrink"
      subtitle="35gm"
      progress="0.75"
      increase={customerData?.Factory?.Shrink_35gm}
      icon={
        <CheckIcon
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
       title="Shrink"
       subtitle="38gm"
      progress="0.50"
      increase={customerData?.Factory?.Shrink_38gm}
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
      title="Shrink"
      subtitle="42gm"
      progress="0.30"
      increase={customerData?.Factory?.Shrink_42gm}
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
     title="Shrink"
     subtitle="48gm"
      progress="0.80"
      increase={customerData?.Factory?.Preform_48gm}
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
      title="Label"
      subtitle="035gm"
      progress="0.75"
      increase={customerData?.Factory?.Label_035ml}
      icon={
        <CheckIcon
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
      title="Label"
      subtitle="06ml"
      progress="0.50"
      increase={customerData?.Factory?.Label_06ml}
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
      title="Label"
      subtitle="1L"
      progress="0.30"
      increase={customerData?.Factory?.Label_1Lgm}
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
      title="Label"
      subtitle="2L"
      progress="0.80"
      increase={customerData?.Factory?.Label_2L}
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
            title="FG_Standardized"
            subtitle="035ml"
            progress="0.75"
            increase={customerData?.Factory?.FG_Standardized_035ml}
            icon={
              <CheckIcon
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
           title="FG_Standardized"
           subtitle="06ml"
            progress="0.50"
            increase={customerData?.Factory?.FG_Standardized_06ml}
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
            title="FG_Standardized"
            subtitle="1L"
            progress="0.30"
            increase={customerData?.Factory?.FG_Standardized_1L}
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
            title="FG_Standardized"
            subtitle="2L"
            progress="0.80"
            increase={customerData?.Factory?.FG_Standardized_2l}
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
            title="FG_Damaged"
            subtitle="035ml"
            progress="0.75"
            increase={customerData?.Factory?.FG_Damaged_035ml}
            icon={
              <CheckIcon
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
           title="FG_Damaged"
           subtitle="06ml"
            progress="0.50"
            increase={customerData?.Factory?.FG_Damaged_06ml}
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
            title="FG_Damaged"
            subtitle="1L"
            progress="0.30"
            increase={customerData?.Factory?.FG_Damaged_1L}
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
            title="FG_Damaged"
            subtitle="2L"
            progress="0.80"
            increase={customerData?.Factory?.FG_Damaged_2l}
            icon={
              <BusAlertIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

     

     
     
       
     
       
      </Box>
    </Box>
  );
};

export default DashboardInv;
