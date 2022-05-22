import React, { useMemo } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Country } from '../../../Interfaces/BaseTypes';

const Flag = styled(Box)(() => ({
  // fontSize: '128px',
  fontSize: '192px',
}));

type Props = {
  country: Country;
};

const CardCountry: React.FC<Props> = ({ country }) => {
  console.log(123, country);
  const { code, name, continent, emoji, native, phone, capital } = country;

  const title = useMemo(() => {
    if (capital) {
      return `${continent.name} > ${name} > ${capital}`;
    }

    return `${continent.name} > ${name}`;
  }, [continent, name, capital]);

  const subTitle = `${native}`;

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#1976d2' }} aria-label="recipe" title="Code">
            {code}
          </Avatar>
        }
        title={title}
        subheader={subTitle}
      />
      <Flag>{emoji}</Flag>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            Phone code: {phone}
          </Grid>
          <Grid item xs={4}>
            Tell code: {phone}
          </Grid>
          <Grid item xs={4}>
            Tell code: {phone}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardCountry;
