import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  const showBook = true;
  const showBlog = true;
  const showCourse = true;

  return (
    <div>

      <h1>Blogger App</h1>

      {showBook && <BookDetails />}

      {showBlog ? <BlogDetails /> : null}

      {showCourse ? <CourseDetails /> : null}

    </div>
  );
}

export default App;