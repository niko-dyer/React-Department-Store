import React from 'react'
import axios from 'axios'
import DepartmentForm from './DepartmentForm'
import { Link } from 'react-router-dom'
import { Card, Header, Image, Button } from 'semantic-ui-react'

export default class Departments extends React.Component {
    state = {
        departments: [],
        editing: false
    }

    toggleEdit = () => this.setState({ editing: !this.state.editing })

    componentDidMount() {
        axios.get('/api/departments')
            .then(res => {
                this.setState({ departments: res.data })
            })
    }

    deleteDepartment = (id) => {
        axios.delete(`/api/departments/${id}`)
            .then(res => {
                const { departments } = this.state
                this.setState({ departments: departments.filter(d => d.id !== id) })
            })
    }

    updateDepartment = (id) => {
        axios.put(`/api/departments/${id}`, this.state.departments.name)
            .then( res => {
                const departments = this.state.departments.map( d => {
                    if (d.id === id)
                        return res.data
                    return d
                })
                this.setState({ departments })
            })
        this.toggleEdit()
    }

    renderDepartments = () => {
        const { departments } = this.state

        if (departments.length <= 0)
            return <h2>No Departments</h2>
        return departments.map(department => (
            <Card key={department.id}>
                <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4JW3rdMrAPPNG2HVZSlTMwE6_IhQYLOHTuN1olOvyKKUx7VqgQ' />
                <Card.Content>
                    <Card.Content>
                        {
                            this.state.editing ?
                                <DepartmentForm name={department.name} id={department.id} updateDepartment={this.updateDepartment} />
                            :
                                <Card.Header as={Link} to={`/departments/${department.id}`} >{department.name}</Card.Header>
                        }
                    </Card.Content>
                </Card.Content>
                <Card.Content>
                    <Button.Group>
                        <Button color='red' onClick={() => this.deleteDepartment(department.id)}>Delete</Button>
                        <Button.Or />
                        <Button positive onClick={this.toggleEdit}>Edit</Button>
                    </Button.Group>
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
                    {this.renderDepartments()}
                </Card.Group>
            </div>
        )
    }
}