import { useState, useEffect, useRef } from 'react'
import { XGrid, useGridApiRef } from '@material-ui/x-grid'
// import { DataGrid } from '@material-ui/data-grid'

// import usePicsumPhotosByBatch from '../hooks/usePicsumPhotosByBatch'
import fetchNewPhotos from './fetchNewPhotos'

const MAX_ROW_LENGTH = 300

const InfiniteList = () => {
  const apiRef = useGridApiRef()
  const [newRows, setNewRows] = useState([])
  const [page, setPage] = useState(0)
  const [reRender, setReRender] = useState(false)
  // const data = usePicsumPhotosByBatch(0)
  const data = []
  const [loading, setLoading] = useState(false)
  const [loadedRows, setLoadedRows] = useState([])

  const mounted = useRef(true)

  // const rows = usePicsumPhotosByBatch(page)
  const columns = [{ field: 'id' }]
  const handleOnRowsScrollEnd = (params) => {
    if (loadedRows.length <= MAX_ROW_LENGTH) {
      loadServerRows(page)
    }
  }

  const loadServerRows = async (newRowLength) => {
    setLoading(true)
    const newData = await fetchNewPhotos(page)

    if (mounted.current) {
      setLoading(false)
      setLoadedRows(loadedRows.concat(newData))
      setPage(page + 1)
    }
  }

  // const fetchNewRows = () => {
  //   console.log('fetching new rows')
  //   setPage((page) => {
  //     return page + 1
  //   })
  //   //  apiRef.current.updateRows(rows)
  // }
  // useEffect(() => {
  //   console.log('test run')
  //   setPage((page) => {
  //     return page + 1
  //   })
  //   //  apiRef.current.updateRows(rows)
  // }, [apiRef])
  useEffect(() => {
    return () => {
      mounted.current = false
    }
  }, [])

  // useEffect(() => {
  //   console.log('page: ', page)
  //   setNewRows([...newRows, ...rows])
  //   // newphotos = fetchPhotos()
  //   // apiRef.current.updateRows(rows)
  // }, [page])
  console.log('loadedRows 2222===================: ', loadedRows)
  const rows = data.concat(loadedRows)
  console.log('page: ', page)
  console.log('rows  ===================: ', rows)

  return (
    <div style={{ height: 400, width: '100%' }}>
      <XGrid
        {...data}
        rows={rows}
        loading={loading}
        hideFooterPagination
        onRowsScrollEnd={handleOnRowsScrollEnd}
        columns={columns}
        // apiRef={apiRef}
      />
    </div>
  )
}

// const InfiniteList = () => {
//   return 'Infinite'
// }

export default InfiniteList
