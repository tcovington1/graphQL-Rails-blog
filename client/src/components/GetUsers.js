import React, { useEffect, useState } from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_USERS } from '../GraphQL/Queries'
import { User } from './User';

function GetUsers() {

  const { error, loading, data } = useQuery(LOAD_USERS);
  const [ users, setUsers ] = useState([]);
  // console.log(`users: ${users}`)

  useEffect(() => {
    if(data) {
      console.log(data?.users)
      setUsers(data.users)

    }
  }, [data])

  return (
    <div>
<div class="bg-white">
  <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-12">
      <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">From The Blog</h2>
        <p class="text-xl text-gray-500">Check out our creative team of bloggers. Click a blogger to see their posts!</p>
      </div>
      <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
      {/* Users go here */}
      {users.map((user) => {
        return <User user={user}/> 
      })}
      </ul>
    </div>
  </div>
</div>

    </div>
  )
}

export default GetUsers
