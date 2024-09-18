import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Forms from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import SalesOrder from "./scenes/SalesOrder/SalesOrder";
import Payment from "./scenes/payment/payment";
import CSOPaymentProcess from "./scenes/csoAdminPage/csoAdminPage";
import SMDPaymentApprovePage from "./scenes/SMDPaymentApprovePage/SMDPaymentApprovePage";
import CSOMobileInventoryApprove from "./scenes/csoMobileInventoryApprove/csoMobileInventoryApprove";
import SalesOrderVerificationPage from "./scenes/SalesOrderVerification/SalesOrderVerification";
import SalesOrderApprovePage from "./scenes/SalesOrderApprove/SalesOrderApprove";
import MobileInventoryVerificationPage from "./scenes/MobileInventoryVerification/MobileInventoryVerification";
import Customers from "./scenes/customers/customers";
import Geography from "./scenes/geography/index";
import Overview from "./scenes/overview/overview";
import Daily from "./scenes/daily/daily";

import MonthlyTransactions from "./scenes/MonthlyTranscation/MonthlyTransaction";
import Month from "./scenes/month/month";
import Breakdown from "./scenes/breakdown/breakdown";
import Admin from "./scenes/admin/admin";
import Staff from "./scenes/staff/staff";
import Login from "./scenes/Login/Login"
import AADSPending  from "./scenes/AadsPending/AadsPending"
import Calendar from "./scenes/calendar/calendar";
import SetPrice from "./scenes/SetPrice/setprice";
import CustomerApprove from "./scenes/customersApprove/customersApprove";
import CustomersMobile from "./scenes/customersmobile/customersmobile.jsx"
import CustomerRegister from "./scenes/customerRegister/customerRegister";
import CreateSalesPerson from "./scenes/createSales/createSales"
import CreatePlate from "./scenes/PlateRegisteration/PlateRegisteration"
import SalesPersonApprove from "./scenes/SalesPersonApprove/SalesPersonApprove";
import PlateApprove from "./scenes/PlateApprove/PlateApprove";
import SalesPerson from "./scenes/SalesPersonList/SalesPersonList";
import Plates from "./scenes/PlateList/PlateList";
import PriceList from "./scenes/PriceList/PriceList";
import SMDAADDApprovePage from "./scenes/SMDADDApprove/SmdADDApprove"
import FMAADDApprovePage from "./scenes/FMAADDApprove/FMAADDApprove"
import InventoryReturnForm from "./scenes/InventoryReturnForm/InventoryReturnForm";
import InventoryStatus from "./scenes/InventoryStatus/InventoryStatus";
import AADS from "./scenes/AADS/AADS"
import AADSInvoice from "./scenes/AADSINVOICE/aadsinvoice"
import Order from "./scenes/Orders/Orders";
import AADDOrder from "./scenes/AADD-ORDERS/AADDOrders";
import InventoryReturn from "./scenes/InventoryReturn/InventoryReturn";
import SalesOrderSummary from "./scenes/SalesOrderSummary/SalesOrderSummary";
import AADDLogisticsSummary from "./scenes/AADDLogistics/AADDLogistics";
import AADDInventoryReturn from "./scenes/AADDInventory/AADDInventory"
import AADDSalesOrderSummary from "./scenes/AADSalesOrderSummary/AadssalesOrderSummary";
import AADSFinanceApprove from "./scenes/AADSFinanceApprove/aadsfinanceapprove";
import  StaffRegister from "./scenes/staffregister/staffregister"
import StaffMember from "./scenes/Staff-member/staff-member";
import Area1 from "./scenes/Area1/Area1";
import Area1B from "./scenes/Area1B/Area1B";
import Area2 from "./scenes/Area2/Area2";
import Area3 from "./scenes/Area3/Area3";
import EastMarket from "./scenes/EastMarket/EastMarket";
import AdissAbabaMarket from "./scenes/AdissAbabaMarket/AdissAbabaMarket";
import AdissAbabaMarket2 from "./scenes/AdissAbabaMarket2/AdissAbabaMarket2";
import Area8 from "./scenes/Area8/Area8";
import Profile from "./scenes/profile/profile"
import AADDReload from "./scenes/AADD-Reload/AADD-Reload";
import LedgerPayment from "./scenes/Ledger-Payment/Ledger-Payment";
import FinanceLedgerApprove from "./scenes/FinanceLedgerApprove/FinanceLedgerApprove";
import LedgerBalance from "./scenes/LedgerBalance/LedgerBalance"
import ReturnDeposit from "./scenes/ReturnDeposit/ReturnDeposit"
import DailyPage from "./scenes/Dailypage/Dailypage"
import MonthlyPage from "./scenes/MonthlyPages/MonthlyPages"
import MobileFinanceLedgerApprove from "./scenes/mobileDeposit/mobileDeposit";
import RemoteOrder from "./scenes/mobile-Orders/mobile-Orders";
import PriceHistoryWareHouse from "./scenes/PriceHistoryWareHouse/PriceHistoryWareHouse";
import Paginated  from './PaginatedTable';
import  SMDPaymentApprovePageAA from "./scenes/SMDPaymentApprovePageAA/SMDPaymentApprovePageAA"
import  SMDPaymentApprovePageUPC from "./scenes/SMDPaymentApprovePageUPC/SMDPaymentApprovePageUPC"
import ChartJSS from "./chart.js"


import DashboardInv from "./scenes/dashboard-inv/index.jsx";
import StockRequest from "./scenes/StockRequest/StockRequest"
import StockRequestApprovePage from "./scenes/StockRequestApprove/StockRequestApprove"
import IncomingStock from "./scenes/incomingstock/incomingstock";
import OutGoingStock from "./scenes/OutGoingStock/OutGoingStock"
import AADDOutGoingStock from "./scenes/AADDOutGoingStock/AADDOutGoingStock"

