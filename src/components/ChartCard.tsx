//This is Home page code.

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export interface Props {
  width: string,
  color: string,
  title: string,
  number: string,
  unit: string,
  description: string,
  graph: string,
  height: string,
  display: string,
  lettercolor: string,
  titlecolor: string,
  displayagain: string
}

export default function ChartCard({ width, color, title, number, unit, description, graph, height, display, lettercolor, titlecolor, displayagain }: Props) {


  return (
    <Card sx={{ display: "flex", minWidth: `${width}`, height: `${height}`, borderRadius: "15px", background: `${color}` }}>
      <CardContent>
        <Typography sx={{ fontSize: 18, paddingBottom: "0px", marginBottom: "0px", color: `${titlecolor}` }} gutterBottom>
          {title}
        </Typography>
        <div className='flex items-end'>
          <Typography variant="h1" component="div"
            sx={{
              fontSize: "55px",
              background: `linear-gradient(${lettercolor})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >{number}</Typography>
          <p className='pb-1 pl-2' style={{
            fontSize: "15px",
            background: `linear-gradient(${lettercolor})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>{unit}</p>
        </div>
        <Typography sx={{ mb: 1.5, color: `${titlecolor}` }} color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2">
          {/* This is profit chart. */}
          <img src={`${graph}.png`} alt='Total profit chart' style={{ display: `${display}` }} /> 
        </Typography>
      </CardContent>
      <div className='flex flex-col items-end w-[50%] justify-end' style={{ display: `${displayagain}` }}>
        <div className='flex items-end w-[50%] justify-end mb-[-20px] pr-6'>
          <div className="text-[80px] font-bold font-mono text-[#B88500] text-end float-right">10</div>
          <div className="text-[30px] font-black text-[#B88500] pb-6 pl-2 ">%</div>
        </div>
        <p className='text-[18px] text-end pb-10'>CLIENTS GERAL</p>
      </div>
    </Card>
  );
}

