import * as React from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import "../CSS/UsersManageTable.css";

const yourActionFunction = () => {};

const columns = [
  {
    field: "firstName",
    headerName: "First Name",
    width: 130,
    editable: false,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 150,
    editable: false,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
    editable: false,
  },
  {
    field: "isVendor",
    headerName: "Is Vendor",
    sortable: false,
    width: 120,
  },
  {
    field: "delete",
    headerName: "Delete User",
    renderCell: ({ rows }) => (
      <Button
        variant="outlined"
        size="small"
        color="error"
        onClick={() => yourActionFunction(rows)}
      >
        Delete
      </Button>
    ),
    sortable: false,
    width: 120,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Goyal",
    firstName: "Aditya",
    email: "adityago563@gmail.com",
    isVendor: "true",
  },
];

export default function UsersManageTable() {
  return (
    <Box sx={{ height: 400, width: { lg: "70%", md: "80%", xs: "100%" } }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        sx={{ borderRadius: "20px", boxShadow: 2 }}
      />
    </Box>
  );
}
