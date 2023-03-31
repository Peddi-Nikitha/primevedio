// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <div className="app-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="image"
      />
      <div className="movies-container">
        <div className="action-container">
          <h1 className="head">Action Movies</h1>

          <MoviesSlider
            list={moviesList.filter(each => each.categoryId === 'ACTION')}
          />
          <h1 className="head">Comedy Movies </h1>
          <MoviesSlider
            list={moviesList.filter(each => each.categoryId === 'COMEDY')}
          />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
