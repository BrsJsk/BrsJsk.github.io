import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Header = styled(Link)`
  line-height: 1.1;
  font-size: 1.75rem;
  text-decoration: none;
  color: #bebabb;
  font-weight: 600;
  transition: all 0.2s linear;

  &:hover {
    color: #996774;
  }
`;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
`;

const SmallInfo = styled.small`
  font-weight: 400;
  font-size: 80%;
  color: #a6a3a3;
`;

const PostLink = ({ post }) => (
  <Wrapper>
    <Header to={post.frontmatter.slug}>{post.frontmatter.title}</Header>
    <SmallInfo>{post.frontmatter.date}</SmallInfo>
  </Wrapper>
);
export default PostLink;
