import React from 'react';
import 'antd/dist/antd.css';

function Content(){
    return(
        <div>
            <Content
                className="site-layout-background"
                style={{
                    padding: 30,
                    margin: 0,
                    minHeight: 200,
                }}
            >
                Content
            </Content>
        </div>
    );
}

export default Content;