import InventoryData from "./scenes/InventoryData/InventoryData.jsx";
import FactorySupply from "./scenes/FactorySupply/FactorySupply"
import FactoryStock from "./scenes/FactoryStock/FactoryStock";
import AgenaStock from "./scenes/AgenaStock/AgenaStock";
import WareHouseLogistics from "./scenes/WareHouseLogistics/WareHouseLogistics";
import WareHouseShipping from "./scenes/WareHouseShipping/WareHouseShipping";
import SiteStock from "./scenes/SiteStock/SiteStock";

import IncomingRequest from "./scenes/IncomingRequest/IncomingRequest";
import RawRequest from "./scenes/RawRequest/RawRequest";
import RequestPurchase from "./scenes/RequestPurchase/RequestPurchase"

import Labels from "./scenes/Labels/Labels";
import Preform from "./scenes/Perform/Perform";
import Caps from "./scenes/Cap/Cap";
import ProductionWareHouseRequest from "./scenes/ProductionWareHouseRequest/ProductionWareHouseRequest"
import InventoryRawAccess from "./scenes/Inventory-Raw-Access/Inventory-Raw-Access";
import AgenaIncomingRequest from "./scenes/AgenaIncomingRequest/AgenaIncomingRequest";
import  WolketieWareHouseRequest from "./scenes/WolketieWareHouseRequest/WolketieWareHouseRequest";
import AdissAbabaWareHouseRequest from "./scenes/AdissAbabaWareHouseRequest/AdissAbabaWareHouseRequest"

import ProudctionWareHouseStatus from "./scenes/ProductionWareHouseStatus/ProductionWareHouseStatus";
import AgenaIncomingStatus from "./scenes/AgenaIncomingStatus/AgenaIncomingStatus";
import WolketieWareHouseStatus from "./scenes/WolketieWareHouseStatus/WolketieWareHouseStatus";
import AdissAbabaWareHouseStatus from "./scenes/AdissAbabaWareHouseStatus/AdissAbabaWareHouseStatus";




import InventoryReturnAgena from "./scenes/InventoryReturnAgena/InventoryReturnAgena";
import AADDInventoryReturnAgena from "./scenes/AADDInventoryAgena/AADDInventoryAgena"
import InventoryStatusAgena from "./scenes/InventoryStatusAgena/InventoryStatusAgena";

import InventoryReturnWolkete from "./scenes/InventoryReturnWolkete/InventoryReturnWolkete";
import AADDInventoryReturnWolkete from "./scenes/AADDInventoryWolkete/AADDInventoryWolkete"
import InventoryStatusWolkete from "./scenes/InventoryStatusWolkete/InventoryStatusWolkete";

import AllSalesOrderSummary from "./scenes/AllSales/AllSales.jsx";
import PromotionWareHouseStatus from "./scenes/PromotionWareHouseStatus/PromotionWareHouseStatus.jsx";
import PromotionWareHouseRequest from "./scenes/PromotionWareHouseRequest/PromotionWareHouseRequest.jsx";
import LoadInventoryRequest from "./scenes/load-inventory/load-inventory.jsx";
import FinanceLedger from "./scenes/FinanceLedger/FinanceLeder.jsx";

