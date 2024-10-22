import { Box, Button } from '@mui/material';
import './App.css';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [gender, setGender] = useState('female');
  const [course, setCourse] = useState('');


  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleChange = (event) => {
    setCourse(event.target.value);
  };

  const handleReset = () => {
    setName('');
    setAddress('');
    setPhoneNumber('');
    setEmail('');
    setDateOfBirth(null);
    setGender('female');
    setCourse('');
    setEmailError('');
    setPhoneError('');
  };

  
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
    setEmail(value);
  };

  
  const validatePhoneNumber = (value) => {
    const phoneRegex = /^[0-9]{10}$/; 
    if (!phoneRegex.test(value)) {
      setPhoneError('Please enter a valid 10-digit phone number');
    } else {
      setPhoneError('');
    }
    setPhoneNumber(value);
  };

  return (
    <div style={{backgroundImage:`url("./bg.png")`,width:"100%"}}>
      <div className='container text-center pt-3 pb-5' style={{ backgroundColor: 'white', borderRadius: '8px', maxWidth: '500px', margin: '0 auto' }}>
      
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%' },
          backgroundColor: '#CFF5E7',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
        noValidate
        autoComplete="off"
      >

<h2 style={{ marginBottom: '10px', fontSize: '1.5rem', fontWeight: 'bold', color: '#333' }}>Registration Form</h2>

        <div className='d-flex flex-column mb-3'>
          <TextField
            required
            id="outlined-required"
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{
              style: {
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
              },
            }}
          />

          <TextField
            id="outlined-multiline-static"
            label="Address"
            multiline
            rows={4}
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            InputProps={{
              style: {
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
              },
            }}
          />

          <TextField
            required
            id="outlined-required"
            label="Ph Number"
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => validatePhoneNumber(e.target.value)}
            error={!!phoneError}
            helperText={phoneError}
            InputProps={{
              style: {
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
              },
            }}
          />

          <TextField
            required
            id="outlined-required"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => validateEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
            InputProps={{
              style: {
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
              },
            }}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of birth"
              value={dateOfBirth}
              onChange={(newValue) => setDateOfBirth(newValue)}
              sx={{
                '& .MuiInputBase-input': {
                  backgroundColor: '#f9f9f9',
                  borderRadius: '8px',
                  padding: '10px',
                },
              }}
            />
          </LocalizationProvider>

          <div className='text-start mt-3'>
            <FormControl>
              <h5>Gender</h5>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                name="radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>
          </div>

          <FormControl sx={{ mt: 2 }}>
            <InputLabel id="demo-simple-select-label">Course</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={course}
              label="Course"
              onChange={handleChange}
              style={{ backgroundColor: '#f9f9f9', borderRadius: '8px' }}
            >
              <MenuItem value={'biology'}>Biology</MenuItem>
              <MenuItem value={'computer_science'}>Computer Science</MenuItem>
              <MenuItem value={'commerce'}>Commerce</MenuItem>
              <MenuItem value={'humanities'}>Humanities</MenuItem>
            </Select>
          </FormControl>

          <div className="d-flex justify-content-around mt-4">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ padding: '10px 20px', borderRadius: '25px' }}
            >
              Submit
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              type="button"
              onClick={handleReset}
              sx={{ padding: '10px 20px', borderRadius: '25px' }}
            >
              Reset
            </Button>
          </div>
        </div>
      </Box>
    </div>
    </div>
  );
}

export default App;
