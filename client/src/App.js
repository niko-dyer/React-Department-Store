import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Departments from './components/Departments'
import DepartmentView from './components/DepartmentView'
import DepartmentForm from './components/DepartmentForm'
import ItemForm from './components/ItemForm'
import NoMatch from './components/NoMatch'
import { Container } from 'semantic-ui-react'

const App = () => (
  <Fragment>
    <Container>
      <Switch>
        <Route exact path='/' component={Departments} />
        <Route exact path='/departments/new' component={DepartmentForm} />
        <Route exact path='/departments/:id' component={DepartmentView} />
        <Route exact path='/departments/:id/item/new' component={ItemForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
)


export default App
