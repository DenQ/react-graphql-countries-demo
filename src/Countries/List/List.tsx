import React, { useCallback } from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Country } from '../../Interfaces/Countries';

type Props = {
  selectCountryHandle: (country: Country) => void;
};

const ButtonItemCountry = styled(Button)(({ theme }: any) => ({}));

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

const CountriesList: React.FC<Props> = ({ selectCountryHandle }) => {
  const { data, loading, error } = useQuery(LIST_COUNTRIES, { client });

  const onClick = useCallback(
    (country: Country) => (e: any) => {
      e.preventDefault();
      selectCountryHandle(country);
    },
    [selectCountryHandle]
  );

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  return (
    <>
      {data.countries.map((item: Country) => {
        return (
          <ButtonItemCountry
            onClick={onClick(item)}
            key={item.code}
            color={'primary'}
            variant="outlined"
            fullWidth
          >
            {item.name}
          </ButtonItemCountry>
        );
      })}
    </>
  );
};

export default CountriesList;
