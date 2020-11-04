import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCourses } from "../../redux/actions/course";
import Footer from "../common/footer/Footer";
import NavBar from "../common/nav/NavBar";
import Spinner from "../common/Spinner";
import "./CourseDetail.css";

const getCourseBySlug = (courses, slug) => {
  return courses.find((course) => course.slug === slug) || null;
};

const CourseDetail = ({ match }) => {
  const { slug } = match.params;

  const courses = useSelector((state) => state.courses);

  const course = useSelector((state) => getCourseBySlug(courses, slug));

  const dispatch = useDispatch();

  useEffect(() => {
    if (courses.length === 0) {
      dispatch(loadCourses()).catch((error) => {
        console.log("Failed to load subjects " + String(error));
      });
    }
  }, [courses, dispatch]);

  if (courses.length > 0 && course == null) {
    // TODO
    // FIX THIS
    return "NO SUCH COURSE AVAILABLE";
  }

  return (
    <>
      <NavBar />

      {course === null ? (
        <Spinner />
      ) : (
        <>
          <div className="single__head ">
            <div className="pr-container">
              <div className="pr-row">
                <div className="single__page__center">
                  <h1 className="single__page__title">{course.title}</h1>
                  <div className="single__box">
                    <div>
                      <i className="fa fa-user"></i>
                      <span>7</span>
                      <p>STUDENTS</p>
                    </div>
                    <div>
                      <i className="fa fa-star"></i>
                      <span className="rating-score">4.9</span>
                      <p>REVIEWS (5)</p>
                    </div>
                    <div>
                      <i className="fa fa-clock-o"></i>
                      <span>10.3</span>
                      <p>LEARNING HOURS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="single__main">
            <div className="container">
              <div className="row">
                <main>
                  <div className="single__page__image">
                    <p style={{ textAlign: "center" }}>
                      <iframe
                        title={course.title}
                        width="743"
                        height="418"
                        src="https://www.youtube.com/embed/ScMzIvxBSi4"
                        frameborder="0"
                        allowfullscreen
                      ></iframe>
                    </p>
                  </div>
                  <div className="single__page__content">
                    <div className="about" style={{ display: "block" }}>
                      <h1>About</h1>
                      <p>{course.overview}</p>
                    </div>
                  </div>
                </main>
                <aside id="secondary" className="">
                  <div className="single__page__sidebar">
                    <section className="widget">
                      <span className="featured-course__meta">$0</span>
                      <a className="btn-join" href="/">
                        ENROLL
                      </a>
                    </section>

                    <section className="widget">
                      <div className="inline course__information">
                        <h2 className="widget-title">Course Features</h2>
                      </div>
                    </section>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default CourseDetail;
