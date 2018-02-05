import React, { Component } from 'react'
import { connect } from 'react-redux'

class Mine extends Component {
    render () {
        // const {storeName, storeAge} = this.props
        return (
            <div>Mine</div>
        )
    }
}

// const mapStateToProps = (state, owmProps) => {
//     return {
//         storeName: state.name,
//         storeAge: state.age
//     }
// }
// export default connect(mapStateToProps)(Mine)
export default Mine