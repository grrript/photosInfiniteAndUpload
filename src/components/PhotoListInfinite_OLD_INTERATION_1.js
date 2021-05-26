import PhotoCardWrapper from './PhotoCardWrapper'
import VisibilitySensor from 'react-visibility-sensor'

const PhotoList = ({
  photos,
  setPhotoId,
  setClickedPhoto,
  containment,
  visibleItemsRef,
}) => {
  return photos.map((photo, index) => {
    return (
      <VisibilitySensor key={index} containment={containment}>
        {({ isVisible }) => {
          if (isVisible) {
            visibleItemsRef.current.push(index)
          } else {
            const newIndex = visibleItemsRef.current.indexOf(index)
            if (newIndex >= 0) {
              visibleItemsRef.current.splice(newIndex, 1)
            }
          }
          return (
            <PhotoCardWrapper
              key={photo.id}
              photo={photo}
              setPhotoId={setPhotoId}
              setClickedPhoto={setClickedPhoto}
              index={index}
            />
          )
        }}
      </VisibilitySensor>
    )
  })
}

export default PhotoList
