import Link from "next/link";
import Layout from "../../../../components/Layout";
import { useRouter } from "next/router";

function Review({ reviews }) {
  const router = useRouter()
  if(router.isFallback){
    return <h1>Loading...</h1>
  }

  // if(!data.id) {
  //   return {
  //     notFound: true,
  //   }
  // }
    return (
    <>
    <Layout>
      <h5>{reviews.id}</h5>
      <h2>{reviews.title}</h2>
      <p>{reviews.body}</p>
      </Layout>
    </>
  );
}

export default Review;

export async function getStaticPaths() {
  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts`
  // );
  // const data = await response.json();
  // const paths = data.map((post) => {
    return {
      paths: [
       {params: {reviewId: '1'}},
       {params: {reviewId: '2'}},
       {params: {reviewId: '3'}},
      ],
      fallback: true
    };
  };
  // return {
  //   paths,
  //   fallback: false,
  // };

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.reviewId}`
  );
  const data = await response.json();
  console.log(data);

  return {
    props: {
      reviews: data,
    },
  };
}
