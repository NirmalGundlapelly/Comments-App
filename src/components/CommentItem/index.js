// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const buttons = {
  delete:
    'https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png',
}

const CommentItem = props => {
  const {
    commentItemDetails,
    backgroundColor,
    onChangeLikeImage,
    onDeleteComment,
  } = props
  const {id, newName, newComment, isLiked} = commentItemDetails

  const firstLetter = newName.slice(0, 1)

  const dateTime = formatDistanceToNow(new Date())

  const index = Math.ceil(Math.random() * backgroundColor.length - 1)
  const backColor = backgroundColor[index]

  const onClickLike = () => {
    onChangeLikeImage(id)
  }

  const onClickDelete = () => {
    onDeleteComment(id)
  }

  const likeButtons = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const isLikeButtonColor = isLiked ? 'liked' : 'notLiked'

  return (
    <li className="listItem">
      <div className="commentContainer">
        <p className={`startLetter ${backColor}`}>{firstLetter}</p>
        <div className="nameAndCommentContainer">
          <span className="commenterName">{newName}</span>
          <span className="time">{dateTime}</span>
          <p className="commenterComment">{newComment}</p>
        </div>
      </div>
      <div className="likeAndDel">
        <button onClick={onClickLike} className="buttons" type="button">
          <img className="likeImage" alt="like" src={likeButtons} />
          <span className={`likeText ${isLikeButtonColor}`}>Like</span>
        </button>
        <button
          data-testid="delete"
          onClick={onClickDelete}
          className="buttons"
          type="button"
        >
          <img alt="delete" src={buttons.delete} />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
