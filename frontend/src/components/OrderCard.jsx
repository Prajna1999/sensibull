import React from 'react'

import {StyledToggleButton} from './barrel'

import {Container} from '@mui/material';




import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { styled, width } from '@mui/system';

const StyledSpan = styled('span')`
background-color:#e5effb; //temp arrangement

color:#0d73e7; //temp arrangement

width:max-content;

padding:2px 4px;

margin-right:4px;

border-radius:2px;

font-size:0.8rem;



`;

const StyledJoyButton = styled('Button')(
  ({ theme }) => `

sx={{ ml: 'auto', fontWeight: 500, backgroundColor:"#3f93f3" }}
margin-left:auto;
font-weight:500;
background-color:#3f93f3;
border-radius:4px;
padding:0 16px;



outline:none;


`
);
//temporary placeholder

const buyOrSell = 'BUY';
const tickerText = 'NIFTY 17950 CALL 02 FEB';

export default function OrderCard() {
  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center',mt:'50px'}}>

    
    <Card  sx={{ width: '75%',backgroundColor:"#ffffff" }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        <StyledSpan>{buyOrSell}</StyledSpan> {tickerText}
      </Typography>

      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        {/* <BookmarkAdd /> */}

        <StyledToggleButton></StyledToggleButton>
        
      </IconButton>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>

        {/* <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        /> */}

      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            $2,900
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          sx={{
            ml: 'auto',
            fontWeight: 500,
            backgroundColor: '#3f93f3',
            borderRadius: '4px',
            paddingTop: '2px',
            color:'#ffffff'

          }}
          aria-label="Place Order"
        >
          {buyOrSell}
        </Button>
      </Box>
    </Card>
    </Box>
  );
}
