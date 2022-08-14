import React, { Component } from 'react';
import axios from 'axios'
import { 
  TextField,
  Container,
  Button,
  Box, 
  Input, 
  FormControl, 
  InputLabel, 
  OutlinedInput, 
  FormHelperText,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { 
  Visibility,
  VisibilityOff,
  AccountCircle
} from '@mui/icons-material/';



export class Register extends Component {
  constructor() {
    super();
    this.state = {
      values: {
        email: '',
        password: '',
        showPassword: false,
      },
      user: null
    }
  }

  handleChange = (prop) => (event) => {
    this.setState({
      values: {
        ...this.state.values,
        [prop]: event.target.value
      }
    },() => console.log(this.state.values))
  }
  handleClickShowPassword = () => {
    this.setState({ 
      values: { 
        ...this.state.values, 
        showPassword: !this.state.values.showPassword
      }
    })

  }
  handleMouseDown = (event) => {
    event.preventDefault();
  }

  handleRegistration = (email, password) => {
    const credentials = {email: email, password: password}
    console.log(credentials)
    axios.post('/api/auth/register',credentials)
    .then((response) => {
      this.setState({user: response})
    })
  }


  render() {
    const {values} = this.state;
    const {
      handleChange, 
      handleClickShowPassword, 
      handleMouseDown, 
      handleRegistration} = this;
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTestField-root': { m: 0, width: '50ch'},
        }}
        noValidate
        autoComplete="off"
      >
        <FormControl sx={{ display: 'flex', m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            type= 'text'
            value={values.email}
            onChange={handleChange('email')}
            endAdornment={
              <InputAdornment position="end">
                <AccountCircle />
              </InputAdornment>
            }
            label="email"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDown}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <div>
          <Button 
            variant="contained"
            sx={{
              color: 'white'
            }}
            onClick={() =>handleRegistration(values.email, values.password)}
          >
            Register
          </Button> 
        </div>
      </Box>
    )
  }
}

export default Register