import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Country } from '../../Interfaces/BaseTypes';
import client from '../../utils/client';
import Spinner from '../../components/spinner';
import CardCountry from './CardCountry';

type Props = {
  country: Country;
};

const getCountry = (code: string) => gql`
  query country {
    country (code: "${code}") {
      code
      name
      native,
      phone
      capital
      currency
      emoji
      emojiU
      continent {
        code
        name
        countries {
          code
          name
        }
      }
      languages {
        code
        name
      }
      states {
        code
        name
      }
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

  return <CardCountry country={data.country} />;
};

export default CountryInfo;
