import React from 'react'
import { Box, useTheme } from "@mui/material"
import Header from "../../components/Header.jsx";
import { useGetCustomersQuery } from "../../state/api.js";
import { DataGrid } from "@mui/x-data-grid"
import { idID } from '@mui/material/locale';


const Customers = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();
  console.log("data", data)

  const columns = [
    { field: "_id",
      headerName: "ID",
      flex: 1
    },
    { field: "name",
      headerName: "Name",
      flex: 0.5
    },
    { field: "email",
      headerName: "Email",
      flex: 1
    },
    { field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/,  "($1)$2-$3")
      }
    },
    { field: "country",
      headerName: "Country",
      flex: 0.4
    },
  ]

  return (
    <div>
      <Box>
        <Header title="CUSTOMERS" subtitle="List of Customers" />
        <DataGrid
        loading={isLoading || !data}
        getRowId={(row) => row._id}
        rows={data || []}
        columns={columns}
        >
        </DataGrid>
        </Box>
    </div>
  )
}

export default Customers
