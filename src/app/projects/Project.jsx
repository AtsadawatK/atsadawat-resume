
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
import Image from 'next/image'
export default function Projects() {
  const [filter, setFilter] = React.useState("1");

  const handleChangeFilter = (event) => {
    setFilter(event.target.value);
  };


  const WorkList = [
    {
      id:'1',
      label: "Pensook Landing Page",
      detail : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s ",
      date:"1 FEB 2024",
      img: pensookWeb,
    }
    ,
    {
      id:'2',
      label: "Resume",
      detail : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s ",
      date:"2 MAY 2024",
      img: resumeWeb,
    }
    ,
    {
      id:'3',
      label: "Classroom",
      detail : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s ",
      date:"8 JUL 2024",
      img: resumeWeb,
    }
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
