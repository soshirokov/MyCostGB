import React from 'react'
import { Col, Row, Typography } from 'antd';
import NewCalendar from '../../Components/Calendar'
import { AddCosts } from '../../Components/AddCosts';
import { PieChart } from '../../Components/PieChart';
import { logout } from '../../utils/firebase';
import { Button } from 'antd';
import {CategoriesSetting} from '../../Components/CategoriesSetting'
import "./style/index.scss";

const { Title } = Typography

const Home = () => {
    return (
        <div className='Home'>
          <div className="Logout"><Button type="text" onClick={logout}>Logout</Button></div>
            <Title level={2}>Your today costs</Title>
            <Row>
                <Col span={8}><NewCalendar /></Col>
                <Col span={8}><AddCosts /></Col>
                <Col span={8}><PieChart /></Col>
                <Col span={8}><CategoriesSetting/></Col>
            </Row>
        </div>
    );
};




export {Home}