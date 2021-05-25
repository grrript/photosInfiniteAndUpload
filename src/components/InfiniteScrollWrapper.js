import { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import fetchMorePhotos from './fetchMorePhotos'
import PhotoList from './PhotoListInfinite'

const MAX_NUMBER = 420

const InfiniteScrollWrapper = ({
  items,
  setItems,
  setPhotoId,
  setPhoto,
  visibleItemsRef,
  page,
  setPage,
}) => {
  const [hasMore, setHasMore] = useState(true)
  const [containmentDOMRect] = useState(document.getElementById('container'))
  const fetchMoreData = () => {
    if (items.length >= MAX_NUMBER) {
      setHasMore(false)
      return
    }

    const fetchMore = async () => {
      const pageNumber = page + 1
      const morePhotos = await fetchMorePhotos(pageNumber)
      if (morePhotos) {
        setItems(items.concat(morePhotos))
        setPage((page) => {
          return page + 1
        })
      }
    }
    fetchMore()
  }

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      height={550}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>You have seen it all</b>
        </p>
      }
    >
      <PhotoList
        photos={items}
        setPhotoId={setPhotoId}
        setPhoto={setPhoto}
        containment={containmentDOMRect}
        visibleItemsRef={visibleItemsRef}
      />
    </InfiniteScroll>
  )
}
export default InfiniteScrollWrapper
