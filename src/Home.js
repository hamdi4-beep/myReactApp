import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
    const {data: blogs, isloading, error} = useFetch("http://localhost:8000/blogs");

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isloading && <div>Loading...</div>}
            <BlogList blogs={blogs} title="All Games"></BlogList>
            <BlogList blogs={blogs.filter(function(blog) {
                return blog.author === "Unknown";
            })} title="Unknown"></BlogList>
        </div>
    );
}

export default Home;