import Link from "next/link";
import Layout from "../../../../components/Layout";

function ReviewList({ reviews, courses }) {
  return (
    <Layout>
      <h1>React Course Reviews</h1> <br />
      {reviews && reviews.map((review) => {
        return(
          <div key={review.id}>
          <Link href={`review/${review.id}`} passHref>
            <h5>Title: {review.title}</h5>
            <p>Review: {review.body}</p>
            </Link>
          </div>
        )
      })}
    </Layout>
  );
}

export default ReviewList;

export async function getServerSideProps(context) {
  const { params } = context;
  const { courses } = params;
  const response = await fetch(`http://localhost:3000/courses?category?=${frontend_courses}`)
  const data = await response.json()
  console.log(data)

  return {
    props: {
      reviews: data,
      courses,
    }
  }
}

