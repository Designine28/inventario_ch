import { SmileOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Select,
} from 'antd';
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

export default function Reportes(){
    return(
        <div>
            <h1 className="text">Reportes</h1>
            <div className="container">
                <Form {...formItemLayout}>
                    <Form.Item label="Success" hasFeedback validateStatus="success">
                        <Input placeholder="I'm the content" id="success" />
                    </Form.Item>
                    <Form.Item label="Warning" hasFeedback validateStatus="warning">
                        <Input placeholder="Warning" id="warning2" />
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}