import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import  { useEffect } from 'react';
import PaymentIcon from '@mui/icons-material/Payment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ReceiptIcon from '@mui/icons-material/Receipt';
import BusAlertIcon from '@mui/icons-material/BusAlert';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MovieIcon from '@mui/icons-material/Movie';
import TodayIcon from '@mui/icons-material/Today';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CommitIcon from '@mui/icons-material/Commit';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import { ToastContainer, toast } from "react-toastify";



const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  

  useEffect(() => {
    const firstName = localStorage.getItem('first_name');
    const lastName = localStorage.getItem('last_name');
    const role = localStorage.getItem('role'); // Add this line
  
    // Set the retrieved values as the first name and last name
    if (firstName && lastName) {
      const firstNameElement = document.getElementById('first_name');
      const lastNameElement = document.getElementById('last_name');
      if (firstNameElement) {
        firstNameElement.textContent = firstName;
      }
      if (lastNameElement) {
        lastNameElement.textContent = lastName;
      }
    }
  
    // Set the retrieved value as the role
    if (role) {
      const roleElement = document.getElementById('role');
      if (roleElement) {
        roleElement.textContent = role;
      }
    }
  }, []);


  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};






const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(""); // Add this line
  const accessToken = localStorage.getItem("accessToken");
  const role = localStorage.getItem("role");

  

  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const token = localStorage.getItem("accessToken");
    const id = localStorage.getItem("id");
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + `/api/staff/profile/${id}/`
      );
      if (response.ok) {
        const data = await response.json();
        setProfile(data[0]);
      } else {
        throw new Error("Failed to fetch profile");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      toast.error(error.message || "An error occurred. Please try again.");
    }
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  
  const handleMenuItemClick = (value) => {
    setSelectedValue(value);
  }

  const allowedMenuItems = {
    CSO: [
    "Dashboard", 
    "Agent",
    "Sales Order", 
    "Remote Orders", 
    "Return Orders", 
    "Return Deposit",
    "Return Order list",
    "AADS", 
    "Sales Order", 
    "AADD Orders",
    "Return Order list",
    "Reload Orders",
    "Sales Summary",
    "AADS Summary",
    "Finance Ledger Approve",
    "Customers",
    "SalesPerson",
        "AADS Summary",
    "Agent Sales Summary",
    "Sales Summary",
    "Sales Report",
    "Overview",
    "Daily",
    "Monthly",
    "BreakDown",
    "Profile",
  ],
    SDM: ["Dashboard",
    "Order",
    "Orders Approve", 
    "SDM Order Approve AA",
    "SDM Order Approve UPC",
    "SDM AADD Order Approve", "Set Price",
    "Sales Summary",
    "AADS Summary",
        "AADS Summary",
    "Agent Sales Summary",
    "Sales Summary",
    "Inventory Transaction",
    "Price",
    "Price-history",
    "Clients",
    "Customers",
    "CustomerLocation",
    "CustomersMobile",
    "SalesPerson",
    "Plates",
    "Staff Members",
    "Overview",
    "Daily",
    "Monthly",
    "BreakDown",
"Profile-All"
  ],
  BC: ["Dashboard",
  "Orders Approve", 
  "SDM Order Approve", 
  "FM AADD Order Approve", 
  "SDM AADD Order Approve", "Set Price",
  "Sales Summary",
  "Inventory Transaction",
  "AADS Summary",
  "Price",
  "Price-history",
  "Clients",
  "Customers",
  "CustomersMobile",
  "SalesPerson",
  "Plates",
  "Staff Members",
  "Overview",
  "Daily",
  "Monthly",
  "BreakDown",
"Profile-All"
],
    FINANCE: ["Dashboard",
     "Sales Order Verification", 
     "Supervisor Ledger Deposit",
     "AADS Sales Verification",
     "AADS Sales Pending",
     "Inventory Transaction",
     "Sales Summary",
     "Sales Summary",
     "AADS Summary",
     "Price",
         "AADS Summary",
    "Agent Sales Summary",
    "Sales Summary",
     "Price-history",
     "Finance Ledger",
     "Ledger Balance",
     "Customers",
       "CustomersMobile",
     "Ledger Deposit",
     "SalesPerson",
     "Plates",
     "Staff Members",
     "Overview",
     "Daily",
     "Monthly",
     "BreakDown",
     "Profile-All"
    
    ],
    FM: ["Dashboard", 
    "Sales Order Approval", 
    "FM AADD Order Approve", 
    "AADD Finance Approve",
    "AADS Sales Pending",
    "Sales Summary",
    "Sales Summary",
        "AADS Summary",
    "Agent Sales Summary",
    "Inventory Transaction",
    "Sales Summary",
    "Finance Ledger Approve",
    "Ledger Balance",
    "AADS Summary",
    "Price",
    "Price-history",
    "WareHouse Price History",
    "Customers",
      "CustomersMobile",
    "Finance Ledger",
    "SalesPerson",
    "Plates",
    "Overview",
    "Dashboard-Inventory",
    "Daily",
    "Monthly",
    "BreakDown",
    "Profile-All",
  ],
    LOGISTIC: ["Dashboard", 
    "LogisticsOrder",
    "InventoryLogisticsOrder", 
    "Plates",
    "Inventory Transaction",
    "Sales Summary",
    "Sales Summary",
    "CustomerLocation",
    "AADS Summary",
     "SalesPerson",
    "Customers",
      "CustomersMobile",
    "SalesPerson",
    "Plates",
    "Staff Members",
    "Overview",
    "Daily",
    "Monthly",
    "BreakDown",
     "Profile-All",
  ],
    GM: [
    "Dashboard", 
    "SalesPersonApprove",
    "Customers Approve", 
    "PlateApprove",
    "Inventory Transaction",
    "Price",
    "WareHouse Price History",
    "Sales Summary",
    "Sales Summary",
    "AADS Summary",
    "AADS Summary",
    "InventoryLogisticsOrder",
    "Agent Sales Summary",
    "Sales Summary",
    "Finance Ledger",
    "Price",
    "Price-history",
    "Customers",
    "CustomerLocation",  
    "CustomersMobile",
    "SalesPerson",
    "Plates",
    "Staff Members",
    "Overview",
    "Daily",
    "Monthly",
    "BreakDown",
    "Profile-All",
  ],
    Inventory: [
    "Dashboard", 
    "Inventory",
    "Inventory Order",
    "Inventory AADD Order", 
    "Inventory return", 
    "Sales Summary",
    "AADS Summary",
    "AADS Summary",
    "Agent Sales Summary",
    "Sales Summary",
    "Price",
    "Price-history",
    "WareHouse Price History",
    "Customers",
      "CustomersMobile",
    "SalesPerson",
    "Plates",
    "Staff Members",
    "Overview",
    "Daily",
    "Monthly",
    "BreakDown",
    "Profile-All",

    "Inventory Order",
    "Inventory AADD Order",
    "Inventory return",


    
    "Inventory",
    "Inventory Transaction",
    "Inventory Order",
    "Inventory AADD Order",
    "Inventory return",
    "Dashboard-Inventory",
    "Stock Request",
    "Inventory Request",
    "Production",
    "Incoming Request Production",
    "Status Request Production",
    "Inventory Order Agena",
    "Agena WareHouse",
    "Incoming Request AA",
    "Incoming Request Agena",
    "Status Request Agena",
    "Incoming Request Promotion",
    "Status Request Promotion",
    "Status Request  Agena",
    "Inventory Order AA",
    "Inventory AADS Order",
    "Inventory return AA",
    "AdissAbaba WareHouse",
    "Incoming Request AA",
    "Status Request AA",
    "Inventory Order AA",
    "Wolketie WareHouse",
    "Incoming Request Wolketie",
    "Status Request Wolketie",
    "Inventory Order Wolketie",
    "Inventory WolketieDD Order",
    "Inventory return Wolketie",

  ],

  Inventory: [
    "Dashboard", 
    "Inventory",
    "Inventory Order",
    "Inventory AADD Order", 
    "Inventory return", 
    "Sales Summary",
    "AADS Summary",
    "AADS Summary",
    "Agent Sales Summary",
    "Sales Summary",
    "Price",
    "Price-history",
    "WareHouse Price History",
    "Customers",
      "CustomersMobile",
    "SalesPerson",
    "Plates",
    "Staff Members",
    "Overview",
    "Daily",
    "Monthly",
    "BreakDown",
    "Profile-All",

    "Inventory Order",
    "Inventory AADD Order",
    "Inventory return",


    
    "Inventory",
    "Inventory Transaction",
    "Inventory Order",
    "Inventory AADD Order",
    "Inventory return",
    "Dashboard-Inventory",
    "Stock Request",
    "Inventory Request",
    "Production",
    "Incoming Request Production",
    "Status Request Production",
    "Inventory Order Agena",
    "Agena WareHouse",
    "Incoming Request AA",
    "Incoming Request Agena",
    "Status Request Agena",
    "Incoming Request Promotion",
    "Status Request Promotion",
    "Status Request  Agena",
    "Inventory Order AA",
    "Inventory AADS Order",
    "Inventory return AA",
    "AdissAbaba WareHouse",
    "Incoming Request AA",
    "Status Request AA",
    "Inventory Order AA",
    "Wolketie WareHouse",
    "Incoming Request Wolketie",
    "Status Request Wolketie",
    "Inventory Order Wolketie",
    "Inventory WolketieDD Order",
    "Inventory return Wolketie",

  ],

  ProductionInventory: [
    "Dashboard", 
    "Inventory",
    "Inventory Order",
    "Inventory AADD Order", 
    "Inventory return", 
    "Sales Summary",
    "AADS Summary",
    "AADS Summary",
    "Agent Sales Summary",
    "Sales Summary",
    "Price",
    "Price-history",
    "WareHouse Price History",
    "Customers",
      "CustomersMobile",
    "SalesPerson",
    "Plates",
    "Staff Members",
    "Overview",
    "Daily",
    "Monthly",
    "BreakDown",
    "Profile-All",

    "Inventory Order",
    "Inventory AADD Order",
    "Inventory return",


    
    "Inventory",
    "Inventory Transaction",
    "Inventory Order",
  
    "Dashboard-Inventory",
    "Stock Request",
    "Inventory Request",
    "Production",
    "Incoming Request Production",
    "Status Request Production",
    "Inventory Order Agena",
    "Agena WareHouse",
   

   
  

  ],

  AgenaInventory: [
    "Dashboard", 
    "Inventory",
    
    "Sales Summary",
    "AADS Summary",
    "AADS Summary",
    "Agent Sales Summary",
    "Sales Summary",
    "Price",
    "Price-history",
    "WareHouse Price History",
    "Customers",
  "CustomersMobile",      
    "SalesPerson",
    "Plates",
    "Staff Members",
    "Overview",
    "Daily",
    "Monthly",
    "BreakDown",
    "Profile-All",

   
    
    "Inventory",
    "Inventory Transaction",
    
    "Dashboard-Inventory",
    "Stock Request",
    "Inventory Request",
    "Production",
    "Inventory Order Agena",
    "Agena WareHouse",
    "Incoming Request AA",
    "Incoming Request Agena",
    "Status Request Agena",
    "Status Request  Agena",
  

  ],

  AdissAbabaInventory: [
    "Dashboard", 
    "Inventory",
    "Inventory Order",
    "Inventory AADD Order", 
    "Inventory return", 
    "Sales Summary",
    "AADS Summary",
    "AADS Summary",
    "Agent Sales Summary",
    "Sales Summary",
    "Price",
    "Price-history",
    "WareHouse Price History",
    "Customers",
      "CustomersMobile",
    "SalesPerson",
    "Plates",
    "Staff Members",
    "Overview",
    "Daily",
    "Monthly",
    "BreakDown",
    "Profile-All",

    "Inventory Order",
    "Inventory AADD Order",
    "Inventory return",


    
    "Inventory",
    "Inventory Transaction",
    "Inventory Order",
    "Inventory AADD Order",
    "Inventory return",
    "Dashboard-Inventory",
    "Stock Request",
    "Inventory Request",
    "Production",
   
    "Incoming Request AA",
 
    "Inventory Order AA",
    "Inventory AADS Order",
    "Inventory return AA",
    "AdissAbaba WareHouse",
    "Incoming Request AA",
    "Status Request AA",
    "Inventory Order AA",

  ],
    superAdmin: [
    "Dashboard",
    "Order",
    "Sales Order",
    "Remote Orders",
    "Return Orders",
    "Ledger Deposit",
    "AADS",
    "Sales Orders",
    "Return Orders",
    "Return Deposit",
    "Orders Approve",
    "SDM Order Approve",
    "Reload Orders",
    "CustomerLocation",
 
    "SDM Order Approve AA",
    "SDM Order Approve UPC",
    "SDM AADD Order Approve",
    "FM AADD Order Approve",
    "LogisticsOrder",
    "InventoryLogisticsOrder",
    "Finance",
    "Sales Order Verification",
    "Sales Order Approval",
    "Sales Summary", 
    "AADD Sales",
    "AADS Sales Verification",
    "Finance Ledger Approve",
    "Supervisor Ledger Deposit",
    "AADS Sales Pending",
    "AADD Finance Approve",
    "AADS Summary",
    "Agent Sales Summary",
    "Sales Summary",
    "Products",
    "Ledger Balance",
    "Product Status",
    "Set Price",
    "Price",
    "WareHouse Price History",
    "Price-history", 
    "Inventory",
    "Sales Report",
    "Inventory Order",
    "Inventory AADD Order",
    "Inventory return",
    
    "Inventory",
    "Inventory Order",
    "Inventory AADD Order",
    "Inventory return",
    "Dashboard-Inventory",
    "Stock Request",
    "Inventory Request",
    "Production",
    "Incoming Request Production",
    "Status Request Production",
    "Agena WareHouse",
    "Inventory Order Agena",
    "Incoming Request Agena",
    "Incoming Request Promotion",
    "Status Request Promotion",
    "Status Request Agena",
    "Inventory Order AA",
    "Inventory AADS Order",
    "Inventory return AA",
    "AdissAbaba WareHouse",
    "Incoming Request AA",
    "Status Request AA",
    "Finance Ledger",
    "Inventory Order AA",
    "Wolketie WareHouse",
    "Incoming Request Wolketie",
    "Status Request Wolketie",
    "Inventory Order Wolketie",
    "Inventory WolketieDD Order",
    "Inventory return Wolketie",
      "Inventory Transaction",
    "Clients",
    "Customers",
    "Customers Registeration",
    "Customers Approve",
      "CustomersMobile",
    "Sales Person",
    "SalesPerson Registeration",
    "SalesPerson Approve",
    "SalesPerson",
    "Plates",
    "Plate Registeration", 
    "Plate Approve",
    "Plates",
    "Staff Register",
    "Staff Members",
    "Staff Registeration",
    "Page",
    "Delivery",
    "Geography",
    "Sales",
    "Overview","Daily",
    "Monthly",
    "BreakDown",
    "Staff Registeration",
    "Profile-All",
  ]
  };

  const isMenuItemAllowed = (menuItem) => {
    return allowedMenuItems[role]?.includes(menuItem);
  }

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Fiker Wuha
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && profile &&  (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
              {profile.image && (
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={profile.image}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            )}
              </Box>
              <Box textAlign="center">
      <Typography variant="h2" color="textPrimary" fontWeight="bold" sx={{ m: "10px 0 0 0" }}>
        <span id="first_name"></span> <span id="last_name"></span>
      </Typography>
      <Typography variant="h5" color="green" sx={{ m: "10px 0 0 0" }}>
      <span id="role"></span> 
      </Typography>
    </Box>
            </Box>
          )}
  

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          {isMenuItemAllowed("Profile-cso") && (
              <Item
              title="Profile"
              to="/profile"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

          {isMenuItemAllowed("Dashboard") && ( 
               <Item
              title="Dashboard"
              to="/Dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

{isMenuItemAllowed("Agent") && ( 
                       <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                 <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
           Agent   
            </Typography> 
              </Box>

)}
{isMenuItemAllowed("Order") && (
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Order
            </Typography> 
)}
{isMenuItemAllowed("Sales Order") && (

<Item title="Sales Order"
              to="/purchase"
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

            {isMenuItemAllowed("Remote Orders") && (
         <Item
      title="Remote Order"
              to="/remote-order"
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
              />
              )}


{isMenuItemAllowed("Return Order list") && (
         <Item
      title="Return Orders"
              to="/orders"
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

              
            {isMenuItemAllowed("Reload Orders") && (
         <Item
      title="Reload Order"
              to="/aadd-reload"
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

            {isMenuItemAllowed("Ledger Deposit") && (
         <Item
      title="Ledger Deposit"
              to="/ledger-Deposit" 
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

{isMenuItemAllowed("Supervisor Ledger Deposit") && (
         <Item
      title="Supervisor Ledger Deposit"
              to="/Supervisor-ledger-Deposit" 
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
              />
              )}
               {isMenuItemAllowed("Return Deposit") && (
         <Item
      title="Return Deposit"
              to="/return-Deposit"
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

  {isMenuItemAllowed("AADS")&& (  
<Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                 <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
          AADS 
            </Typography> 
              </Box>
  )}
            {isMenuItemAllowed("Sales Order") && (
                 <Item
              title="Sales Order"
              to="/CSOMobileInventoryApprove"
              icon={<BusAlertIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}
       

            {isMenuItemAllowed("Return Orders") && (
                 <Item
              title="Return Orders"
              to="/AADDOrder"
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
              />
              )}
     {isMenuItemAllowed("Orders Approve")&& (       

<Typography
  variant="h6"
  color={colors.grey[300]}
  sx={{ m: "15px 0 5px 20px" }}
>
  Orders Approve
</Typography> 
)}
         

{isMenuItemAllowed("SDM Order Approve AA") && (
                 <Item
              title="SDM Order Approve AA"
              to="/SMDPaymentApproveAA"
              icon={<ReceiptIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}
       
            {isMenuItemAllowed("SDM Order Approve UPC") && (
                 <Item
              title="SDM Order Approve UPC"
              to="/SMDPaymentApproveUPC"
              icon={<ReceiptIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

{isMenuItemAllowed("SDM AADD Order Approve") && (
                 <Item
              title="SDM AADD Order Approve"
              to="/smdAADD-Approve"
              icon={<ReceiptIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}


                
           

            {isMenuItemAllowed("LogisticsOrder") && (
                 <Item
              title="LogisticsOrder"
              to="/AADD-logistics"
              icon={<ReceiptIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

                 {isMenuItemAllowed("InventoryLogisticsOrder") && (
                 <Item
              title="InventoryLogisticsOrder"
              to="/inventory-logistics"
              icon={<ReceiptIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

{isMenuItemAllowed("Finance")&& (  
<Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                 <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
          Finance
            </Typography> 
              </Box>
)}


            {isMenuItemAllowed("Sales Order Verification") && (
              <Item
              title="Sales Order Verification"
              to="/SalesOrderVerificationPage"
              icon={<ReceiptIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

{isMenuItemAllowed("FM AADD Order Approve") && (
                 <Item
              title="FM AADD Order Approve"
              to="/FMAADDApprovePage"
              icon={<ReceiptIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

              
            {isMenuItemAllowed("Finance Ledger Approve") && (
              <Item
              title="Finance Ledger Approve"
              to="/finance-ledger-approve"
              icon={<PriceCheckIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}


{isMenuItemAllowed("Ledger Balance") && (
              <Item
              title="Ledger Balance"
              to="/ledger-balance"
              icon={<PriceCheckIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}


{isMenuItemAllowed("Finance Ledger") && (
              <Item
              title="Finance Ledger"
              to="/finance-ledger-data"
              icon={<PriceCheckIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

{isMenuItemAllowed("AADS Sales Verification") && (
              <Item
              title="AADS Sales Verification"
              to="/MobileInventoryVerificationPage"
              icon={<LocalShippingIcon  />}
              selected={selected}
              setSelected={setSelected}
              />
              )}



            

            {isMenuItemAllowed("AADS Sales Pending") && (
              <Item
              title="AADS Sales Pending"
              to="/aads-pending"
              icon={<LocalShippingIcon  />}
              selected={selected}
              setSelected={setSelected}
              />
              )}
            
            {isMenuItemAllowed("AADD Finance Approve") && (
              <Item
              title="AADD Finance Approve"
              to="/aads-finance-approve"
              icon={<PriceCheckIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}


{isMenuItemAllowed("Sales Summary")&& (  
<Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                 <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
          Sales Summary
            </Typography> 
              </Box>
)}

            {isMenuItemAllowed("Agent Sales Summary") && (
              <Item
              title="Agent Sales Summary"
              to="/order-summary"
              icon={<InventoryIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}
            
 


         

            {isMenuItemAllowed("AADS Summary") && (
              <Item
              title="AADS Summary"
              to="/aads"
              icon={<LocalShippingIcon  />}
              selected={selected}
              setSelected={setSelected}
              />
              )}


{isMenuItemAllowed("Products") && (   
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Products
            </Typography> 
)}
 

{isMenuItemAllowed("Lists")&& (       
<Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                 <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
          Lists
            </Typography> 
              </Box>

)}
         
            {isMenuItemAllowed("Set Price") && (
              <Item
              title="Set Price"
              to="/set-price"
              icon={<AttachMoneyIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}
            {isMenuItemAllowed("Price") && (
              <Item
              title="Price"
              to="/list-price"
              icon={<AttachMoneyIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

{isMenuItemAllowed("WareHouse Price History") && (
              <Item
              title="WareHouse Price History"
              to="/warehouse-price-history"
              icon={<AttachMoneyIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

    {isMenuItemAllowed("Price-history") && (          
<SubMenu icon={<AttachMoneyIcon />} title="Price-history" onClick={toggleSubMenu}>
  <MenuItem>
    <Link to="/sort_price/Area1/">Area1</Link>
  </MenuItem>
  <MenuItem>
    <Link to="/sort_price/Area1B/">Area1B</Link>
  </MenuItem>
  <MenuItem>
    <Link to="/sort_price/Area2/">Area2</Link>
  </MenuItem>
  <MenuItem>
    <Link to="/sort_price/Area3/">Area3</Link>
  </MenuItem>
  <MenuItem>
    <Link to="/sort_price/EastMarket/">EastMarket</Link>
  </MenuItem>
  <MenuItem>
    <Link to="/sort_price/AdissAbabaMarket/">AdissAbabaMarket</Link>
  </MenuItem>
  <MenuItem>
    <Link to="/sort_price/AdissAbabaMarket2/">AdissAababMarket2</Link>
  </MenuItem>
  <MenuItem>
    <Link to="/sort_price/Area8/">Area8</Link>
  </MenuItem>
</SubMenu>


)}

{isMenuItemAllowed("Inventory") && (
<Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Inventory
            </Typography> 
)}
        
            
            {isMenuItemAllowed("Dashboard-Inventory") && (
            <Item
              title="Dashboard-Inventory"
              to="/Dashboard-Inventory"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            )}
               {isMenuItemAllowed("Stock Request") && (
<Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
      Stock Request
            </Typography> 
 
 )}
          
{isMenuItemAllowed("Inventory Request") && (
<Item
              title="Inventory Request"
              to="/incoming-stock"
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
            />
            )}

{isMenuItemAllowed("Inventory Transaction") && (
<Item
              title="Inventory Transaction"
              to="/inventory-data"
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
            />
            )}
                  
{isMenuItemAllowed("Production") && (    
<Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
      Production
            </Typography> 

)}
          
            {isMenuItemAllowed("Incoming Request Production") && (
<Item
              title="Incoming Request Production"
              to="/incoming-request-production"
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
            />
            )}
            {isMenuItemAllowed("Status Request Production") && (
<Item
              title="Status Request Production"
              to="/status-request-production"
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
            />
            )}

                          
{isMenuItemAllowed("Production") && (    
<Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
      Promotion
            </Typography> 

)}
          
            {isMenuItemAllowed("Incoming Request Promotion") && (
<Item
              title="Incoming Request Promotion"
              to="/promotion-request"
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
            />
            )}
            {isMenuItemAllowed("Status Request Promotion") && (
<Item
              title="Status Request Promotion"
              to="/promotion-status"
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
            />
            )}

            {isMenuItemAllowed("Agena WareHouse") && (
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
         Agena  WareHouse
            </Typography> 

)}
            
                   {isMenuItemAllowed("Incoming Request Agena") && (
            <Item
              title="Incoming Request Agena"
              to="/incoming-request-agena"
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
            />

            )}
            {isMenuItemAllowed("Status Request Agena") && (
<Item
              title="Status Request Agena"
              to="/status-request-agena"
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
            />

            )}

            {isMenuItemAllowed("Inventory Order Agena") && (   
<Item
              title="Inventory Order Agena"
              to="/inventory-return-Agena"
              icon={<InventoryIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}



        

      
     
            {isMenuItemAllowed("AdissAbaba WareHouse") && (
<Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
         AdissAbaba WareHouse
            </Typography> 
             )}
            {isMenuItemAllowed("Incoming Request AA") && (
            <Item
              title="Incoming Request AA"
              to="/incoming-request-aa"
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
            />
            )}
            {isMenuItemAllowed("Status Request AA") && (
<Item
              title="Status Request AA"
              to="/status-request-aa"
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
            />

            )}

            {isMenuItemAllowed("Inventory Order AA") && (   
<Item
              title="Inventory Order AA"
              to="/inventory-return"
              icon={<InventoryIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}
              {isMenuItemAllowed("Inventory AADS Order") && (
              <Item
              title="Inventory AADS Order"
              to="/AADD-Inventory-Return"
              icon={<InventoryIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}
              {isMenuItemAllowed("Inventory return AA") && (
              <Item
              title="Inventory return AA"
              to="/return-status"
              icon={<InventoryIcon />}
              selected={selected}
              setSelected={setSelected}
              />

              )}


            

            
              {isMenuItemAllowed("Wolketie WareHouse") && (
<Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
         Wolketie WareHouse
            </Typography> 
 )}
            {isMenuItemAllowed("Incoming Request Wolketie") && (
            <Item
              title="Incoming Request Wolketie"
              to="/incoming-request-wolketie"
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
            />
            )}
 {isMenuItemAllowed("Status Request Wolketie") && (
<Item
              title="Status Request Wolketie"
              to="/status-request-wolketie"
              icon={<ShoppingCartIcon  />}
              selected={selected}
              setSelected={setSelected}
            />

            )}
            {isMenuItemAllowed("Inventory Order Wolketie") && (            
<Item
              title="Inventory Order Wolketie"
              to="/inventory-return-Wolkete"
              icon={<InventoryIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}
       
            {isMenuItemAllowed("Clients") && (
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Clients
            </Typography> 
            )}
            {isMenuItemAllowed("Customers") && (
              <Item
              title="Customers"
              to="/customers"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

               {isMenuItemAllowed("CustomerLocation") && (
              <Item
              title="CustomerLocation"
              to="/location-tracker"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

               {isMenuItemAllowed("CustomersMobile") && (
              <Item
              title="CustomersMobile"
              to="/customerMobile"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}
            {isMenuItemAllowed("Customers Registeration") && (
              <Item
              title="Customers Registeration"
              to="/customerRegister"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

            {isMenuItemAllowed("Customers Approve") && (
              <Item
              title="Customers Approve"
              to="/customerApprove"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}
               {isMenuItemAllowed("Profile-All") && (
              <Item
              title="Profile"
              to="/profile"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}
  {isMenuItemAllowed("Sales Person") && (
<Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Sales Person
            </Typography> 
  )}
            {isMenuItemAllowed("SalesPerson Registeration") && (
              <Item
              title="SalesPerson Registeration"
              to="/salesRegisteration"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

            {isMenuItemAllowed("SalesPerson Approve") && (
              <Item
              title="SalesPerson Approve"
              to="/SalesPersonApprove"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}
            {isMenuItemAllowed("SalesPerson") && (
              <Item
              title="SalesPerson"
              to="/SalesPerson"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}



   {isMenuItemAllowed("Plates") && (
<Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Plates
            </Typography>
   )}

{isMenuItemAllowed("Plates") && (
              <Item
              title="Plates"
              to="/Plates"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}
            {isMenuItemAllowed("Plate Registeration") && (
              <Item
              title="Plate Registeration"
              to="/plateRegisteration"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

            {isMenuItemAllowed("Plate Approve") && (
              <Item
              title="Plate Approve"
              to="/PlateApprove"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

            {isMenuItemAllowed("Plates-All") && (
              <Item
              title="Plates-All"
              to="/Plates"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

{isMenuItemAllowed("Staff Register") && (      
<Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
        Staff Register
            </Typography> 
)}
            {isMenuItemAllowed("Staff Members") && (
              <Item
              title="Staff Members"
              to="/staff-members"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

            {isMenuItemAllowed("Staff Registeration") && (        
              <Item 
              title="Staff Registeration"
              to="/staff-register"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

    
          



            
{/*
            {isMenuItemAllowed("BreakDown") && (
              <Item
              title="BreakDown"
              to="/breakdown"
              icon={<DateRangeIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}
            */}
  {isMenuItemAllowed("Adminsteration") && (
          <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Adminsteration
            </Typography> 
  )}
            {isMenuItemAllowed("User Registertion") && (
              <Item
              title="User Registeration"
              to="/staff"
              icon={<EngineeringIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              )}

           

           

           

          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
