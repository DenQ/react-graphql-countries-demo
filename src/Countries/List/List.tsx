import React from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import { Country } from '../../Interfaces/Countries';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ButtonItemCountry = styled(Button)(({ theme }: any) => ({
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: 'center',
  // color: theme.palette.text.secondary,
  // height: 'inherit',
}));

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com',
});

// @ts-ignore
const LIST_COUNTRIES = gql`
  {
    countries {
      name
      code
    }
  }
`;

type Props = {};

const CountriesList: React.FC<Props> = () => {
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  return (
    <>
      {data.countries.map((item: Country) => {
        return (
          <ButtonItemCountry key={item.code} color={'primary'} variant="outlined" fullWidth>
            {item.name}
          </ButtonItemCountry>
        );
      })}
    </>
  );
};

export default CountriesList;
