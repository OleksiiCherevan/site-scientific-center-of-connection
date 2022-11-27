import React from 'react';
import styled from "styled-components";

import {STATIC_NEWS} from "../storage/static";

const StyledNews = styled.div`
  height: 100%;
  width: 100%;
  padding: 30px;
  color: #fff;
  
`

const NewsTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 30px;
`

const NewsList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`

const StyledNewsCard = styled.a`
  position: relative;
  min-width: 300px;
  max-width: 300px;
  flex: auto 1;
  
  aspect-ratio: 3/2;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #2c2c2c;
  border-radius: 30px;
  text-shadow: 1px 1px 1px black;
  
  &:hover {
    transform: scale(1.2);
  }
  & h3 {
    position: absolute;
    font-size: .9rem;
    left: 15px;
    top: 10px;
  }
  
  & p {
    font-size: .7rem;
    position: absolute;
    bottom: 10px;
    left: 15px;
  }
`

const NewsCard = ({image, title="test title", href, description="test description"}) => {
  return <StyledNewsCard href={href} image={image}>
    <h3>{title}</h3>
    <p>{description}</p>
  </StyledNewsCard>
}
function News(props) {
  return (
    <StyledNews>
      <NewsTitle>Останні новини порталу:</NewsTitle>
      <NewsList>
        {STATIC_NEWS.map(news => <NewsCard key={news.title} href={news.href} {...news}></NewsCard>)}
      </NewsList>
    </StyledNews>
  );
}

export default News;