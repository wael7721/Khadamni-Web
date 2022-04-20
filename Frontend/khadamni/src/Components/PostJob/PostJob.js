import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createPost } from '../../redux/Slices/post.slice'
import { useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function SelectOtherProps(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Loading, setLoading] = React.useState('');
  const [Location, setLocation] = React.useState('');

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const [Schedule, setSchedule] = React.useState('');

  const handleSchedule = (event) => {
    setSchedule(event.target.value);
  };

  const [Field, setField] = React.useState('');

  const handleField = (event) => {
    setField(event.target.value);
  };

  const handleSubmit = () => {
    const data = {
      Location: Location,
      Field: Field,
      Schedule: Schedule
    }
    

    dispatch(createPost(data, navigate))
      .unwrap()
      .then(() => {
        props.history.push("/Dashboard/Posts");
        window.location.reload();
      })
      .catch(() => {
        console.error("error");
      });
  };

  return (
    <div>
      <form>
      <FormControl sx={{ m: 1, minWidth: 120 }} >
        <InputLabel id="demo-simple-select-required-label">Schedule</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required-label"
          value={Schedule}
          label="Schedule"
          onChange={handleSchedule}
        >
          
          <MenuItem value={10}>Monday</MenuItem>
          <MenuItem value={20}>Tuesday</MenuItem>
          <MenuItem value={30}>Thursday</MenuItem>
          <MenuItem value={40}>Wednsday</MenuItem>
          <MenuItem value={50}>Thursday</MenuItem>
          <MenuItem value={60}>Friday</MenuItem>
          <MenuItem value={70}>Saturday</MenuItem>
          <MenuItem value={80}>Sunday</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} >
        <InputLabel id="demo-simple-select-error-label">Location</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={Location}
          label="Location"
          onChange={handleLocation}
         
        >
         
          <MenuItem value={10}>Tunis</MenuItem>
          <MenuItem value={20}>Ariana</MenuItem>
          <MenuItem value={30}>Ben Arous</MenuItem>
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-readonly-label">Field</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={Field}
          label="Field"
          onChange={handleField}
          inputProps={{ readOnly: false }}
        >
          
          <MenuItem value={10}>Gardening</MenuItem>
          <MenuItem value={20}>Baby sitting</MenuItem>
          <MenuItem value={30}>Plumbering</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      
      <button>Submit </button>
      </form>
    </div>
  );
}