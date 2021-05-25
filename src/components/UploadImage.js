import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: 0,
    },
  },
  input: {
    display: 'none',
  },
}))

const UploadImage = ({ visibleItemsRef, items, setItems }) => {
  const classes = useStyles()
  const handleChange = (e) => {
    const download_url = URL.createObjectURL(e.target.files[0])
    const randomId = 40000 + Math.floor(Math.random() * 1000)
    const id = randomId.toString()

    const newItem = {
      id,
      download_url,
      author: 'unknown - image uploaded from local drive',
      local: true,
    }
    const newItems = [...items]
    const indexOfPhotoAtTop = Math.min(visibleItemsRef.current)
    newItems.splice(indexOfPhotoAtTop, 0, newItem)
    setItems(newItems)
  }
  return (
    <div className={classes.root}>
      <input
        accept='image/*'
        className={classes.input}
        id='contained-button-file'
        multiple
        type='file'
        onChange={handleChange}
      />
      <label htmlFor='contained-button-file'>
        <Button variant='contained' color='primary' component='span'>
          Upload
        </Button>
      </label>
    </div>
  )
}

export default UploadImage
