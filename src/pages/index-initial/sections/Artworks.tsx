import Art from "@/assets/work1.jpg"

const Artworks = () => {
  return (
    <div>
        <div>
            <h2>Untitled</h2>
            <p>2021</p>
            <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
            </p>
        </div>
        <div>
            <img src={Art} alt="artwork"/>
        </div>
    </div>
  )
}

export default Artworks