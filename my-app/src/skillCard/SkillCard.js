import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-image: linear-gradient(
    244deg,
    #9b70c6 2%,
    #8bfbf5 49%,
    #a0faa6 71%,
    #f1fa94 100%
  );
  display: flex;
  width: 14rem;
  height: 16rem;
  position: relative;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  align-self: center;
  overflow: hidden;

  &:after {
    content: "you";
    font-size: 20px;
    color: white;
    text-align: left;
    width: 101%;
    height: 101%;
    transform: translateX(-70%) translateY(-90%);
    transition: ease 0.7s;
    position: absolute;
    border-radius: 10px;
    background-color: #282a36;
  }

  &:hover {
      &:after {
    transform: translate(0);
    border-radius: 10px;
    }
}
`
const CardText = styled.h2`
  align-self: center;
  margin: auto;
`

const CardWrapper = styled.div`
  margin: 0 20%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 100vh;
  gap: 3vh;
`

function SkillCard() {
    const skills = ['React', 'Redux', 'CSS', 'JS', 'HTML', 'TSVN', 'GitHub', 'SQL', 'TS', 'Sass', 'Axios', 'FLUX', 'Redux Thunk', 'Webpack', 'Redux form', 'React redux', 'SPA', 'KISS', 'REST API', 'Reselect', 'React router dom', 'Node.js', 'ClassNames', 'Styled components']
    const listItems = skills.map((e) =>
    <Card content={'I was create'}>
        <CardText>{e}</CardText>
    </Card>
    );
    return (
      <CardWrapper>
        {listItems}
      </CardWrapper>
    );
  }
  
export default SkillCard;
  