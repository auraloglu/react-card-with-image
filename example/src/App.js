import React from 'react'

import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'

const App = () => {
  const items = [
    {
      id: 1,
      header: 'Lorem ipsum',
      description:
        'dolor sit amet, consectetur adipiscing elit. Sed tempus nunc et tincidunt lobortis. Aliquam placerat, justo sit amet mattis molestie, ipsum nisi congue turpis, in imperdiet nisi nisl sit amet arcu. Donec euismod eu ante quis elementum. Maecenas commodo erat',
      image:
        'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    },
    {
      id: 2,
      header: 'Sed cursus',
      description:
        'in metus quis tempor. Donec at venenatis magna, vel fringilla dui. Curabitur id gravida ipsum. Donec at mollis massa. Nullam metus elit, pret',
      image: 'https://cerberus-laboratories.com/images/blog/random_numbers.jpg'
    },
    {
      id: 3,
      header: 'Sed fermentum',
      description:
        'condimentum purus, non sagittis massa faucibus id. Sed finibus convallis lectus eu fringilla. Proin lacinia sem vitae nunc consectetur, a faucibus orci ultricie',
      image:
        'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    },
    {
      id: 4,
      header: 'Proin et urna',
      description:
        'vitae neque fermentum fringilla. Proin bibendum sollicitudin aliquet. Fusce id magna aliquam, pulvinar metus vitae, bibendum felis.',
      image: 'https://cerberus-laboratories.com/images/blog/random_numbers.jpg'
    },
    {
      id: 5,
      header: 'Cras leo velit',
      description:
        'finibus id eros eu, commodo sollicitudin lacus. Nunc semper enim nec est viverra, at pharetra orci lobortis. Nulla facilisi. Sed non lectus nunc.',
      image:
        'https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    }
  ]
  return (
    <CardView
      items={items}
      activeColor={'#000'}
      imageHeight={'650px'}
      imageWidth={'800px'}
    />
  )
}

export default App
