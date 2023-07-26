import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Button, Col, Layout, Menu, Row } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUserLogin, selectIsAuth } from '../../redux/auth-selectors'
import { logout } from '../../redux/auth-reducer'
import './Header.style.css';

export type MapPropsType = {}

export const Header: React.FC<MapPropsType> = (props) => {

    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentUserLogin)

    const dispatch = useDispatch()

    const logoutCallback = () => {
        dispatch(logout())
    }


    const { Header } = Layout

    return <Header>
        <Row>
            <Col span={18}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1"><Link to="/gossipers">Gossipers</Link></Menu.Item>
                </Menu>
            </Col>

            {isAuth
                ? <> <Col span={1}>
                    <Avatar alt={login || ''} icon={<UserOutlined/>} />
                </Col>
                    <Col span={5}>
                        <Button onClick={logoutCallback}>LogOut</Button>
                    </Col>
                </>
                : <Col span={6}>
                    <Button>
                        <Link to={'/login'}>Login</Link>
                    </Button>
                </Col>}

        </Row>


    </Header>
}