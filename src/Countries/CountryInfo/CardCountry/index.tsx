import React, { useMemo } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Country } from '../../../Interfaces/BaseTypes';
import ListPresenter from '../../../components/ListPresenter/ListPresenter';
import getPhones from '../../../utils/getPhones';

const Flag = styled(Box)(() => ({
  fontSize: '192px',
}));

const GridItem = styled(Grid)(() => ({
}));

type Props = {
  country: Country;
};

const CardCountry: React.FC<Props> = ({
  country: {
    code,
    name,
    continent,
    emoji,
    native,
    phone,
    capital,
    states,
    languages,
  },
}) => {
  const title = useMemo(() => {
    if (capital) {
      return `${continent.name} > ${name} > ${capital}`;
    }

    return `${continent.name} > ${name}`;
  }, [continent, name, capital]);

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#1976d2' }} aria-label="recipe" title="Code">
            {code}
          </Avatar>
        }
        title={title}
        subheader={native}
      />
      <Flag>{emoji}</Flag>
      <CardContent>
        <Grid container spacing={2} alignItems="stretch"  direction="row" justifyContent="space-evenly">
          <GridItem item xs={4}>
            Phone code: <ListPresenter data={getPhones(phone)} />
          </GridItem>
          <GridItem item xs={4}>
            Languages: <ListPresenter data={languages} />
          </GridItem>
          <GridItem item xs={4}>
            States: <ListPresenter data={states} />
          </GridItem>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardCountry;
