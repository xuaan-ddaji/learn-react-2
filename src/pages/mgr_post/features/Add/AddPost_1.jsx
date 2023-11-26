import React from 'react';
import { Col, Drawer, Row, Space, Button } from 'antd';
import PropTypes from 'prop-types';

PreviewPost.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    post: PropTypes.array.isRequired,
};

function PreviewPost(props) {
    const { open, onClose, post } = props;
    // console.log(post);

    const DescriptionItem = ({ title, content }) => (
        <div className="site-description-item-profile-wrapper">
            <p className="site-description-item-profile-p-label">{title}: {content}</p>

        </div>
    );

    return (
        <div>
            <Drawer
                title={post.title}
                extra={
                    <Space>
                        <Button type="primary" onClick={onClose}>
                            OK
                        </Button>
                    </Space>
                }
                width={1000}
                placement="right"
                closable={false}
                onClose={onClose}
                open={open}
            >
                <Row>
                    <Col span={12}>
                        <DescriptionItem title="Tác giả" content={post.author} />
                    </Col>
                    <Col span={12}>
                        <DescriptionItem title="Ngày đăng bài" content={post.date} />
                    </Col>
                </Row>
                <Row>
                    {/* <h3>Nội dung:</h3><br /> */}
                    <div dangerouslySetInnerHTML={{ __html: post.description }} />
                </Row>
            </Drawer>
        </div>
    );
}

export default PreviewPost;