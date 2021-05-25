import VisibilitySensor from 'react-visibility-sensor'

const PhotoCardVisibilitySensor = ({
  index,
  visibleItemsRef,
  containment,
  children,
}) => {
  return (
    <VisibilitySensor index={index} containment={containment}>
      {({ isVisible }) => {
        if (isVisible) {
          if (!visibleItemsRef.current.includes(index))
            visibleItemsRef.current.push(index)
        } else {
          const newIndex = visibleItemsRef.current.indexOf(index)
          if (newIndex >= 0) {
            visibleItemsRef.current.splice(newIndex, 1)
          }
        }
        return <>{children}</>
      }}
    </VisibilitySensor>
  )
}
export default PhotoCardVisibilitySensor
