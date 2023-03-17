import Layout from "../../../components/Layout";
import { useRouter } from "next/router";

function CourseDetail() {
    const router = useRouter()
    const courseId = router.query.courseId
  return (
    <Layout>
      <h1>The all-in-one guide to {courseId}</h1>
    </Layout>
  );
}

export default CourseDetail;
