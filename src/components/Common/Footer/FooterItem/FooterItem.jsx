import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './FooterItem.css'

const className = 'footer-item'
class FooterItem extends Component {
    render () {
        const { icon, title } = this.props
        return (
            <div className='className'>
                <p className={icon}></p>
                <p>{title}</p>
            </div>
        )
    }
}

FooterItem.prototypes = {
    icon: PropTypes.string,
    title: PropTypes.string
}

export default FooterItem