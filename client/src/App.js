import './index.css';

import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from "@apollo/client/link/error"
import GetUsers from './components/GetUsers';

const errorLink =  onError(({ grapqlErrors, networkError })=> {
  if(grapqlErrors) {
    grapqlErrors.map(({message,location,path}) => {
      alert(`Graphql Error: ${message}`)
    })
  }
}) 

const link = from([
  errorLink,
  new HttpLink({uri: "http://localhost:3000/graphql"})
])


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

function App() {
  return (
    <ApolloProvider client={client}>
      <GetUsers />
    </ApolloProvider>
//     <div className="App">
//       <div class="bg-white">
//   <div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
//     <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//       <span class="block">Ready to dive in?</span>
//       <span class="block">Start your free trial today.</span>
//     </h2>
//     <div class="mt-8 flex justify-center">
//       <div class="inline-flex rounded-md shadow">
//         <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
//           Get started
//         </a>
//       </div>
//       <div class="ml-3 inline-flex">
//         <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200">
//           Learn more
//         </a>
//       </div>
//     </div>
//   </div>
// </div>
//     </div>
  );
}

export default App;
