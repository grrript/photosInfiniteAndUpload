import axios from 'axios'

const fetchPhotos = async (page) => {
  try {
    const photos = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=30`
    )

    const { data } = photos
    if (data) {
      return data
    }
  } catch (e) {
    console.log('error: ', e)
  }
}

export default fetchPhotos
