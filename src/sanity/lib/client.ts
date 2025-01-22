import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
 
  projectId : "4006jjbr",
  

  dataset : "production",
  

  apiVersion : '2023-01-01',


  useCdn: true,


  token: 'skRTjmBlxujt5116CLY3gN2xyZM6hcA7azof4pZX2jxfLhYm9ZjYRJzUc9JYIAaU30qWReXndCpjrKSri0KkbMQ9arRb4wMo7pYytuWhrk3d0qccXfsoOOxe4j581pNkYDFUFx55VQN6EqQmcqlro5sMK3aTffIK9suujD4DL74tRwoGJgPW', // Set to false if statically generating pages, using ISR or tag-based revalidation
})
