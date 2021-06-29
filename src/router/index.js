import Vue from 'vue'
import Router from 'vue-router'
import Registration from '../components/Registration'
import Home from '../components/Home'
import About from '../components/About'
import Employee from '../components/Employee'
import EditEmployee from '../components/EditEmployee'
import EmployeeList from '../components/EmployeeList'
import EmployeeByID from '../components/EmployeeByID'
import Employeepage from '../otherComponents/Employeepage'
import EmployeePut from '../otherComponents/EmployeePut'
import EmployeeDelete from '../otherComponents/EmployeeDelete'
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
      component: Employeepage,
   
    },
    {
      path: '/employees',
      name: 'EmployeeList',
      component: EmployeeList,
      children: [
        {
          path: '/employees/:id',
          name: 'Empbyid',
          component: EmployeeByID,
          props:true
        }
      ]
     },
   { 
      path: '/registration',
      name: 'Registration',
      component: Registration
    },
    { 
      path: '/EmployeePut/:id',
      name: 'EmployeePut',
      component: EmployeePut,
      props: true
    },
 
    { 
      path: '/EmployeeDelete/:id',
      name: 'EmployeeDelete',
      component: EmployeeDelete,
      props:true
    }
  ]
})
