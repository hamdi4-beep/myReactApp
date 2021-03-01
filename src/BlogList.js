function BlogList({blogs, title}) {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(function(blog) {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Made by {blog.author}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default BlogList;