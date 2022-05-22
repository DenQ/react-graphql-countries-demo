import React from 'react';
import { Country } from '../../Interfaces/Countries';
import { gql, useQuery } from '@apollo/client';
import client from '../../utils/client';
import Spinner from '../../components/spinner';

type Props = {
  country: Country;
};

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
    return <Spinner />;
  }

  return <pre>{JSON.stringify(data.country, null, 2)}</pre>;
};

export default CountryInfo;
