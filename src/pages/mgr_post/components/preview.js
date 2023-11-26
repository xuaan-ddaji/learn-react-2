import React, { useState } from 'react';
import { Button, Drawer, Radio, Space } from 'antd';

const Preview = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <Space>
                <Button type="primary" onClick={showDrawer}>
                    Open
                </Button>
            </Space>
            <Drawer
                title="Drawer with extra actions"
                footer="Footer"
                placement='right'
                width={'100%'}
                onClose={onClose}
                open={open}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};
export default Preview;