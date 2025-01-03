import React, { useState } from 'react'
import { Box, useTheme } from "@mui/material"
import { useGetTransactionsQuery } from '../../state/api'
import { DataGrid } from '@mui/x-data-grid'
import Header from '../../components/Header'



const Transactions = () => {
    const theme = useTheme();

    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");


    const { data, isLoading } = useGetTransactionsQuery({
        page, 
        pageSize, 
        sort: JSON.stringify(sort), 
        search,
    })

    return <div>Transactions</div>
}

export default Transactions;