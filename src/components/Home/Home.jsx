import React, { Component } from 'react'
import axios from 'axios'
import List from './List'

class Home extends Component {
    constructor () {
        super()
        this.state = {
            jdList: null
        }
    }
    componentDidMount () {
        axios.get('/api/jdlist')
        .then((res) => {
            const jdList = JSON.parse(res.data.recommend)
            if (jdList.code !== "0") return
            this.setState({
                jdList: jdList.wareInfoList
            })
        })
        .catch(e => {
            throw Error(e)
        })
    }
    render () {
        const { jdList } = this.state
        return (
            <div>
                {
                    jdList !== null && jdList.map((item, key) => {
                        return <List {...item} key={key}/>
                    })
                }
            </div>
        )
    }
}

export default Home