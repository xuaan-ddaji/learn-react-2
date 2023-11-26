import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Table, Button } from 'antd';
import PreviewPost from '../Preview/PreviewPost';
import ButtonGroup from 'antd/es/button/button-group';
import FormPost from '../Add/AddPost_1'

ManagerPostList.propTypes = {
    posts: PropTypes.array,
};

ManagerPostList.defaultProps = {
    posts: null,
}

const tableHeight = 550;
const pageSize = 10;

function ManagerPostList(props) {
    const columns = [
        {
            title: 'Author',
            dataIndex: 'author',
            key: 'author',
        },
        Table.EXPAND_COLUMN,
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (record) => (
                <ButtonGroup>
                    <Button type="primary" onClick={() => showPreview(record)} >
                        Preview
                    </Button >
                    <Button type="primary" onClick={() => showPreview(record)} >
                        Update
                    </Button >
                    <Button type="primary" onClick={() => showPreview(record)} >
                        Delete
                    </Button >
                </ButtonGroup>
            ),
        },
    ];

    const editting = useRef(null);

    const setEditting = (post) => {
        editting.current = post;
    };

    // const [isModalVisible, setIsModalVisible] = useState(false);

    const showPreview = (params) => {
        setEditting(params);
        setOpen(true);
    };

    const showForm = (params) => {
        setEditting(params);
        setOpenForm(true);
    };

    const [open, setOpen] = useState(false);
    const [openForm, setOpenForm] = useState(false);

    function onClose(params) {
        setOpen(false)
    }

    function onCloseForm(params) {
        setOpenForm(false)
    }

    const { posts } = props;

    // const expandedRowRender = (record) => (
    //     <p
    //         style={{
    //             margin: 0,
    //         }}
    //         dangerouslySetInnerHTML={{ __html: record.description }}
    //     >
    //     </p>
    // );

    return (
        <div>
            <Button type="primary" onClick={() => showForm(null)} >
                Add New
            </Button >
            <FormPost open={openForm} onClose={onClose}
                // isModalVisible={isModalVisible}
                // setIsModalVisible={setIsModalVisible}
                post={{ ...editting.current }}
            />
            <Table
                columns={columns}
                // expandable={{
                //     expandedRowRender: expandedRowRender,
                // }}
                dataSource={posts}
                pagination={{
                    pageSize: pageSize,
                }}
                scroll={{
                    y: tableHeight,
                }}
            />
            <PreviewPost open={open} onClose={onClose}
                // isModalVisible={isModalVisible}
                // setIsModalVisible={setIsModalVisible}
                post={{ ...editting.current }}
            />
        </div>
    );
};

export default ManagerPostList;