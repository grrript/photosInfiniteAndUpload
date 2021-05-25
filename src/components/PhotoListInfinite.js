import PhotoCardWrapper from './PhotoCardWrapper'
import PhotoCardVisibilitySensor from './PhotoCardVisibilitySensor'

const PhotoList = ({
  photos,
  setPhotoId,
  setPhoto,
  containment,
  visibleItemsRef,
}) => {
  return (
    <ul style={{ padding: 0, margin: 0 }}>
      {photos.map((photo, index) => {
        return (
          <PhotoCardVisibilitySensor
            key={index}
            visibleItemsRef={visibleItemsRef}
            containment={containment}
            index={index}
          >
            <PhotoCardWrapper
              photo={photo}
              setPhotoId={setPhotoId}
              setPhoto={setPhoto}
            />
          </PhotoCardVisibilitySensor>
        )
      })}
    </ul>
  )
}

export default PhotoList
