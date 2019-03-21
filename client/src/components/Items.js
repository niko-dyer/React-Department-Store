import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Card, Header, Button, Icon } from 'semantic-ui-react'

export default class Items extends React.Component {
    state = { items: [] }

    componentDidMount() {
        const { departmentId } = this.props
        axios.get(`/api/departments/${departmentId}/items`)
            .then( res => {
                this.setState({ items: res.data })
            })
    }

    deleteItem = (id) => {
        axios.delete(`/api/departments/${this.props.departmentId}/items/${id}`)
            .then(res => {
                const { items } = this.state
                this.setState({ items: items.filter(i => i.id !== id) })
            })
    }

    renderItems = () => {
        const { items } = this.state

        if (items.length <= 0)
            return <h2>No Items</h2>
        return items.map( item => (
            <Card key={item.id}>
                <Card.Content>
                    <Card.Header>{ item.name }</Card.Header>
                    <Card.Meta>${ item.price }</Card.Meta>
                    <Card.Description>{ item.description }</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button icon color='red' onClick={() => this.deleteItem(item.id)} >
                        <Icon name='trash' />
                    </Button>
                </Card.Content>
            </Card>
        ))
    }

    render() {
        return (
            <div>
                <Header as='h1'>Items</Header>
                <br />
                <Button as={Link} to={`/departments/${this.props.departmentId}/item/new`}>Add Item</Button>
                <br />
                <br />
                <Card.Group>
                    { this.renderItems() }
                </Card.Group>
            </div>
        )
    }
}

