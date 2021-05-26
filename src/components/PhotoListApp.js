import { useEffect, useState, useRef } from 'react'
import usePicsumPhotos from '../hooks/usePicsumPhotos'
import PhotoDialog from './PhotoDialog'
import Container from './Container'
import UploadImage from './UploadImage'
import InfiniteScrollWrapper from './InfiniteScrollWrapper'

const PhotoListApp = () => {
  const [open, setOpen] = useState(false)
  const [photoId, setPhotoId] = useState(-1)
  const [clickedPhoto, setClickedPhoto] = useState({})
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1) // must start with 1 because the initial fetch uses page=0. page=1 is used for when loading the next group of images
  const visibleItemsRef = useRef([])
  const photos = usePicsumPhotos()

  useEffect(() => {
    if (photoId > -1) {
      setOpen(true)
    }
  }, [photoId])

  useEffect(() => {
    if (photos) {
      setItems(photos)
    }
  }, [photos])

  return (
    <>
      <UploadImage
        visibleItemsRef={visibleItemsRef}
        items={items}
        setItems={setItems}
      />
      <Container>
        <InfiniteScrollWrapper
          page={page}
          setPage={setPage}
          setClickedPhoto={setClickedPhoto}
          items={items}
          setItems={setItems}
          setPhotoId={setPhotoId}
          visibleItemsRef={visibleItemsRef}
        />
        <PhotoDialog
          photoId={photoId}
          setPhotoId={setPhotoId}
          clickedPhoto={clickedPhoto}
          open={open}
          setOpen={setOpen}
        />
      </Container>
    </>
  )
}

export default PhotoListApp
