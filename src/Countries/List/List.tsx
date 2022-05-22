import React, { useCallback } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Button } from '@mui/material';
import { Country } from '../../Interfaces/BaseTypes';
import client from '../../utils/client';
import Spinner from '../../components/spinner';

type Props = {
  selectCountryHandle: (country: Country) => void;
};

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
    return <Spinner />;
  }

  return (
    <>
      {data.countries.map((item: Country) => {
        return (
          <Button
            onClick={onClick(item)}
            key={item.code}
            color="primary"
            variant="outlined"
            fullWidth
          >
            {item.name}
          </Button>
        );
      })}
    </>
  );
};

export default CountriesList;
