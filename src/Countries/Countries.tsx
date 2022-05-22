import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CountriesList from "./List/List";

const Item = styled(Paper)(({ theme }: any) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 'inherit',
  overflow: 'scroll',
}));

type Props = {};

const CountriesMain: React.FC<Props> = () => <Box sx={{ flexGrow: 1, height: '100vh' }}>
  <Grid
    container
    direction="row"
    justifyContent="flex-start"
    alignItems="stretch"
    sx={{ height: 'inherit' }}
  >
    <Grid item xs sx={{ height: 'inherit' }}>
      <Item>
        <CountriesList />
      </Item>
    </Grid>
    <Grid item xs sx={{ height: 'inherit' }}>
      <Item>xs</Item>
    </Grid>
  </Grid>
</Box>;

export default CountriesMain;
