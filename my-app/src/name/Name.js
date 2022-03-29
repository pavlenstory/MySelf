import React from 'react';
import styled from 'styled-components';


const WrappetTitlePersonBackground =  styled.div`
  font-size: 90px;
  font-weight: bold;
  background-color: black;
  color: white;
  height: 1000px;
`

const WrapperTitlePerson = styled.div`
  max-width: 780px;
  margin: 0 auto 0 auto;
  padding: 395px 0 0 0;
`

const TitlePerson = styled.div`
  font-size: 80px;
  font-weight: bold;
`

const GradientText = styled.span`
  background: -webkit-linear-gradient(
    244deg,
    #9b70c6 2%,
    #8bfbf5 49%,
    #a0faa6 71%,
    #f1fa94 100%
  );;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

function Name() {
    return (
      <WrappetTitlePersonBackground>
        <WrapperTitlePerson>
            <TitlePerson>Pavel <GradientText>Andreikovets</GradientText></TitlePerson>
            <TitlePerson>Front-end Developer</TitlePerson>
        </WrapperTitlePerson>
      </WrappetTitlePersonBackground>
    );
  }
  
export default Name;
  