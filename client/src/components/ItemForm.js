import React from 'react'
import { Form, Header } from 'semantic-ui-react'
import axios from 'axios';

export default class ItemForm extends React.Component {
    state = { name: '', description: '', price: '' }

    handleSubmit = (e) => {
        e.preventDefault() 
        const item = this.state
        axios.post(`/api/departments/${this.props.match.params.id}/items`, item)
            .then( res => {
                this.props.history.push(`/departments/${this.props.match.params.id}`)
            })
        this.setState({ name: '', description: '', price: 0 })
    }

    handleChange = (e) => {
        const { target: { name, value } } = e
        this.setState({ [name]: value })
    }

    render() {
        const { name, price, description } = this.state
        return (
            <div>
                <Header as='h1'>New Item</Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Input
                            label='Name'
                            name='name'
                            placeholder='Name'
                            value={name}
                            onChange={this.handleChange}
                            required
                        />
                        <Form.Input
                            label='Description'
                            name='description'
                            placeholder='Description...'
                            value={description}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            label='Price'
                            type='number'
                            placeholder='$$'
                            name='price'
                            value={price}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Button color='blue' inverted>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}