
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ item }) => {

  const { images, isLoading } = useFetchGifs( item )


  return (
    <>
      <h3>{item}</h3>
      {
          isLoading ? ( <h2>cargando...</h2> )
          : null
      }
      
      <div className="card-grid">
        {
            images.map( ( image ) => (
                <GifItem key={ image.id } { ...image }/>
            ))
        }
      </div>

    </>
  );
};
