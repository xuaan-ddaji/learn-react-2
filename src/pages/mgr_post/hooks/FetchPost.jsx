import { useEffect, useState } from "react";

function useFetchPost(props) {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const data = [
            {
                key: 1,
                author: 'John Brown',
                title: 'Description',
                date: '11/02/2023',
                description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
            },
            {
                key: 2,
                author: 'Jim Green',
                title: "Miêu tả",
                date: '01/03/2023',
                description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
            },
            {
                key: 3,
                author: 'Jim Joe',
                title: "About me",
                date: '20/05/2023',
                description: 'This not expandable',
            },
            {
                key: 4,
                author: 'Joe Black',
                title: "Hello",
                date: '03/11/2023',
                description: `<p>
                <span style="font-size: 18px;">Quill Rich Text Editor</span>
            </p>
            <p>
                <br>
            </p>
            <p>Quill is a free,
                <a href="https://github.com/quilljs/quill/" target="_blank">open source</a>WYSIWYG editor built for the modern web. With its
                <a href="http://quilljs.com/docs/modules/" target="_blank">extensible architecture</a>and a
                <a href="http://quilljs.com/docs/api/" target="_blank">expressive API</a>you can completely customize it to fulfill your needs. Some built in features include:</p>
            <p>
                <br>
            </p>
            <ul>
                <li>Fast and lightweight</li>
                <li>Semantic markup</li>
                <li>Standardized HTML between browsers</li>
                <li>Cross browser support including Chrome, Firefox, Safari, and IE 9+</li>
            </ul>
            <p>
                <br>
            </p>
            <p>
                <span style="font-size: 18px;">Downloads</span>
            </p>
            <p>
                <br>
            </p>
            <ul>
                <li>
                    <a href="https://quilljs.com" target="_blank">Quill.js</a>, the free, open source WYSIWYG editor</li>
                <li>
                    <a href="https://zenoamaro.github.io/react-quill" target="_blank">React-quill</a>, a React component that wraps Quill.js</li>
            </ul>`,
            },
        ];

        setPostList(data);
    }, [])

    return postList;
}

export default useFetchPost;