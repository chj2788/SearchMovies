/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCastCard } from './CastCard.styled';

const CastCard = ({ image, name, gender, country, birthday, deathday }) => {
  return (
    <StyledCastCard>
      <div className="img-wrapper">
        <img src={image} alt="actor" />
      </div>
      <h1>
        {name} {gender ? `(${gender})` : null}
      </h1>
      <p>{country ? `Comes from ${country}` : 'No country known'}</p>
      {birthday ? <p>Born {birthday}</p> : null}
      <p className="deathday">{deathday ? `Died ${deathday}` : 'Alive'}</p>
    </StyledCastCard>
  );
};

export default CastCard;
