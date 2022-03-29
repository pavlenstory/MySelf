import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  height: 110px;
  text-align: center;
`

const TitleElement = styled.div`
  margin: 40px -15px 0 -15px;
  display: inline-block;
  font-size: 24px;
  transform: rotate(90deg);
`

function Title() {
    return (
      <TitleWrapper>
        <TitleElement>SKILLS</TitleElement>
        <TitleElement>SKILLS</TitleElement>
        <TitleElement>SKILLS</TitleElement>
      </TitleWrapper>
    );
  }
  
export default Title;
  