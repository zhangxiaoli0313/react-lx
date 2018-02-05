import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Header.css'

class Header extends Component {
    goBack () {
        const { history } = this.props
        history.goBack()
    }
    render () {
        const { location } = this.props
        return (
            <header>
                {
                    /\/classify/.test(location.pathname)
                    ? <b className='iconfont icon-zuojiantou1' onClick={this.goBack.bind(this)}></b>
                    : ''
                }
                <input type="text" placeholder='搜索' />
                <span>登录</span>
            </header>
        )
    }
}

export default withRouter(Header)