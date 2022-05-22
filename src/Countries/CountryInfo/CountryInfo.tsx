import React from 'react';
import { Country } from '../../Interfaces/Countries';
import { ApolloClient, gql, InMemoryCache, useQuery } from '@apollo/client';

type Props = {
  country: Country;
};

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com',
});

// @ts-ignore
const getCountry = (code: string) => gql`
  query country {
    country (code: "${code}") {
      name
      code
    }
  }
`;

const CountryInfo: React.FC<Props> = ({ country }) => {
  const { data, loading } = useQuery(getCountry(country.code), {
    client,
  });

  if (loading) {
    return <>loading</>;
  }

  return <pre>{JSON.stringify(data.country, null, 2)}</pre>;
};

export default CountryInfo;
