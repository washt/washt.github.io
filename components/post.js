const Post = ({ title, date, content}) => {
    return (
        <div className="post">
            <h2>{title}</h2>
            <h4>{date}</h4>
            <p>{content}</p> # an exported mdx component
        </div>
    );
}

export default Post;