import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import "../CSS/UsersManageTable.css";
import axios from "axios";
import ConfirmationModal from "./ConfirmationModal";

export default function ManageBooksTable({ books, showBooks }) {
  const [open, setOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState();

  const deleteBook = async (e) => {
    console.log(currentRow);
    await axios
      .post(
        `https://localhost:7250/api/Vendor/api/users/8126999A-F96D-49ED-B355-BC95D738BD4B/${currentRow}/delete-book`
      )
      .then((res) => {
        console.log(res.data);
        setOpen(false);
        showBooks();
      })
      .catch((error) => {
        console.log(error);
        setOpen(false);
      });
  };

  const columns = [
    {
      field: "title",
      headerName: "Title",
      width: 460,
      editable: false,
    },
    {
      field: "authorName",
      headerName: "Author Name",
      width: 160,
      editable: false,
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
      editable: false,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      sortable: false,
      width: 130,
    },
    {
      field: "isbn",
      headerName: "ISBN",
      sortable: false,
      width: 150,
    },
    {
      field: "delete",
      headerName: "Delete Book",
      renderCell: (params) => {
        const onSubmit = () => {
          setCurrentRow(params.row.bookID);
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

  for (let i = 0; i < books.length; i++) {
    books[i]["id"] = i;
  }

  return (
    <Box sx={{ height: 480, width: { lg: "100%", md: "100%", xs: "100%" } }}>
      <ConfirmationModal
        open={open}
        setOpen={setOpen}
        confirmDelete={deleteBook}
      />
      <DataGrid
        rows={books}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[7]}
        disableRowSelectionOnClick
        sx={{ borderRadius: "20px", boxShadow: 2 }}
      />
    </Box>
  );
}
