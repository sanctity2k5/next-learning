import Link from "next/link";
import Layout from "../../components/Layout";

const Course = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Select Courses</h1>
        <ul className="bg-warning">
          <li className="nav-item">
            <Link className="nav-link text-dark" href="courses/reactCourse">
              Learn ReactJs
            </Link>
          </li>
          <li>
            <Link className="nav-link text-dark" href="courses/nextCourse">
              Learn NextJs
            </Link>
          </li>
          <li>
            <Link className="nav-link text-dark" href="courses/typescriptCourse">
              Learn TypeScript
            </Link>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default Course;
