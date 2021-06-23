import Vue from 'vue'
import Router from 'vue-router'
import Registration from '../components/Registration'
import Home from '../components/Home'
import About from '../components/About'
import Employee from '../components/Employee'
import EditEmployee from '../components/EditEmployee'
import EmployeeList from '../components/EmployeeList'
Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home

    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/employee',
      name: 'Employee',
      component: Employee,
      children: [
        {
          path: '/edit-emp',
          name: 'Editemp',
          component: EditEmployee,
          props: true

        }
      ]
    },
    {
      path: '/employees',
      name: 'EmployeeList',
      component: EmployeeList
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration
    }
  ]
})
