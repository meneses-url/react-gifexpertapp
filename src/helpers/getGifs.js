export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(
    category
  )}&api_key=hrigQZueYqTO4zwyK2GeE99j4YTiB2hX`;
  const res = await fetch(url);
  const data = await res.json();

  const dataFinal = data.data;

  console.log(data);
  console.log(dataFinal);

  const gifs = dataFinal.map((img) => {
    return {
      id: img.id,
      title: img.title,
      urlImg: img.images.fixed_width,
    };
  });

  console.log(gifs);

  return gifs;
};
