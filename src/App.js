import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./Layout/Layout";
import Gallery from "./Gallery/Gallery";

function App() {
  const [images, setImages] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  const fetchImages = async (page) => {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=5`
    );
    const data = await response.json();
    return data;
  };

  const updateImages = async (page) => {
    const newImages = await fetchImages(page);
    setImages([...images, newImages]);
  };

  useEffect(() => {
    updateImages(currPage);

    return () => {
      //cleanup
    };
  }, [currPage]);

  return (
    <div className="app">
      <Layout>
        <section className="gallery">
          {images.map((batch) => (
            <Gallery key={batch[0].id} images={batch} />
          ))}
        </section>
        <button
          className="btn"
          onClick={() => {
            setCurrPage(currPage + 1);
          }}
        >
          Load More
        </button>
      </Layout>
    </div>
  );
}

export default App;
