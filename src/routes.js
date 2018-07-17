import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import AboutNitc from './components/About nitc'
import AllCourses from './components/AllCourses'
import Benefits from './components/Benefits'
import Capacity from './components/Capacity'
import CoreValues from './components/Core Values'
import Events from './components/Events'
import InternationalTrainingProgram from './components/International Training Program'
import ManagementCommittee from './components/Management Committee'
import NitcSecretariat from './components/NITC Secretariat'
import NitcTrainer from './components/NITC Trainer'
import RegistrationFrom from './components/Registration NITC Training'
import RegularTrainingProgram from './components/Regular Training Program'
import VisionMission from './components/Vision & Mission'
Vue.use(VueRouter)
const router = new VueRouter({
  routes:[
    {
      path:'/',
      component:Home
    },
    {
      path:'/About_Nitc',
      component:AboutNitc
    },
    {
      path:'/AllCourses',
      component:AllCourses
    },
    {
      path:'/Benefits',
      component:Benefits
    },
    {
      path:'/Capacity',
      component:Capacity
    },
    {
      path:'/Core_Values',
      component:CoreValues
    },
    {
      path:'/Events',
      component:Events
    },
    {
      path:'/International_Training_Program',
      component:InternationalTrainingProgram
    },
    {
      path:'/Management_Committee',
      component:ManagementCommittee
    },
    {
      path:'/NITC_Secretariat',
      component:NitcSecretariat
    },
    {
      path:'/NITC_Trainer',
      component:NitcTrainer
    },
    {
      path:'/Registration_From',
      component:RegistrationFrom
    },
    {
      path:'/Regular_Training_Program',
      component:RegularTrainingProgram
    },
    {
      path:'/Vision_Mission',
      component:VisionMission
    },
  ]
})
export default router

