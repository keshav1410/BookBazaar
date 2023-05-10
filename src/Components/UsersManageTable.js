import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import "../CSS/UsersManageTable.css";
import axios from "axios";
import ConfirmationModal from "./ConfirmationModal";
import { useSnackbar } from "notistack";

export default function UsersManageTable({ users, showUsers }) {
  const [open, setOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState();

  const { enqueueSnackbar } = useSnackbar();

  const deleteUser = async (e) => {
    await axios
      .post(`https://localhost:7250/api/Admin/${currentRow}/DeleteUser`)
      .then((res) => {
        console.log(res.data);
        setOpen(false);
        showUsers();
        enqueueSnackbar("User Deleted successfully", {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      })
      .catch((error) => {
        console.log(error);
        setOpen(false);
        enqueueSnackbar("Unable to delete user", {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      });
  };

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
      renderCell: (params) => {
        const onSubmit = () => {
          setCurrentRow(params.row.userID);
          setOpen(true);
        };

        return (
          <Button
            variant="outlined"
            color="error"
            size="small"
            onClick={onSubmit}
          >
            Delete
          </Button>
        );
      },

      sortable: false,
      width: 120,
    },
  ];

  for (let i = 0; i < users.length; i++) {
    users[i]["id"] = i;
  }

  return (
    <Box sx={{ height: 400, width: { lg: "70%", md: "80%", xs: "100%" } }}>
      <ConfirmationModal
        open={open}
        setOpen={setOpen}
        confirmDelete={deleteUser}
      />
      <DataGrid
        rows={users}
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
