import React from 'react';
import { Box, Grid, TextField } from '@material-ui/core';

const Form = () => {
  return (
    <Grid>
      <Box>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
    </Grid>
  );
};

export default Form;
