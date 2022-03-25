import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  height: 110px;
`

const Title = styled.div`
  margin: 40px -15px 0 -15px;
  display: inline-block;
  font-size: 24px;
  transform: rotate(90deg);
`

function Skills() {
    return (
      <TitleWrapper>
        <Title>SKILLS</Title>
        <Title>SKILLS</Title>
        <Title>SKILLS</Title>
      </TitleWrapper>
    );
  }
  
export default Skills;
  