import UserLocationScreen from "./scenes/CustomersTracker/CustomersTracker.jsx";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const accessToken = localStorage.getItem("accessToken");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();



  const isHome = window.location.pathname === "/";

  const renderRoutesBasedOnRole = () => {
    if (role === "CSO") {
      return (
        <>
          <Route path="/Dashboard" element={<Dashboard />} /> 
       

          <Route path="/purchase" element={<SalesOrder />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/CSOMobileInventoryApprove" element={<CSOMobileInventoryApprove />}/>
          <Route path="/aaddorders" element={<Order />} />
          <Route path="/AADDOrder"element={<AADDOrder />} />
          <Route path="/CSOPaymentProcess" element={<CSOPaymentProcess />} />
          <Route path="/purchase" element={<SalesOrder />} />   //CSO Only
          <Route path="/orders" element={<Order/>} /> //CSO Only
          <Route path="/aadd-reload" element={<AADDReload/>} /> //CSO Only
          <Route path="/CSOMobileInventoryApprove" element={<CSOMobileInventoryApprove />} /> //cso only
    
          <Route path="/customerRegister" element={<CustomerRegister />} />
          <Route path="/warehouse-price-history" element={<PriceHistoryWareHouse  />} />
          <Route path="/salesRegisteration" element={<CreateSalesPerson />} />
          <Route path="/plateRegisteration" element={<CreatePlate />} />
          <Route path="/salesRegisteration" element={<CreateSalesPerson />} /> //CSO 
          <Route path="/customerRegister" element={<CustomerRegister />} /> //CSO 
          <Route path="/ledger-Deposit" element={<LedgerPayment />} /> //CSO
          <Route path="/return-Deposit" element={<ReturnDeposit />} /> //CSO 
          <Route path="/remote-order" element={<RemoteOrder />} /> //CSO 
        </>
      );
    } else if (role === "SDM") {
      return (
        <>
          <Route path="/Dashboard" element={<Dashboard />} /> 
         
           
            <Route
            path="/SMDPaymentApproveAA"
            element={<SMDPaymentApprovePageAA />}
          />
        <Route path="/location-tracker" element={<UserLocationScreen />} />

          <Route
            path="/SMDPaymentApproveUPC"
            element={<SMDPaymentApprovePageUPC />}
          />
          <Route path="/warehouse-price-history" element={<PriceHistoryWareHouse  />} />
          <Route path="/smdAADD-Approve" element={<SMDAADDApprovePage />} />
          <Route path="/set-price" element={<SetPrice />} />
          <Route path="/SMDPaymentApprove" element={<SMDPaymentApprovePage />} /> //SMD ONly
          <Route path="/smdAADD-Approve" element={<SMDAADDApprovePage />} /> //smd only

        </>
      );  

    } else if (role === "BM") {
      return (
        <>
          <Route path="/Dashboard" element={<Dashboard />} /> 
          <Route
            path="/SMDPaymentApprove"
            element={<SMDPaymentApprovePage />}
          />
          <Route path="/warehouse-price-history" element={<PriceHistoryWareHouse  />} />
          <Route path="/smdAADD-Approve" element={<SMDAADDApprovePage />} />
          <Route path="/set-price" element={<SetPrice />} />
          <Route path="/SMDPaymentApprove" element={<SMDPaymentApprovePage />} /> //SMD ONly
          <Route path="/smdAADD-Approve" element={<SMDAADDApprovePage />} /> //smd only
          <Route path="/FMAADDApprovePage" element={<FMAADDApprovePage />} /> //FM ONLY 
          
        </>
      );
    } else if (role === "FINANCE") {
      return (
        <>
          <Route path="/Dashboard" element={<Dashboard />} /> 
          <Route
            path="/SalesOrderVerificationPage"
            element={<SalesOrderVerificationPage />}
          />
          <Route path="/warehouse-price-history" element={<PriceHistoryWareHouse  />} />
          <Route path="/aads-pending" element={<AADSPending />} />
          <Route path="/aads-finance-approve" element={<AADSFinanceApprove />} /> 
          <Route path="/SalesOrderVerificationPage" element={<SalesOrderVerificationPage />} /> //Finance only 
          <Route path="/MobileInventoryVerificationPage" element={<MobileInventoryVerificationPage />} /> //Finace only 
          <Route path="/aads-pending" element={<AADSPending />} /> //finance only 
          <Route path="/set-price" element={<SetPrice />} /> //SDM only 
          <Route path="/ledger-Deposit" element={<LedgerPayment />} /> //CSO
          <Route path="/Supervisor-ledger-Deposit" element={<MobileFinanceLedgerApprove />} /> //CSO
          <Route path="/finance-ledger-data" element={<FinanceLedger />} /> //CSO

        </>
      );
    } else if (role === "FM") {
      return (
        <>
          <Route path="/Dashboard" element={<Dashboard />} /> 
          <Route path="/aads-pending" element={<AADSPending />} />
          <Route path="/SalesOrderApprovePage" element={<SalesOrderApprovePage />}/>
          <Route path="/FMAADDApprovePage" element={<FMAADDApprovePage />} /> //FM ONLY 
          <Route path="/aads-finance-approve" element={<AADSFinanceApprove />} /> 
          <Route path="/customerRegister" element={<CustomerRegister />} />
          <Route path="/finance-ledger-approve" element={<FinanceLedgerApprove />} /> //SDM only 
          <Route path="/warehouse-price-history" element={<PriceHistoryWareHouse  />} />
            <Route path="/finance-ledger-data" element={<FinanceLedger />} /> //CSO

        </>
      );
    } else if (role === "LOGISTIC") {
      return (
        <>
          <Route path="/Dashboard" element={<Dashboard />} /> 
          <Route path="/AADD-logistics" element={<AADDLogisticsSummary />} />
          <Route path="/plateRegisteration" element={<CreatePlate />} />
          <Route path="/inventory-logistics" element={<LoadInventoryRequest />} />
          <Route path="/Plates" element={<Plates />} /> //authetnicated
          <Route path="/warehouse-price-history" element={<PriceHistoryWareHouse  />} />
        </>
      );
    } else if (role === "GM") {

      return (
        <>
          <Route path="/Dashboard" element={<Dashboard />} /> 
          <Route path="/customerApprove" element={<CustomerApprove />} />
          <Route path="/SalesPersonApprove" element={<SalesPersonApprove />} />
          <Route path="/PlateApprove" element={<PlateApprove />} />
          <Route path="/set-price" element={<SetPrice />} /> //SDM on 
          <Route path="/warehouse-price-history" element={<PriceHistoryWareHouse  />} />
          <Route path="/location-tracker" element={<UserLocationScreen />} />
                  <Route
            path="/all-sales"
            element={<AllSalesOrderSummary />}

          />
             <Route path="/inventory-logistics" element={<LoadInventoryRequest />} />
   <Route path="/finance-ledger-data" element={<FinanceLedger />} /> //CSO
        </>
      );
    } else if (role === "Inventory") {
      return (
        <>
         <Route path="/Dashboard-Inventory" element={<DashboardInv />} /> 
          <Route path="/Dashboard" element={<Dashboard />} /> 
        <Route path="/inventory-return" element={<InventoryReturn/>} /> //Inventory Only 
              <Route path="/AADD-Inventory-Return" element={<AADDInventoryReturn />} /> //Inventory only 
              <Route path="/return-status" element={<InventoryStatus />} /> //Inventory only 

            <Route path="/return-form" element={<InventoryReturnForm />} /> 
            <Route path="/warehouse-price-history" element={<PriceHistoryWareHouse  />} />
<Route path="/location-tracker" element={<UserLocationScreen />} />
           <Route
            path="/all-sales"
            element={<AllSalesOrderSummary />}
          />
                     
<Route path="/item/Labels/" element={<Labels />} />
<Route path="/item/Preform/" element={<Preform />} />
<Route path="/item/Caps/" element={<Caps />} />


<Route path="/stock-request" element={<StockRequest />} /> 
<Route path="/stock-request-approve" element={<StockRequestApprovePage />} /> 
 
<Route path="/incoming-request-production" element={<ProductionWareHouseRequest />} /> 
<Route path="/incoming-request-agena" element={<AgenaIncomingRequest />} /> 
<Route path="/incoming-request-wolketie" element={<WolketieWareHouseRequest />} /> 
<Route path="/incoming-request-aa" element={<AdissAbabaWareHouseRequest />} /> 


<Route path="/status-request-production" element={<ProudctionWareHouseStatus />} /> 
<Route path="/status-request-agena" element={<AgenaIncomingStatus />} /> 
<Route path="/status-request-wolketie" element={<WolketieWareHouseStatus />} /> 
<Route path="/status-request-aa" element={<AdissAbabaWareHouseStatus/>} /> 

<Route path="/inventory-return" element={<InventoryReturn/>} /> //Inventory Only 
<Route path="/AADD-Inventory-Return" element={<AADDInventoryReturn />} /> //Inventory only 
<Route path="/return-status" element={<InventoryStatus />} /> //Inventory only 

<Route path="/inventory-return-Agena" element={<InventoryReturnAgena/>} /> //Inventory Only 
<Route path="/AADD-Inventory-Return-Agena" element={<AADDInventoryReturnAgena />} /> //Inventory only 
<Route path="/return-status-Agena" element={<InventoryStatusAgena />} /> //Inventory only 


<Route path="/inventory-return-Wolkete" element={<InventoryReturnWolkete/>} /> //Inventory Only 
<Route path="/AADD-Inventory-Return-Wolkete" element={<AADDInventoryReturnWolkete />} /> //Inventory only 
<Route path="/return-status-Wolkete" element={<InventoryStatusWolkete />} /> //Inventory only 

<Route path="/incoming-stock" element={<IncomingStock />} />
<Route path="/outgoing-stock" element={<OutGoingStock />} />
<Route path="/aadd-outgoing-stock" element={<AADDOutGoingStock />} />


<Route path="/factory-supply" element={<FactorySupply />} />
<Route path="/factory-stock" element={<FactoryStock />} />
<Route path="/agena-stock" element={<AgenaStock />} />
<Route path="/incoming-request" element={<IncomingRequest />} />

<Route path="/warehouse-logistics" element={<WareHouseLogistics />} />
<Route path="/warehouse-shipping" element={<WareHouseShipping />} />
<Route path="/site-stock" element={<SiteStock />} />
<Route path="/raw-request" element={<RawRequest />} />
<Route path="/purchase-request" element={<RequestPurchase />} />
<Route path="/inventory-raw-access" element={<InventoryRawAccess />} />
        </>
      );
    }  else if (role === "Inventory") {
      return (
        <>
         <Route path="/Dashboard-Inventory" element={<DashboardInv />} /> 
          <Route path="/Dashboard" element={<Dashboard />} /> 
        <Route path="/inventory-return" element={<InventoryReturn/>} /> //Inventory Only 
              <Route path="/AADD-Inventory-Return" element={<AADDInventoryReturn />} /> //Inventory only 
              <Route path="/return-status" element={<InventoryStatus />} /> //Inventory only 

            <Route path="/return-form" element={<InventoryReturnForm />} /> 
            <Route path="/warehouse-price-history" element={<PriceHistoryWareHouse  />} />

           <Route
            path="/all-sales"
            element={<AllSalesOrderSummary />}
          />
          <Route path="/location-tracker" element={<UserLocationScreen />} />
                     
                     
<Route path="/item/Labels/" element={<Labels />} />
<Route path="/item/Preform/" element={<Preform />} />
<Route path="/item/Caps/" element={<Caps />} />


<Route path="/stock-request" element={<StockRequest />} /> 
<Route path="/stock-request-approve" element={<StockRequestApprovePage />} /> 
 
<Route path="/incoming-request-production" element={<ProductionWareHouseRequest />} /> 
<Route path="/incoming-request-agena" element={<AgenaIncomingRequest />} /> 
<Route path="/incoming-request-wolketie" element={<WolketieWareHouseRequest />} /> 
<Route path="/incoming-request-aa" element={<AdissAbabaWareHouseRequest />} /> 


<Route path="/status-request-production" element={<ProudctionWareHouseStatus />} /> 
<Route path="/status-request-agena" element={<AgenaIncomingStatus />} /> 
<Route path="/status-request-wolketie" element={<WolketieWareHouseStatus />} /> 
<Route path="/status-request-aa" element={<AdissAbabaWareHouseStatus/>} /> 

<Route path="/inventory-return" element={<InventoryReturn/>} /> //Inventory Only 
<Route path="/AADD-Inventory-Return" element={<AADDInventoryReturn />} /> //Inventory only 
<Route path="/return-status" element={<InventoryStatus />} /> //Inventory only 

<Route path="/inventory-return-Agena" element={<InventoryReturnAgena/>} /> //Inventory Only 
<Route path="/AADD-Inventory-Return-Agena" element={<AADDInventoryReturnAgena />} /> //Inventory only 
<Route path="/return-status-Agena" element={<InventoryStatusAgena />} /> //Inventory only 


<Route path="/inventory-return-Wolkete" element={<InventoryReturnWolkete/>} /> //Inventory Only 
<Route path="/AADD-Inventory-Return-Wolkete" element={<AADDInventoryReturnWolkete />} /> //Inventory only 
<Route path="/return-status-Wolkete" element={<InventoryStatusWolkete />} /> //Inventory only 

<Route path="/incoming-stock" element={<IncomingStock />} />
<Route path="/outgoing-stock" element={<OutGoingStock />} />
<Route path="/aadd-outgoing-stock" element={<AADDOutGoingStock />} />


<Route path="/factory-supply" element={<FactorySupply />} />
<Route path="/factory-stock" element={<FactoryStock />} />
<Route path="/agena-stock" element={<AgenaStock />} />
<Route path="/incoming-request" element={<IncomingRequest />} />

<Route path="/warehouse-logistics" element={<WareHouseLogistics />} />
<Route path="/warehouse-shipping" element={<WareHouseShipping />} />
<Route path="/site-stock" element={<SiteStock />} />
<Route path="/raw-request" element={<RawRequest />} />
<Route path="/purchase-request" element={<RequestPurchase />} />
<Route path="/inventory-raw-access" element={<InventoryRawAccess />} />
        </>
      );
    }  else if (role === "ProductionInventory") {
      return (
        <>
         <Route path="/Dashboard-Inventory" element={<DashboardInv />} /> 
          <Route path="/Dashboard" element={<Dashboard />} /> 
        <Route path="/inventory-return" element={<InventoryReturn/>} /> //Inventory Only 
              <Route path="/AADD-Inventory-Return" element={<AADDInventoryReturn />} /> //Inventory only 
              <Route path="/return-status" element={<InventoryStatus />} /> //Inventory only 

            <Route path="/return-form" element={<InventoryReturnForm />} /> 
            <Route path="/warehouse-price-history" element={<PriceHistoryWareHouse  />} />

           <Route
            path="/all-sales"
            element={<AllSalesOrderSummary />}
          />
                     
<Route path="/item/Labels/" element={<Labels />} />
<Route path="/item/Preform/" element={<Preform />} />
<Route path="/item/Caps/" element={<Caps />} />


<Route path="/stock-request" element={<StockRequest />} /> 
<Route path="/stock-request-approve" element={<StockRequestApprovePage />} /> 
 
<Route path="/incoming-request-production" element={<ProductionWareHouseRequest />} /> 
<Route path="/incoming-request-agena" element={<AgenaIncomingRequest />} /> 
<Route path="/incoming-request-wolketie" element={<WolketieWareHouseRequest />} /> 
<Route path="/incoming-request-aa" element={<AdissAbabaWareHouseRequest />} /> 


<Route path="/status-request-production" element={<ProudctionWareHouseStatus />} /> 
<Route path="/status-request-agena" element={<AgenaIncomingStatus />} /> 
<Route path="/status-request-wolketie" element={<WolketieWareHouseStatus />} /> 
<Route path="/status-request-aa" element={<AdissAbabaWareHouseStatus/>} /> 

<Route path="/inventory-return" element={<InventoryReturn/>} /> //Inventory Only 
<Route path="/AADD-Inventory-Return" element={<AADDInventoryReturn />} /> //Inventory only 
<Route path="/return-status" element={<InventoryStatus />} /> //Inventory only 

<Route path="/inventory-return-Agena" element={<InventoryReturnAgena/>} /> //Inventory Only 
<Route path="/AADD-Inventory-Return-Agena" element={<AADDInventoryReturnAgena />} /> //Inventory only 
<Route path="/return-status-Agena" element={<InventoryStatusAgena />} /> //Inventory only 


<Route path="/inventory-return-Wolkete" element={<InventoryReturnWolkete/>} /> //Inventory Only 
<Route path="/AADD-Inventory-Return-Wolkete" element={<AADDInventoryReturnWolkete />} /> //Inventory only 
<Route path="/return-status-Wolkete" element={<InventoryStatusWolkete />} /> //Inventory only 

<Route path="/incoming-stock" element={<IncomingStock />} />
<Route path="/outgoing-stock" element={<OutGoingStock />} />
<Route path="/aadd-outgoing-stock" element={<AADDOutGoingStock />} />


<Route path="/factory-supply" element={<FactorySupply />} />
<Route path="/factory-stock" element={<FactoryStock />} />
<Route path="/agena-stock" element={<AgenaStock />} />
<Route path="/incoming-request" element={<IncomingRequest />} />

<Route path="/warehouse-logistics" element={<WareHouseLogistics />} />
<Route path="/warehouse-shipping" element={<WareHouseShipping />} />
<Route path="/site-stock" element={<SiteStock />} />
<Route path="/raw-request" element={<RawRequest />} />
<Route path="/purchase-request" element={<RequestPurchase />} />
<Route path="/inventory-raw-access" element={<InventoryRawAccess />} />
        </>
      );
    }   else if (role === "AgenaInventory") {
      return (
        <>
         <Route path="/Dashboard-Inventory" element={<DashboardInv />} /> 
          <Route path="/Dashboard" element={<Dashboard />} /> 
        <Route path="/inventory-return" element={<InventoryReturn/>} /> //Inventory Only 
              <Route path="/AADD-Inventory-Return" element={<AADDInventoryReturn />} /> //Inventory only 
              <Route path="/return-status" element={<InventoryStatus />} /> //Inventory only 

            <Route path="/return-form" element={<InventoryReturnForm />} /> 
            <Route path="/warehouse-price-history" element={<PriceHistoryWareHouse  />} />

           <Route
            path="/all-sales"
            element={<AllSalesOrderSummary />}
          />
                     
<Route path="/item/Labels/" element={<Labels />} />
<Route path="/item/Preform/" element={<Preform />} />
<Route path="/item/Caps/" element={<Caps />} />


<Route path="/stock-request" element={<StockRequest />} /> 
<Route path="/stock-request-approve" element={<StockRequestApprovePage />} /> 
 
<Route path="/incoming-request-production" element={<ProductionWareHouseRequest />} /> 
<Route path="/incoming-request-agena" element={<AgenaIncomingRequest />} /> 
<Route path="/incoming-request-wolketie" element={<WolketieWareHouseRequest />} /> 
<Route path="/incoming-request-aa" element={<AdissAbabaWareHouseRequest />} /> 


<Route path="/status-request-production" element={<ProudctionWareHouseStatus />} /> 
<Route path="/status-request-agena" element={<AgenaIncomingStatus />} /> 
<Route path="/status-request-wolketie" element={<WolketieWareHouseStatus />} /> 
<Route path="/status-request-aa" element={<AdissAbabaWareHouseStatus/>} /> 

<Route path="/inventory-return" element={<InventoryReturn/>} /> //Inventory Only 
<Route path="/AADD-Inventory-Return" element={<AADDInventoryReturn />} /> //Inventory only 
<Route path="/return-status" element={<InventoryStatus />} /> //Inventory only 

<Route path="/inventory-return-Agena" element={<InventoryReturnAgena/>} /> //Inventory Only 
<Route path="/AADD-Inventory-Return-Agena" element={<AADDInventoryReturnAgena />} /> //Inventory only 
<Route path="/return-status-Agena" element={<InventoryStatusAgena />} /> //Inventory only 


<Route path="/inventory-return-Wolkete" element={<InventoryReturnWolkete/>} /> //Inventory Only 
<Route path="/AADD-Inventory-Return-Wolkete" element={<AADDInventoryReturnWolkete />} /> //Inventory only 
<Route path="/return-status-Wolkete" element={<InventoryStatusWolkete />} /> //Inventory only 

<Route path="/incoming-stock" element={<IncomingStock />} />
<Route path="/outgoing-stock" element={<OutGoingStock />} />
<Route path="/aadd-outgoing-stock" element={<AADDOutGoingStock />} />


<Route path="/factory-supply" element={<FactorySupply />} />
<Route path="/factory-stock" element={<FactoryStock />} />
<Route path="/agena-stock" element={<AgenaStock />} />
<Route path="/incoming-request" element={<IncomingRequest />} />

<Route path="/warehouse-logistics" element={<WareHouseLogistics />} />
<Route path="/warehouse-shipping" element={<WareHouseShipping />} />
<Route path="/site-stock" element={<SiteStock />} />
<Route path="/raw-request" element={<RawRequest />} />
<Route path="/purchase-request" element={<RequestPurchase />} />
<Route path="/inventory-raw-access" element={<InventoryRawAccess />} />
        </>
      );
    }   else if (role === "AdissAbabaInventory") {
      return (
        <>
         <Route path="/Dashboard-Inventory" element={<DashboardInv />} /> 
          <Route path="/Dashboard" element={<Dashboard />} /> 
        <Route path="/inventory-return" element={<InventoryReturn/>} /> //Inventory Only 
              <Route path="/AADD-Inventory-Return" element={<AADDInventoryReturn />} /> //Inventory only 
              <Route path="/return-status" element={<InventoryStatus />} /> //Inventory only 

            <Route path="/return-form" element={<InventoryReturnForm />} /> 
            <Route path="/warehouse-price-history" element={<PriceHistoryWareHouse  />} />

           <Route
            path="/all-sales"
            element={<AllSalesOrderSummary />}
          />
                     
<Route path="/item/Labels/" element={<Labels />} />
<Route path="/item/Preform/" element={<Preform />} />
<Route path="/item/Caps/" element={<Caps />} />


<Route path="/stock-request" element={<StockRequest />} /> 
<Route path="/stock-request-approve" element={<StockRequestApprovePage />} /> 
 
<Route path="/incoming-request-production" element={<ProductionWareHouseRequest />} /> 
<Route path="/incoming-request-agena" element={<AgenaIncomingRequest />} /> 
<Route path="/incoming-request-wolketie" element={<WolketieWareHouseRequest />} /> 
<Route path="/incoming-request-aa" element={<AdissAbabaWareHouseRequest />} /> 


<Route path="/status-request-production" element={<ProudctionWareHouseStatus />} /> 
<Route path="/status-request-agena" element={<AgenaIncomingStatus />} /> 
<Route path="/status-request-wolketie" element={<WolketieWareHouseStatus />} /> 
<Route path="/status-request-aa" element={<AdissAbabaWareHouseStatus/>} /> 

<Route path="/inventory-return" element={<InventoryReturn/>} /> //Inventory Only 
<Route path="/AADD-Inventory-Return" element={<AADDInventoryReturn />} /> //Inventory only 
<Route path="/return-status" element={<InventoryStatus />} /> //Inventory only 

<Route path="/inventory-return-Agena" element={<InventoryReturnAgena/>} /> //Inventory Only 
<Route path="/AADD-Inventory-Return-Agena" element={<AADDInventoryReturnAgena />} /> //Inventory only 
<Route path="/return-status-Agena" element={<InventoryStatusAgena />} /> //Inventory only 


<Route path="/inventory-return-Wolkete" element={<InventoryReturnWolkete/>} /> //Inventory Only 
<Route path="/AADD-Inventory-Return-Wolkete" element={<AADDInventoryReturnWolkete />} /> //Inventory only 
<Route path="/return-status-Wolkete" element={<InventoryStatusWolkete />} /> //Inventory only 

<Route path="/incoming-stock" element={<IncomingStock />} />
<Route path="/outgoing-stock" element={<OutGoingStock />} />
<Route path="/aadd-outgoing-stock" element={<AADDOutGoingStock />} />


<Route path="/factory-supply" element={<FactorySupply />} />
<Route path="/factory-stock" element={<FactoryStock />} />
<Route path="/agena-stock" element={<AgenaStock />} />
<Route path="/incoming-request" element={<IncomingRequest />} />

<Route path="/warehouse-logistics" element={<WareHouseLogistics />} />
<Route path="/warehouse-shipping" element={<WareHouseShipping />} />
<Route path="/site-stock" element={<SiteStock />} />
<Route path="/raw-request" element={<RawRequest />} />
<Route path="/purchase-request" element={<RequestPurchase />} />
<Route path="/inventory-raw-access" element={<InventoryRawAccess />} />
        </>
      );
    } else if (role === "superAdmin") {
      return (
        <>
  <Route path="/Dashboard" element={<Dashboard />} />
  <Route path="/Dashboard-Inventory" element={<DashboardInv />} /> 
<Route path="/purchase" element={<SalesOrder />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/CSOMobileInventoryApprove" element={<CSOMobileInventoryApprove />}/>
          <Route path="/aaddorders" element={<Order />} />
          <Route path="/AADDOrder"element={<AADDOrder />} />
          <Route path="/aadd-reload" element={<AADDReload/>} /> //CSO Only
          <Route path="/return-Deposit" element={<ReturnDeposit />} /> //CSO 
          <Route path="/CSOPaymentProcess" element={<CSOPaymentProcess />} />
           <Route
            path="/all-sales"
            element={<AllSalesOrderSummary />}
          />

           <Route path="/finance-ledger-data" element={<FinanceLedger />} /> //CSO

          <Route path="/purchase" element={<SalesOrder />} />   //CSO Only
          <Route path="/orders" element={<Order/>} /> //CSO Only
          <Route path="/CSOMobileInventoryApprove" element={<CSOMobileInventoryApprove />} /> //cso only 
          <Route path="/warehouse-price-history" element={<PriceHistoryWareHouse  />} />
          <Route path="/SalesPersonApprove" element={<SalesPersonApprove />} />
          <Route path="/PlateApprove" element={<PlateApprove />} />
          <Route path="/salesRegisteration" element={<CreateSalesPerson />} />
          <Route path="/plateRegisteration" element={<CreatePlate />} />
          <Route path="/salesRegisteration" element={<CreateSalesPerson />} /> //CSO 
          <Route path="/customerRegister" element={<CustomerRegister />} /> 
          <Route path= "/customerApprove" element={<CustomerApprove />} /> 
          <Route path= "/customerMobile" element={<CustomersMobile />} /> 

          <Route path="/ledger-Deposit" element={<LedgerPayment />} /> //CSO 
          <Route path="/smdAADD-Approve" element={<SMDAADDApprovePage />} />
          <Route path="/set-price" element={<SetPrice />} />
          <Route
            path="/SMDPaymentApproveAA"
            element={<SMDPaymentApprovePageAA />}
          />
          <Route
            path="/SMDPaymentApproveUPC"
            element={<SMDPaymentApprovePageUPC />}
          />
          
          <Route path="/smdAADD-Approve" element={<SMDAADDApprovePage />} /> //smd only
          <Route path="/set-price" element={<SetPrice />} /> //SDM only 

          <Route path="/finance-ledger-approve" element={<FinanceLedgerApprove />} /> //SDM only 
          <Route path="/AADD-logistics" element={<AADDLogisticsSummary />} />

          <Route path="/AADD-logistics" element={<AADDLogisticsSummary />} />
  <Route path="/inventory-logistics" element={<LoadInventoryRequest />} />
          <Route
            path="/SalesOrderVerificationPage"
            element={<SalesOrderVerificationPage />}
          />

           <Route
            path="/all-sales"
            element={<AllSalesOrderSummary />}
          />

          <Route path="/aads-pending" element={<AADSPending />} />
          <Route path="/aads-finance-approve" element={<AADSFinanceApprove />} /> 
          <Route path="/SalesOrderVerificationPage" element={<SalesOrderVerificationPage />} /> //Finance only 
          <Route path="/MobileInventoryVerificationPage" element={<MobileInventoryVerificationPage />} /> //Finace only 
          <Route path="/aads-pending" element={<AADSPending />} /> //f
          <Route path="/Supervisor-ledger-Deposit" element={<MobileFinanceLedgerApprove />} /> //CSO

          <Route path="/SalesOrderApprovePage" element={<SalesOrderApprovePage />}/>
          <Route path="/FMAADDApprovePage" element={<FMAADDApprovePage />} /> //FM ONLY 
          <Route path="/aads-finance-approve" element={<AADSFinanceApprove />} /> 
          <Route path="/ledger-balance" element={<LedgerBalance />} />
            <Route path="/inventory-return" element={<InventoryReturn/>} /> //Inventory Only 
            <Route path="/AADD-Inventory-Return" element={<AADDInventoryReturn />} /> //Inventory only 
             <Route path="/return-status" element={<InventoryStatus />} /> //Inventory only 
            <Route path="/return-form" element={<InventoryReturnForm />} />
            <Route path="/MonthlyPage" element={<MonthlyPage  />} />
            <Route path="/staff-register" element={<StaffRegister />} />
            <Route path="/remote-order" element={<RemoteOrder />} /> //CSO 
          <Route path="/chart" element={<ChartJSS />} />


          <Route path="/Dashboard-Inventory" element={<Dashboard />} /> 


             
<Route path="/item/Labels/" element={<Labels />} />
<Route path="/item/Preform/" element={<Preform />} />
<Route path="/item/Caps/" element={<Caps />} />


<Route path="/stock-request" element={<StockRequest />} /> 
<Route path="/stock-request-approve" element={<StockRequestApprovePage />} /> 


<Route path="/promotion-request" element={<PromotionWareHouseRequest />} /> 
<Route path="/promotion-status" element={<PromotionWareHouseStatus />} /> 



<Route path="/incoming-request-production" element={<ProductionWareHouseRequest />} /> 
<Route path="/incoming-request-agena" element={<AgenaIncomingRequest />} /> 
<Route path="/incoming-request-wolketie" element={<WolketieWareHouseRequest />} /> 
<Route path="/incoming-request-aa" element={<AdissAbabaWareHouseRequest />} /> 


<Route path="/status-request-production" element={<ProudctionWareHouseStatus />} /> 
<Route path="/status-request-agena" element={<AgenaIncomingStatus />} /> 
<Route path="/status-request-wolketie" element={<WolketieWareHouseStatus />} /> 
<Route path="/status-request-aa" element={<AdissAbabaWareHouseStatus/>} /> 

<Route path="/inventory-return" element={<InventoryReturn/>} /> //Inventory Only 
<Route path="/AADD-Inventory-Return" element={<AADDInventoryReturn />} /> //Inventory only 
<Route path="/return-status" element={<InventoryStatus />} /> //Inventory only 

<Route path="/inventory-return-Agena" element={<InventoryReturnAgena/>} /> //Inventory Only 
<Route path="/AADD-Inventory-Return-Agena" element={<AADDInventoryReturnAgena />} /> //Inventory only 
<Route path="/return-status-Agena" element={<InventoryStatusAgena />} /> //Inventory only 


<Route path="/inventory-return-Wolkete" element={<InventoryReturnWolkete/>} /> //Inventory Only 
<Route path="/AADD-Inventory-Return-Wolkete" element={<AADDInventoryReturnWolkete />} /> //Inventory only 
<Route path="/return-status-Wolkete" element={<InventoryStatusWolkete />} /> //Inventory only 

<Route path="/incoming-stock" element={<IncomingStock />} />
<Route path="/outgoing-stock" element={<OutGoingStock />} />
<Route path="/aadd-outgoing-stock" element={<AADDOutGoingStock />} />


<Route path="/factory-supply" element={<FactorySupply />} />
<Route path="/factory-stock" element={<FactoryStock />} />
<Route path="/agena-stock" element={<AgenaStock />} />
<Route path="/incoming-request" element={<IncomingRequest />} />

<Route path="/warehouse-logistics" element={<WareHouseLogistics />} />
<Route path="/warehouse-shipping" element={<WareHouseShipping />} />
<Route path="/site-stock" element={<SiteStock />} />
<Route path="/raw-request" element={<RawRequest />} />
<Route path="/purchase-request" element={<RequestPurchase />} />
<Route path="/inventory-raw-access" element={<InventoryRawAccess />} />

<Route path="/location-tracker" element={<UserLocationScreen />} />
        </>
      );
    }
    return null; // Unknown role, no routes to render
};



  useEffect(() => {
    if (!accessToken) {
      navigate("/");
    } else {
      const storedRole = localStorage.getItem("role");
      console.log(storedRole)
      if (role !== storedRole) {
        navigate("/Dashboard");
      }
    }
  }, [accessToken, navigate, role]);


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isHome ? null : <Sidebar isSidebar={isSidebar} />}
          <main className="content">
            {isHome ? null : <Topbar setIsSidebar={setIsSidebar} />}
            <Routes>
           
            <Route path="/" element={<Login />} />
              <Route path="/Dashboard" element={<Dashboard />} /> 
              {renderRoutesBasedOnRole()}

              <Route path="/AADDOrder" element={<AADDOrder/>} />
              <Route path="/profile" element={<Profile />} />
 
              <Route path="/staff-register" element={<StaffRegister />} />
              <Route path="/ledger-balance" element={<LedgerBalance />} />
              <Route path="/daily-page" element={<DailyPage />} />
              
              <Route path="/paginate" element={<Paginated/>} />

              <Route path="/inventory-data" element={<InventoryData/>} />  
             
               
              <Route path="/order-summary" element={<SalesOrderSummary/>} /> //authetnicated only 
              <Route path="/AADD-order-summary" element={<AADDSalesOrderSummary />} /> //authetnicated only 
              
              <Route path="/aads-invoice" element={<AADSInvoice/>} /> // authetnicated only 
              <Route path="/aads" element={<AADS/>} /> //authetnicated only 
              
              <Route path="/list-price" element={<PriceList />} /> //authetnicated only 
              
              <Route path="/customers" element={<Customers />} /> //authetnicated only 
            
   
              <Route path="/SalesPerson" element={<SalesPerson />} /> //authetnicated
              <Route path="/staff-members" element={<StaffMember />} />            
              
              <Route path="/Plates" element={<Plates />} /> //authetnicated

              <Route path="/geography" element={<Geography />} /> //authetnicated
              <Route path="/daily" element={<Daily />} />//authetnicated
              <Route path="/overview" element={<Overview />} /> //authetnicated
              <Route path="/month" element={<Month />} /> //authetnicated
              <Route path="/breakdown" element={<Breakdown />} /> //authetnicated
        
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Forms />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
            
              <Route path="/payment" element={<Payment />} />
              <Route path="/sort_price/Area1" element={<Area1 />} />
              <Route path="/sort_price/Area1B" element={<Area1B />} />
              <Route path="/sort_price/Area2" element={<Area2 />} />
              <Route path="/sort_price/Area3" element={<Area3 />} />
              <Route path="/sort_price/EastMarket" element={<EastMarket />} />
              <Route path="/sort_price/AdissAbabaMarket" element={<AdissAbabaMarket />} />
              <Route path="/sort_price/AdissAbabaMarket2" element={<AdissAbabaMarket2 />} />
              <Route path="/sort_price/Area8" element={<Area8 />} />
            
           
             
             
             
              <Route path="/geography" element={<Geography />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/month" element={<Month />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/staff" element={<Staff />} />
             
             
           
             
             
          
            
            
             
            
            
           
           
             
             
              
             
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;