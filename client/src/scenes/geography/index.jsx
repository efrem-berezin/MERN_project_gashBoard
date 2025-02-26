import { React, error}  from 'react';
import { Box, useTheme } from "@mui/material"
import { useGetGeographyQuery } from '../../state/api'; 
import Header from "../../components/Header"
import { ResponsiveChoropleth } from '@nivo/geo';
import { geoData } from "../../state/geoData"

const Geography = () => {
    const { data, error, isLoading } = useGetGeographyQuery();
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      console.error("Error from API:", error);
      return <div>Error loading data.</div>;
    }
  
    console.log("Data from API:", data);
  
    return (
      <div>
        <h1>Geography</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  };

  export default Geography;