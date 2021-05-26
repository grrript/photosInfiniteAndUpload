import PhotoCard from './PhotoCard'

const PhotoCardWrapper = ({ photo, setPhotoId, setClickedPhoto }) => {
  const getSrc = () => {
    if (photo.local) {
      if (photo.local === true) {
        return photo.download_url
      }
    } else {
      return `https://picsum.photos/id/${photo.id}/367/267`
    }
  }
  const src = getSrc()

  return (
    <PhotoCard
      photo={photo}
      setPhotoId={setPhotoId}
      setClickedPhoto={setClickedPhoto}
      src={src}
    />
  )
}

export default PhotoCardWrapper
