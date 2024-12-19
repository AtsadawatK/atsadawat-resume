
"use client"
import * as React from 'react';
import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import pensookWeb from '../../assets/pensookWeb.png';
import resumeWeb from '../../assets/resume.png';
import classroom from "../../assets/classroom.png"
import crypto from "../../assets/crypto.png"
import nike from "../../assets/nike.png"
import Image from 'next/image'
export default function Projects() {
  const [filter, setFilter] = React.useState("1");

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };


  const WorkList = [
    {
      id:1,
      label: "Pensook Landing Page",
      detail : "This project is a landing page website for Pensook. It is a cooperative education project that I worked on using React.js and Next.js, with Material UI for CSS styling. It includes API integration to fetch data from the backend and features a text editor for editing blog content that can be displayed.",
      date:"1 FEB 2024",
      img: pensookWeb,
    }
    ,
    {
      id:2,
      label: "Resume",
      detail : "This project is a resume website that will display my CV and showcase the skills and projects I have worked on.",
      date:"2 MAY 2024",
      img: resumeWeb,
    }
    ,
    {
      id:3,
      label: "Classroom",
      detail : "This project is a classroom website for social studies, which will include various lessons with PDFs attached to each lesson.",
      date:"8 JUL 2024",
      img: classroom,
    },
    {
      id:4,
      label: "CryptoCurrency",
      detail : "This project is a website that will display cryptocurrency prices by fetching data from the CoinMarketCap and CoinGecko APIs. It will provide real-time coin prices, information on various exchanges, rankings, and popular coins, along with displaying graphs for different cryptocurrencies.",
      date:"8 JUL 2024",
      img: crypto,
    },
    {
      id:4,
      label: "Nike Shop",
      detail : "This project is a Nike shop website that involves translating a design into a website. It will display a list of products and allow users to add items to their cart.",
      date:"8 JUL 2024",
      img: nike,
    },
    ,
    
    
    
  ]
  return (
    <>
   
   <Box sx={{height: {xs:"calc(100vh - 50px)",md:"calc(100vh - 60px)",lg:"calc(100vh - 80px)"},background: "linear-gradient(to bottom, #FFFFFF, #9B78FF)",}}>
                 <Grid container sx={{px:{xs:0,lg:10,xl:20,display:"flex",justifyContent:"center",}}}>
                  <Box sx={{height: {xs:"calc(100vh - 50px)",md:"calc(100vh - 60px)",lg:"calc(100vh - 80px)"},backgroundColor:"#ffffff",width:"100%",maxWidth:"1920px",overflowY:"scroll"}}>
              <Grid item xs={12} sx={{display:"flex",justifyContent:"end",alignItems:"center",px:2,pt:1}}>
              <Box>
              <FormControl sx={{ minWidth: 60 }}>
          <Select
            value={filter}
            onChange={handleChangeFilter}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  border: 0,
                },
            }}
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value='1'>All</MenuItem>
            <MenuItem value='2'>Newest</MenuItem>
            <MenuItem value='3'>Lesest</MenuItem>
          </Select>
        </FormControl>
        </Box>
              </Grid>

            <Grid container sx={{my:1,}}>

              {WorkList.map((text,index) => (
              <Grid key={index} item xs={12} md={6} lg={4} sx={{display:"flex",justifyContent:"center",px:2,py:2}}>
              <Card sx={{ width:"100%" ,cursor:"pointer","&.MuiCard-root" :{
                
              },
              boxShadow: [
                "0px 5px 20px  rgba(155,150,255, 0.50) !important",
              ],
              "&:hover":{
                backgroundColor:"#E3E3E3"
              }}} onClick={() => { window.location.href = `/projects/${text.id}`; }}>
      <CardMedia >
      <Image
      src={text.img}
      style={{objectFit:"cover",width:"100%",height:"auto"}}
      alt="Picture of the author"
      
    />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {text.label}
        </Typography>
        <Typography variant="body2" color="text.secondary">
  {text.detail.length > 150 
    ? `${text.detail.substring(0, 150)}...` 
    : text.detail}
</Typography>
      </CardContent>
      <CardActions sx={{display:"flex",justifyContent:"space-between"}}>
        <Box sx={{borderRadius:"50px",backgroundColor:"#9B78FF",px:1}}>
      <Typography sx={{color:"#FFFFFF",fontSize:"14px"}}>By Atsadawat Kontha</Typography>
      </Box>
        <Button size="small">{text.date}</Button>
      </CardActions>
    </Card>
              </Grid>
             ))}
              
             
              </Grid>

              
              </Box>
                 </Grid>

                 </Box>
</>
  )
}
