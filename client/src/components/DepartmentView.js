import React from 'react'
import axios from 'axios'
import Items from './Items'
import { Header, Icon, Button } from 'semantic-ui-react'

export default class Department extends React.Component {
    state = { department: {} }

    componentDidMount() {
        axios.get(`/api/departments/${this.props.match.params.id}`)
            .then(res => {
                this.setState({ department: res.data, })
            })
    }

    render() {
        const { name, id } = this.state.department
        return (
            <div>
                <Header icon as='h1' textAlign='center'>
                    <Icon name='shopping basket' circular />
                    {name}
                    <br />
                </Header>
                <hr />
                <br />
                <Items departmentId={this.props.match.params.id} as='h3' />
            </div>
        )
    }

}

