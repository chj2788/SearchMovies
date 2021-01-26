/* eslint-disable */
import React from 'react';
import CastCard from './CastCard';
import IMAGE_NOT_FOUND from '../../images/not-found.png';
import { FlexGrid } from '../Styled';

const CastGrid = ({ data }) => {
  return (
    <FlexGrid>
      {data.map(({ person }) => (
        <CastCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
    </FlexGrid>
  );
};

export default CastGrid;
