import React, { Component } from 'react'

class List extends Component {
    render () {
        const { imageurl, wname } = this.props
        return (
            <div>
                <img src={imageurl} alt=""/>
                <div>{wname}</div>
            </div>
        )
    }
}

export default List