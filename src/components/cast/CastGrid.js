/* eslint-disable */
import React from 'react';
import CastCard from './CastCard';
import IMAGE_NOT_FOUND from '../../images/not-found.png';

const CastGrid = ({ data }) => {
  return (
    <div>
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
    </div>
  );
};

export default CastGrid;
