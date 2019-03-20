import React from 'react'
import { Form, Header } from 'semantic-ui-react'

export default class ItemForm extends React.Component {
    defaultValues = { name: '', description: '', price: '' }
    state = { ...this.defaultValues }

    render() {
        const { name, price, description, department } = this.state
        return (
            <div>
                <Header as='h1'>New Item</Header>
                <Form onSubmit={this.handleSubmit}>
                    
                </Form>
            </div>
        )
    }
}