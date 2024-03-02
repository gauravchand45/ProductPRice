import Card from "./Card"
import SearchBar from "./SearchBar"


function Home() {
  return (
    <>
      <SearchBar/>
      <div>
        <div>
          <h1>Popular Products</h1>
          <div className="border h-auto py-8 flex-wrap flex gap-6">
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home