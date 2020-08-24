import { CardView } from '.'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure  } from 'enzyme'

const items = [
  {
    id: 1,
    header: 'Lorem ipsum',
    description:
      'dolor sit amet',
    image:
      'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 2,
    header: 'Sed cursus',
    description:
      'in metus quis tempor',
    image: 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
  }
]

configure({ adapter: new Adapter() })

describe('CardView', () => {
  it('is truthy', () => {
    expect(CardView).toBeTruthy()
  })
  it('render items correctly', () => {
    const wrapper = shallow(<CardView items={items} />)
    const list = wrapper.find('li')
    expect(list.at(0).key()).toEqual('1')
    expect(list.at(1).key()).toEqual('2')
  })
  it('render headers', () => {
    const wrapper = shallow(<CardView items={items} />)
    expect(wrapper.find('.itemHeader')).toHaveLength(2)
  })
  it('render only first description', () => {
    const wrapper = shallow(<CardView items={items} />)
    const descriptionFirst = items[0].description
    expect(wrapper.find('.itemDescription')).toHaveLength(1)
    expect(wrapper.find('.activeItemDescription').text()).toEqual(descriptionFirst)
  })
  it('changes img src on click', () => {
    const wrapper = shallow(<CardView items={items} />)
    const listItem = wrapper.find('.item').at(1)
    const secondImage = items[1].image
    listItem.simulate('click')
    const imageSrc = wrapper.find('img').prop('src')
    expect(imageSrc).toEqual(secondImage)
  })
  it('changes description on click', () => {
    const wrapper = shallow(<CardView items={items} />)
    const listItem = wrapper.find('.item').at(1)
    const descriptionSecond = items[1].description
    listItem.simulate('click')
    const activeItemDescription = wrapper.find('.activeItemDescription').text()
    expect(activeItemDescription).toEqual(descriptionSecond)
  })
})
