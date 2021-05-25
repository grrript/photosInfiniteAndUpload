import axios from 'axios'
import { useState, useEffect } from 'react'

const usePicsumPhotos = (page) => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const photos = await axios.get(
          `https://picsum.photos/v2/list?page=${page}&limit=30`
        )
        const { data } = photos
        if (data) {
          setPhotos(data)
        }
      } catch (e) {
        console.log('error: ', e)
      }
    }
    fetchPhotos()
  }, [page])
  return photos
}
export default usePicsumPhotos
