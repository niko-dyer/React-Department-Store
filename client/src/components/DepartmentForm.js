import React from 'react'
import axios from 'axios'
import { Form, Header } from 'semantic-ui-react'

export default class DepartmentForm extends React.Component {
    state = { name: '' }

    handleChange = (e) => {
        const { target: { name, value } } = e
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const department = this.state
        axios.post('/api/departments', department )
            .then( res => {
                this.props.history.push('/')
            })
            this.setState({ name: '' })
    }

    render() {
        return (
            <div>
                <Header as='h1'>New Department</Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input
                        label='Name'
                        name='name'
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    >
                    </Form.Input>
                    <Form.Button color='blue'>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}