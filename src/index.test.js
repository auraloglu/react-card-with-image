import { CardView } from '.'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'

const items = [
  {
    id: 1,
    header: 'Lorem ipsum',
    description: 'dolor sit amet',
    image: 'image-url-1'
  },
  {
    id: 2,
    header: 'Sed cursus',
    description: 'in metus quis tempor',
    image: 'image-url-2'
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
    const itemDescription = wrapper.find('.itemDescription')
    const activeItemDescription = wrapper.find('.activeItemDescription').text()
    expect(itemDescription).toHaveLength(1)
    expect(activeItemDescription).toEqual(descriptionFirst)
  })
  it('renders correct hexCode color for activeColor', () => {
    const wrapper = shallow(<CardView items={items} activeColor='#000' />)
    const acitveSelector = wrapper.find('.activeSelectorActive').get(0)
    const activeColor = acitveSelector.props.style.backgroundColor
    expect(activeColor).toBe('#000')
  })
  it('renders correct rgb color for activeColor', () => {
    const wrapper = shallow(
      <CardView items={items} activeColor='rgb(128, 181, 232)' />
    )
    const acitveSelector = wrapper.find('.activeSelectorActive').get(0)
    const activeColor = acitveSelector.props.style.backgroundColor
    expect(activeColor).toBe('rgb(128, 181, 232)')
  })
  it('renders correct css color for activeColor', () => {
    const wrapper = shallow(<CardView items={items} activeColor='red' />)
    const acitveSelector = wrapper.find('.activeSelectorActive').get(0)
    const activeColor = acitveSelector.props.style.backgroundColor
    expect(activeColor).toBe('red')
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
