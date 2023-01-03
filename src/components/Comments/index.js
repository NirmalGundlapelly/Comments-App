import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentList: [],
    newName: '',
    newComment: '',
    commentsCount: 0,
  }

  addComment = event => {
    event.preventDefault()
    const {newName, newComment} = this.state
    const addNewComment = {
      id: uuidv4(),
      newName,
      newComment,
      isLiked: false,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, addNewComment],
      commentsCount: prevState.commentsCount + 1,
      newName: '',
      newComment: '',
    }))
  }

  onChangeLikeImage = id => {
    const {commentList} = this.state

    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  onDeleteComment = id => {
    const {commentList, commentsCount} = this.state

    const deletedItemList = commentList.filter(eachItem => eachItem.id !== id)

    this.setState(prevState => ({
      commentsCount: prevState.commentsCount - 1,
      commentList: deletedItemList,
    }))
  }

  onChangeInput = event => {
    this.setState({newName: event.target.value})
  }

  onChangeComment = event => {
    this.setState({newComment: event.target.value})
  }

  render() {
    const {commentList, newName, newComment, commentsCount} = this.state

    return (
      <div className="appContainer">
        <div className="contentContainer">
          <h1 className="heading">Comments</h1>
          <div className="imageAndInputContainer">
            <img
              className="webImage"
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
            <form className="inputContainer">
              <p className="saySomethingText">
                Say Something about 4.0 Technologies
              </p>
              <input
                value={newName}
                onChange={this.onChangeInput}
                className="nameInput"
                placeholder="Your Name"
              />
              <textarea
                value={newComment}
                onChange={this.onChangeComment}
                className="textAreaInput"
                placeholder="Your Comment"
                cols="30"
                rows="7"
              />
              <button
                onClick={this.addComment}
                type="submit"
                className="addCommentButton"
              >
                Add Comment
              </button>
            </form>
          </div>
          <hr />
          <p className="commentsText">
            <span className="commentsCount">{commentsCount}</span> Comments
          </p>
          <ul className="commentsContainer">
            {commentList.map(eachComment => (
              <CommentItem
                onChangeLikeImage={this.onChangeLikeImage}
                backgroundColor={initialContainerBackgroundClassNames}
                key={eachComment.id}
                commentItemDetails={eachComment}
                onDeleteComment={this.onDeleteComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
