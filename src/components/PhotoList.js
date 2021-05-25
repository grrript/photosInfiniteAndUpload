import usePicsumPhotos from '../hooks/usePicsumPhotos'
import PhotoCard from './PhotoCard'

const PhotoList = ({ setPhotoId, setPhoto }) => {
  const photos = usePicsumPhotos()

  return (
    <ul style={{ padding: 0, margin: 0 }}>
      {photos.map((photo, index) => {
        return (
          <PhotoCard
            setPhoto={setPhoto}
            key={index}
            photo={photo}
            setPhotoId={setPhotoId}
            index={index}
          />
        )
      })}
    </ul>
  )
}

export default PhotoList
