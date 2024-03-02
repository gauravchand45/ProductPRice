/* eslint-disable react/no-unknown-property */


function SearchBar() {
  return (
    <div className=" h-12 mt-10 flex justify-center items-center gap-1">
      <div className="w-4 h-4 relative left-8 flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none">
          <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <input className="w-[600px] pl-10 border-black placeholder:opacity-50 flex justify-start hover:bg-white hover:border-black focus:bg-white focus:border-black" type="text" placeholder="Search for a product" />
      <button className="w-24 bg-black border-none">Search</button>
    </div>
  )
}

export default SearchBar