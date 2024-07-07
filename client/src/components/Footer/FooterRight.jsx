import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/Person2Outlined';
import Email from '@mui/icons-material/EmailOutlined';
import { FaArrowRight } from "react-icons/fa6";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#94a9c9',
    },
  },
});

function FooterRight() {
  return (
    <div className='w-1/3 flex flex-col gap-4'>
      <span className="text-white font-semibold">Newsletter</span>
      <p className='text-custom-gray'>Sign up to be first to receive the latest stories inspiring us, case studies, and industry news.</p>
      <FormControl>
      <TextField
          id="standard-start-adornment"
          sx={{ m: 1, width: '100%' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><AccountCircle /></InputAdornment>,
          }}
          variant="standard"
          placeholder='Your Name'
        />
      <TextField
          id="standard-start-adornment"
          sx={{ m: 1, width: '100%' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"><Email /></InputAdornment>,
          }}
          variant="standard"
          placeholder='Email Address'
        />
      </FormControl>
      <button className="bg-gradient-to-r from-custom-blue to-custom-cyan px-4 py-2 rounded-lg text-white text-sm font-medium flex items-center gap-2 w-1/3">
          Subscribe <FaArrowRight />
        </button>
    </div>
  )
}

export default FooterRight
