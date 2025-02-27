import { CssBaseline, Cssbaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles"
import { themeSettings } from "./theme";
import { useSelector } from "react-redux"
import { useMemo } from "react"
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import Layout from "./scenes/layout/index";
import Dashboard from "./scenes/dashboard/index";
import Products from "./scenes/products/index.jsx"
import Customers from "./scenes/customers/index.jsx"
import Home from "./scenes/home/index.jsx";
import Transactions from "./scenes/transactions/index.jsx"
import Geography from "./scenes/geography/index.jsx"

function App() {
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Navigate to="/dashboard" replace />}/>
              
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/products" element={<Products />}/>
              <Route path="/customers" element={<Customers />}/>
              <Route path="/transactions" element={<Transactions/>}></Route>
              <Route path="/geography" element={<Geography/>}></Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
