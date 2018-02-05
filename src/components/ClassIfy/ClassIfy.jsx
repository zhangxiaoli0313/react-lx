import React, { Component } from 'react'
import { Link, Route,BrowserRouter as Router } from 'react-router-dom'

const Test = ({match}) => {
    return (
        <div>
            {match.params.id}
        </div>
    )
}
class ClassIfy extends Component {
    render () {
        const { match } = this.props
        return (
            <div>
                <Router>
                    <div>
                        <Link to={`${match.url}/a`}>
                            one
                        </Link>
                        <Link to={`${match.url}/b`}>
                            two
                        </Link>
                        <Route path={`${match.url}/:id`} component={Test} />
                        <Route path={`${match.url}`} render={() => {
                            return <div>ClassIfy</div>
                        }} />
                    </div>
                </Router>
            </div>
        )
    }
}

export default ClassIfy