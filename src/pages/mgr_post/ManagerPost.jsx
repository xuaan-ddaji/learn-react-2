import React from 'react';
import MangerPostList from './features/List/ManagerPostList';
import useFetchPost from './hooks/FetchPost';

function ManagerPost(props) {
    const postList = useFetchPost();
    // console.log(postList);

    return (
        <div>
            <MangerPostList posts={postList} />
        </div>
    );
}

export default ManagerPost;