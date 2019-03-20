import React from 'react'
import axios from 'axios'
import { Card, Header } from 'semantic-ui-react'

export default class Items extends React.Component {
    state = { items: [] }

    componentDidMount() {
        const { departmentId } = this.props
        axios.get(`/api/departments/${departmentId}/items`)
            .then( res => {
                this.setState({ items: res.data })
            })
    }

    renderItems = () => {
        const { items } = this.state

        if (items.length <= 0)
            return <h2>No Items</h2>
        return items.map( item => (
            <Card>
                <Card.Content>
                    <Card.Header>{ item.name }</Card.Header>
                    <Card.Meta>${ item.price }</Card.Meta>
                    <Card.Description>{ item.description }</Card.Description>
                </Card.Content>
            </Card>
        ))
    }

    render() {
        return (
            <div>
                <Header as='h1'>Items</Header>
                <br />
                <Card.Group>
                    { this.renderItems() }
                </Card.Group>
            </div>
        )
    }
}