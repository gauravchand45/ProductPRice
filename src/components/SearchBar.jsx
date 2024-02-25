import {FaSearch} from 'react-icons/fa'

function SearchBar() {
  return (
    <div>
        <FaSearch/>
        <input type='text' placeholder='Search For Products and More' />
    </div>
  )
}

export default SearchBar