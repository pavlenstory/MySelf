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
    content: '${props => props.description}';
    font-size: 20px;
    color: white;
    text-align: left;
    padding: 10px;
    width: 93%;
    height: 93%;
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
    const skills = [
      {title: 'React', description: 'Passed courses and developed CRM systems for customers from America at imbue systems'},
      {title: 'Redux', description: 'Used in conjunction with React'},
      {title: 'CSS', description: 'Created animations studied with teachers from EPAM'},
      {title: 'JS', description: 'Studied at EPAM. I have been working with this language for over 4 years'},
      {title: 'HTML', description: 'My first technology I learned'},
      {title: 'TSVN', description: 'This repository was used at work'},
      {title: 'GitHub', description: 'My favorite repository. I use for my projects'},
      {title: 'SQL', description: 'Studied at my first job. Used in conjunction with React and Redux'},
      {title: 'TS', description: 'I used this technology for static typing in my applications and also at work'},
      {title: 'Sass', description: 'Used on projects in EPAM'},
      {title: 'Axios', description: 'Used to create my own social network'},
      {title: 'FLUX', description: 'My favorite is the architectural approach. Which I use in conjunction with React'},
      {title: 'Redux Thunk', description: 'Excellent middleware'},
      {title: 'Webpack', description: 'This technology is used in almost every project. Great module builder.'},
      {title: 'Redux form', description: 'The best way to manage your form state in Redux'},
      {title: 'React redux', description: 'This is a library that helps link React and Redux'},
      {title: 'SPA', description: 'When I was studying, I created many SPAs to improve my skills.'},
      {title: 'KISS', description: 'Keep it simple, stupid'},
      {title: 'REST API', description: 'Method of interaction and exchange of server data'},
      {title: 'Reselect', description: 'This is a library for creating memoized selectors'},
      {title: 'React router dom', description: 'Allows us to synchronize our application with the URL string in the browser'},
      {title: 'Node.js', description: 'With Node, you can write full-fledged applications'},
      {title: 'ClassNames', description: 'This library is for simple conditional concatenation of class names. Really useful in React'},
      {title: 'Styled components', description: 'I love working with this technology. I consider it the best solution for styling in React'}
  ]
    const listItems = skills.map((e) =>
    <Card description={e.description}>
        <CardText>{e.title}</CardText>
    </Card>
    );
    return (
      <CardWrapper>
        {listItems}
      </CardWrapper>
    );
  }
  
export default SkillCard;
  