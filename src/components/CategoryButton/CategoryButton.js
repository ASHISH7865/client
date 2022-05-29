import React,{useState} from 'react';
import './CategoryButton.scss'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function CategoryButton(props) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%',position:'sticky',top:"0",background:"#000000",zIndex:'10',borderRadius:'10px',boxShadow:' rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
            <Tabs value={value} onChange={handleChange} centered >
                <Tab label="All" style={{color:'white' , fontWeight:'600',fontSize:'1.1rem' , textTransform:'capitalize'}} />
                <Tab label="Small" style={{color:'white' , fontWeight:'600',fontSize:'1.1rem',textTransform:'capitalize'}} />
                <Tab label="Medium"  style={{color:'white' , fontWeight:'600',fontSize:'1.1rem',textTransform:'capitalize'}}/>
                <Tab label="Large" style={{color:'white' , fontWeight:'600',fontSize:'1.1rem',textTransform:'capitalize'}} />
            </Tabs>
        </Box>
    )
}

export default CategoryButton;