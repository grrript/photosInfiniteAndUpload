import { useState, useEffect } from 'react'
import PhotoList from './PhotoList'
import PhotoDialog from './PhotoDialog'
import Container from './Container'

const ListScroll30Max = () => {
  const [open, setOpen] = useState(false)
  const [photoId, setPhotoId] = useState(-1)

  useEffect(() => {
    if (photoId > -1) {
      setOpen(true)
    }
  }, [photoId])

  return (
    <Container>
      <PhotoList setPhotoId={setPhotoId} />
      <PhotoDialog
        photoId={photoId}
        setPhotoId={setPhotoId}
        open={open}
        setOpen={setOpen}
      />
    </Container>
  )
}

export default ListScroll30Max
