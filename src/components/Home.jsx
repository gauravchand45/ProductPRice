import Card from "./Card"
import Footer from "./Footer"
import SearchBar from "./SearchBar"


function Home() {
  return (
    <>
      <SearchBar/>
      <div>
        <div>
          <h1>Popular Products</h1>
          <div className="border-b h-auto py-8 flex-wrap flex gap-6">
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home