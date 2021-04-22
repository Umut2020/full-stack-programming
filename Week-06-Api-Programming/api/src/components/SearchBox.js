const handleFormSubmit = (event) => {
  event.preventDefault()
}

const SearchBox = (props) => {

  return (

    <div>
      <form onSubmit={handleFormSubmit}>
        <div className='form-row mb-5'>
          <div className='col-12'>
            <input
              onChange={props.searchMovieProp}
              type='text'
              className='form-control'
              placeholder='Seach a movie' />
          </div>
        </div>
      </form>
    </div>

  )
}

export default SearchBox
