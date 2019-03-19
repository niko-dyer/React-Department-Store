import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Card, Header, Image, Button } from 'semantic-ui-react'

export default class Departments extends React.Component {
    state = { 
        departments: []
    }

    componentDidMount() {
        axios.get('/api/departments')
            .then( res => {
                this.setState({ departments: res.data })
            })
    }

    renderDepartments = () => {
        const { departments } = this.state

        if (departments.length <= 0)
            return <h2>No Departments</h2>
        return departments.map( department => (
            <Card key={department.id}>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4JW3rdMrAPPNG2HVZSlTMwE6_IhQYLOHTuN1olOvyKKUx7VqgQ' />
                <Card.Content>
                    <Card.Content>
                        <Card.Header>{ department.name }</Card.Header>
                    </Card.Content>
                </Card.Content>
            </Card>
        ))
    }

    render() {
        return (
            <div>
                <Header as='h1'>Departments</Header>
                <br />
                <Button as={Link} color='orange' inverted to='/departments/new'>
                    Add Department
                </Button>
                <br />
                <hr />
                <Card.Group centered itemsPerRow={4}>
                    { this.renderDepartments() }
                </Card.Group>
            </div>
        )
    }
}