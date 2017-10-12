import React, { Component } from 'react';
import Comment from './Comment';
import styled from 'styled-components';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'
import { FlexRow } from "../styled-components/FlexContainers"
import {FlexColumn } from "../styled-components/FlexContainers"

const PostDiv = FlexColumn.extend `
  border-radius: 2px;
  border: 1px solid grey;
  margin: 20px auto;
  width: 45%;
  max-width: 600px;
  p {
    text-align: left;
  }
`

const TitleDiv = FlexRow.extend `
  justify-content: left;
  margin-top: 5px;
  img {
    height: 40px;
    width: 40px;
    // margin-top: 5px;
    margin-left: 5px;
  }
  p {
    font-size: 16px;
    margin-left: 2px;
  }
`

const ImageDiv = styled.div`
  img{
    max-width: 600px;
    width: 100%;
  }
`

const CaptionP = FlexRow.extend `
  text-align: left;
  margin-left: 5px;
`
const IconDiv = FlexRow.extend `
  display: flex;
  justify-content: left;
  svg{
    padding: 5px;
    height: 2em;
    width: 2em; 
  }
`

const PostContainer = styled.div`
  background-color: #fff;
  border-radius: 3px;
  width: 95vw;
  max-width: 600px;
  margin: 20px auto;
  border: 1px solid #e6e6e6;
`;

const PostUser = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  img{
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }
  span{
    padding-left: 5px;
    font-weight: bold;
  }
`;

const PostContent = styled.div`
  img{
    max-width: 600px;
    margin: 0 auto;
  }
`;

const PostInfo = styled.div`
  padding: 5px 16px;
`;

const PostActions = styled.div`
  svg{
    padding: 5px;
  }
`

class Post extends Component{

  render(){
    const { post } = this.props;

    const likes = post.likes.reduce((prev, curr, index) => {
      if (index === 0){
        return `${curr.username}`;
      } else if (index === post.likes.length -1){
        return `${prev} and ${curr.username}`;
      } else {
        return `${prev}, ${curr.username}`;
      }
    },"");
    return(
      <PostDiv>
        <TitleDiv>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <p>{post.user.username}</p>
        </TitleDiv>
        <ImageDiv>
          <img src={post.image.url} />
          <CaptionP>{post.caption}</CaptionP>
        </ImageDiv>
        <IconDiv>
          <FaHeartO />
          <FaCommentO />
        </IconDiv>
        <p>{post.likes.length} likes</p>
          {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
      </PostDiv>
    )
  }
}

export default Post;