import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectOtherProps() {
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

  return (
    <div>
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
      <FormControl sx={{ m: 1, minWidth: 120 }} error>
        <InputLabel id="demo-simple-select-error-label">Schedule</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={Schedule}
          label="Schedule"
          onChange={handleSchedule}
          renderValue={(value) => `⚠️  - ${value}`}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
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
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={Location}
          label="Age *"
          onChange={handleField}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  );
}