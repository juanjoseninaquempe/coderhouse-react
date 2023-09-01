import { useEffect, useState } from "react";
import Loader from "./Loader";
import NewsDetail from "./NewsDetail";
import { getItem } from "../asyncMock";
import { useParams } from "react-router-dom";

function NewsDetailContainer({ newsId }) {
  const [isLoading, setIsLoading] = useState(true);
  const [notice, setNotice] = useState({});
  const params= useParams()
  console.log(params)

  useEffect(() => {
    // getItem(1).then(result => {
    //   console.log(result)
    // }).catch(error => console.error(error)).finally(() => setIsLoading(false))
    fetch(`https://hn.algolia.com/api/v1/items/${params.id}`)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error("No se encontro una noticia con ese ID");
      })
      .then((result) => {
        console.log(result);
        const createdAt = new Date(result.created_at);
        setNotice({ ...result, createdAt: createdAt.toISOString() });
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <NewsDetail
        title={notice.title}
        author={notice.author}
        createdAt={notice.createdAt}
      />
    </>
  );
}

export default NewsDetailContainer;
