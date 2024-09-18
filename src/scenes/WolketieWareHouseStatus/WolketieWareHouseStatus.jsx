import React, { useEffect, useState } from "react";
import { Box, Button, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const WolketieWareHouseRequest = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [customerData, setCustomerData] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedRow, setSelectedRow] = useState(null);
  const [payment, setPayment] = useState("");
  const [inventory, setinventory] = useState("");
  const [plate_no, setplate_no] = useState("");
  const [Driver, setDriver] = useState("");
  const [finance_returned_issue, setfinance_returned_issue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL+"commerce/access-rawmtaerial/Wolketie/");
        const data = await response.json();
        setCustomerData(data);
      } catch (error) {
        console.error("Error fetching customer data:", error);
      }
    };

    fetchData();
  }, []);

  const handleUpdateClick = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL+`/commerce/status-rawmtaerial/Wolketie/`);
      const data = await response.json();
      setCustomerData(data);
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };


  const columns = [
    { field: "_id", headerName: "ID", flex: 0.5 },
    { field: "issue_store", headerName: "Issue Store", flex: 1 },
    { field: "recipant_store", headerName: "Recipant Store", flex: 1 },
    { field: "time", headerName: "Request Date", flex: 1 },

  ];

  const getRowId = (row) => row._id;

  const handleApprove = async (id) => {
    const formData = new FormData();
    formData.append('recipant_store_file', payment)
    try {
      const response = await fetch(process.env.REACT_APP_API_URL+`/commerce/accepted-rawmtaerial/${id}/`, {
        method: "PUT",
        body: formData,
      });
      const data = await response.json();
      console.log("Customer approved successfully:", data);
      handleUpdateClick()
      handleCloseModal()
      toast.success("Order Has been sent processed ");
      // You can update the customerData state or perform any other action here
    } catch (error) {
      console.error("Error approving customer:", error);
      toast.error("Error approving order");
    }
  };


  const handlePaymentChange = (event) => {
    const file = event.target.files[0];
    setPayment(file);
    };

  const handleRowClick = (params) => {
    setSelectedRow(params.row);
  };

  const handleCloseModal = () => {
    setSelectedRow(null);
  };


  
  return (
    <Box m="20px">
      <Header title="Status Request  Wolketie" subtitle="List of Orders that requires processing" />
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
          pagination
          pageSize={10}
          onPageChange={(newPage) => setPage(newPage + 1)}
          onRowClick={handleRowClick}
        />
      </Box>
      {selectedRow && (
        <Modal open={selectedRow !== null} onClose={handleCloseModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",        
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              width: "60%",
              fontFamily: "Arial, sans-serif",
              color: "#333",
              height:"80%",
              overflow: "auto",
            }}
          >
            <div>
              <TableContainer component={Paper}>
                <div style={{ textAlign: "center", padding: "10px" }}>
                  <Header
                    title="Incoming Request Factory"
                    subtitle="Order Detail that requires Approval"
                  />
                </div>
                <Table sx={{}} size="small" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell>{selectedRow._id}</TableCell>
                    </TableRow>
                  </TableHead>
  
                  <TableHead>
                    <TableRow>
                      <TableCell>Issue Store </TableCell>
                      <TableCell>{selectedRow.issue_store}</TableCell>
                    </TableRow>
                  </TableHead>

                  
                  <TableHead>
                    <TableRow>
                      <TableCell>Recipant Store </TableCell>
                      <TableCell>{selectedRow.recipant_store}</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableHead>
                    <TableRow>
                      <TableCell>Date </TableCell>
                      <TableCell>{selectedRow.time}</TableCell>
                    </TableRow>
                  </TableHead>
  
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Caps
                      </TableCell>
                      <TableCell>{selectedRow.Caps}</TableCell>
                    </TableRow>
                    

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Preform 18gm
                      </TableCell>
                      <TableCell>{selectedRow.Preform_18gm}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Preform 28gm
                      </TableCell>
                      <TableCell>{selectedRow.Preform_28gm}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Preform 40gm
                      </TableCell>
                      <TableCell>{selectedRow.Preform_40gm}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                      Shrink 35gm 
                      </TableCell>
                      <TableCell>{selectedRow.Shrink_35gm}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                      Shrink 38gm 
                      </TableCell>
                      <TableCell>{selectedRow.Shrink_38gm}</TableCell>
                    </TableRow>


                    <TableRow>
                      <TableCell component="th" scope="row">
                      Shrink 42gm 
                      </TableCell>
                      <TableCell>{selectedRow.Shrink_42gm}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                      Shrink 48gm 
                      </TableCell>
                      <TableCell>{selectedRow.Shrink_48gm}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                      Label 035ml 
                      </TableCell>
                      <TableCell>{selectedRow.Label_035ml}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                      Label 06ml 
                      </TableCell>
                      <TableCell>{selectedRow.Label_06ml}</TableCell>
                    </TableRow>


                    <TableRow>
                      <TableCell component="th" scope="row">
                      Label 1L 
                      </TableCell>
                      <TableCell>{selectedRow.Label_1Lgm}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                      Label 2L 
                      </TableCell>
                      <TableCell>{selectedRow.Label_2L}</TableCell>
                    </TableRow>


              
                    <TableRow>
                      <TableCell component="th" scope="row">
                      FG Standardized_035ml
                      </TableCell>
                      <TableCell>{selectedRow.FG_Standardized_035ml}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                      FG Standardized_06ml
                      </TableCell>
                      <TableCell>{selectedRow.FG_Standardized_06ml}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                      FG Standardized 1L
                      </TableCell>
                      <TableCell>{selectedRow.FG_Standardized_1L}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                      FG Standardized 2L
                      </TableCell>
                      <TableCell>{selectedRow.FG_Standardized_2l}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                      FG Standardized Total
                      </TableCell>
                      <TableCell>{selectedRow.FG_Standardized_Total}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                      FG Damaged_035ml
                      </TableCell>
                      <TableCell>{selectedRow.FG_Damaged_035ml}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                      FG Damaged_06ml
                      </TableCell>
                      <TableCell>{selectedRow.FG_Damaged_06ml}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                      FG Damaged_1L
                      </TableCell>
                      <TableCell>{selectedRow.FG_Damaged_1L}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                      FG Damaged 2L
                      </TableCell>
                      <TableCell>{selectedRow.FG_Damaged_2l}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                      FG Damaged Total
                      </TableCell>
                      <TableCell>{selectedRow.FG_Damaged_Total}</TableCell>
                    </TableRow>



                    <TableRow>
  <TableCell component="th" scope="row">
    Status
  </TableCell>
  <TableCell align="left">
    <Button
      variant="contained"
      color={selectedRow.is_ready ? "secondary" : "primary"}
    
      style={{
        borderRadius: "5px",
        backgroundColor: selectedRow.is_approved ? "green" : "yellow",
        color: "white",
        border: "none",
        cursor: "pointer",
        width: "100px",
        height: "40px",
        marginLeft: "10px",
      }}
    >
      {selectedRow.is_approved ? "Accepted" : "Await"}
    </Button>
  </TableCell>
</TableRow>



<TableRow>
                      <TableCell component="th" scope="row">
                      Accept DDO
                      </TableCell>
                      <TableCell>{selectedRow.issue_store_file}</TableCell>
                    </TableRow>

<TableRow>
<TableCell component="th" scope="row">
                  Upload DDO
                      </TableCell>

                      <TableCell align="left">
                      <input
  type="file"
  id="payment"
  onChange={handlePaymentChange}
  style={{ display: 'none' }}
/>
<Button
  component="span"
  color="secondary"
  variant="contained"
  style={{ width: '150px',  padding:"5px" }}
  onClick={() => {
    document.getElementById('payment').click();
  }}
>
  Attach your file
</Button>
                      </TableCell>
</TableRow>


<TableRow>
                     
                      <TableCell align="right">
                        <Button
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
                          Submit
                        </Button>
                      </TableCell>
                    </TableRow>
                






                 


                    
  
                  
  

                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Box>
        </Modal>
      )}
    </Box>
  );
}


export default WolketieWareHouseRequest;
