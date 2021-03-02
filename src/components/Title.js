import React, { memo } from 'react';
import { TitleWrapper } from './Title.styled';

const Title = ({ title }) => {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
    </TitleWrapper>
  );
};

export default memo(Title);
