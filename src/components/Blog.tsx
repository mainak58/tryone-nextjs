import React from "react";
import MyContext from "./MyContext";

function Blog() {
    return (
        <>
            <div>Blog</div>
            <MyContext.Consumer>
                {(data) => <div>{data}</div>}
            </MyContext.Consumer>
        </>
    );
}

export default Blog;
