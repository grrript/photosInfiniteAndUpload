import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

const PhotoCard = ({ photo, setPhotoId, setPhoto, src, index }) => {
  const handleClick = () => {
    setPhotoId(photo.id)
    setPhoto(photo)
  }
  const useStylesForImage = makeStyles({
    hover: {
      '&:hover': {
        cursor: 'pointer',
      },
      border: '14px solid #fff',
      lineHeight: 0,
    },
    border: {
      border: '14px solid #fff',
      lineHeight: 0,
    },
    list: {
      listStyleType: 'none',
    },
  })

  const imageClass = useStylesForImage()
  return (
    <li className={imageClass.list} key={index}>
      <Card
        elevation={6}
        boxshadow={3}
        style={{
          height: 'auto',
          objectFit: 'cover',
          margin: '2rem 2rem',
        }}
      >
        <div
          onClick={handleClick}
          className={imageClass.hover}
          role='img'
          aria-label={`image by ${photo.author}`}
        >
          <img
            alt={`by ${photo.author}`}
            src={src}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </Card>
    </li>
  )
}

export default PhotoCard
