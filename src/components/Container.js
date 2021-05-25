const Container = ({ children }) => {
  return (
    <div
      className='container'
      id='container'
      style={{
        backgroundColor: '#fff',
        padding: '0',
        overflow: 'auto',
        maxHeight: '90vh',
        maxWidth: '330px',
        margin: '2.5rem auto',
        border: '1px solid #ccc',
      }}
    >
      {children}
    </div>
  )
}

export default Container
