const ArtFeatureTwo = () => {
  return (
    <div className="bg-art-feature-two bg-cover h-screen bg-center grid grid-cols-2 text-white">
      <div className="col-start-2 flex">
        <p className="rotate-180 -ml-8 py-5 text-[1vh]" style={{ writingMode: "vertical-rl" }}>
          “Paint by Numbers” © 2025
        </p>
        <div className="m-auto text-right px-32">
          <h1 className="font-bold italic">
            Paint by Numbers – The Meaning of Life
          </h1>
          <p>
            A commentary on the monotony and structure of modern existence. From a distance, these works appear orderly and harmonious, yet upon closer examination, they reveal deeper layers of turmoil and complexity—an analogy for human life itself.
          </p>        
        </div>
      </div>
    </div>
  )
}

export default ArtFeatureTwo