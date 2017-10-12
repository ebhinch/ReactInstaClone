import React, {Component} from 'react';
import { FlexRow } from "../styled-components/FlexContainers"
import {FlexColumn } from "../styled-components/FlexContainers"
import styled from 'styled-components';


const CommentDiv = FlexColumn.extend `
  align-items: left;
  img {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    align-items: left;
    margin-right: 5px;
  }
  padding-left: 5px;
`

class Comment extends Component {
  render() {
    const {comment} = this.props;
    return (
      <CommentDiv>
        <p>
        <img src={comment.profile_pic}/>
     
          <strong>{comment.username}</strong>
          {comment.text}
          </p>
      </CommentDiv>
    );
  }
}

export default Comment;