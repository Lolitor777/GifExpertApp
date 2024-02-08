

export const getGifs = async( item ) => {

const URL = `https://api.giphy.com/v1/gifs/search?api_key=dnZBrf6V57qgDu6iwg9VxJi1TMN7LHsT&q=${ item }&limit=20` 
const res = await fetch(URL)
const { data } = await res.json();

const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
}))


return gifs;
}