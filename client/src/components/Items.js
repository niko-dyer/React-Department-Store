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
            <div as={divAlign}>
                <FancyButton as={Link} to={`/departments/${this.props.departmentId}/item/new`}>Add Item</FancyButton>
                <Header as={coolHeader}>Items</Header>
                <br />
                <Card.Group centered>
                    { this.renderItems() }
                </Card.Group>
            </div>
        )
    }
}

const coolHeader = styled.h1`
    text-align: center;
`

const FancyButton = styled.div`
    display: flex;
    justify-content: center
    align-items: center
    position: relative;
    padding: 20px 38px;
    top: 0;
    font-size: 30px;
    border-radius: 4px;
    border-bottom: 1px solid rgba( 28, 227, 125, 0.5 );
    background: rgba( 22, 230, 137, 1 );
    color: #fff;
    box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.1 );
    transition: all 0.2s ease;
  
  &:hover {
    top: -10px;
    box-shadow: 0px 10px 10px rgba( 15, 165, 60, 0.2 );
    color: #fff
    transform: rotateX(20deg);
  }
  
  &:active {
    top: 0px;
    box-shadow: 0px 0px 0px rgba( 15, 165, 60, 0.0 );
    background: rgba( 20, 224, 133, 1 );
  }
`

const divAlign = styled.div`
  display: flex
  justify-content: center
  align-items: center
`