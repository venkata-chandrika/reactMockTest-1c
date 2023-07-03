import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const PlayListItem = props => {
  const {details, deletePlayList} = props
  const {imageUrl, id, name, genre, duration} = details

  const onDelete = () => {
    deletePlayList(id)
  }

  return (
    <li className="list-items">
      <div className="imgitem-container">
        <img src={imageUrl} alt="track" className="img" />
        <div>
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="btn-container">
        <p className="duration">{duration}</p>
        <button
          type="button"
          onClick={onDelete}
          className="btn"
          data-testid="delete"
        >
          <AiOutlineDelete size={20} />
        </button>
      </div>
    </li>
  )
}
export default PlayListItem
