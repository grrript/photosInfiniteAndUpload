import { Dialog } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const PhotoDialog = (props) => {
  const { open, setOpen, setPhotoId, photoId, clickedPhoto } = props

  const useStyles = makeStyles({
    closeButton: {
      position: 'absolute',
      right: 0,
      top: 0,
      color: '#bbb',
      backgroundColor: 'rgba(0,0,0,.3)',
    },
    imgWrapper: {
      lineHeight: 1,
      fontSize: 0,
    },
  })
  const classes = useStyles()

  if (photoId < 0) {
    return <></>
  }

  const handleClose = () => {
    setOpen(false)
    setPhotoId(-1)
  }
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby={`selected photo is by ${clickedPhoto.author}`}
      open={open}
    >
      <IconButton
        aria-label='close'
        className={classes.closeButton}
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
      <div
        className={classes.imgWrapper}
        role='img'
        aria-label={`image by ${clickedPhoto.author}`}
      >
        <img
          alt={`from picsum by ${clickedPhoto.author}`}
          src={`https://picsum.photos/id/${photoId}/600/400
`}
        />
      </div>
    </Dialog>
  )
}

export default PhotoDialog
