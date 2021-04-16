const handleFormSubmit = (event) => {
  event.preventDefault()
}

const SearchBox = (props) => {

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='form-row mb-5'>
        <div className='col-12'>
          <input
            onChange={props.searchMovieProp}
            value='dfsd'
            type='text'
            className='form-control'
            placeholder='Seach a movie' />
        </div>
      </div>
    </form>
  )
}

export default SearchBox
