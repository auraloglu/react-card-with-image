import React, { useState } from 'react'
import styles from './styles.module.css'

export const CardView = ({ items, activeColor, imageHeight, imageWidth }) => {
  const navigations = items

  const [itemLink, setItemLink] = useState(navigations[0].image)
  const [selectedItem, setSelectedItem] = useState(navigations[0])

  const handleClick = (item) => {
    setItemLink(item.image)
    setSelectedItem(item)
  }

  const renderNav = (items) => {
    return items.map((item) => {
      return (
        <li key={item.id}>
          <div
            className={
              selectedItem.id === item.id
                ? styles.item + ' ' + styles.activeAttr
                : styles.item
            }
            onClick={() => handleClick(item)}
          >
            <div
              style={{
                backgroundColor: activeColor || '#2590ef'
              }}
              className={
                selectedItem.id === item.id
                  ? styles.activeSelectorActive
                  : styles.activeSelector
              }
            />
            <i className={styles.arrowDown} />
            <p className={styles.itemHeader}>{item.header}</p>
            <p
              className={
                selectedItem.id === item.id
                  ? styles.activeItemDescription
                  : styles.itemDescription
              }
            >
              {item.description}
            </p>
          </div>
        </li>
      )
    })
  }

  return (
    <div className={styles.attrSection}>
      <div className={styles.attrImageSection}>
        <img
          src={itemLink}
          className={styles.attrImage}
          style={{
            height: imageHeight || '',
            width: imageWidth || ''
          }}
          alt='logo'
        />
      </div>
      <div className={styles.attrListSection}>
        <div className={styles.attributeList}>
          <ul>{renderNav(navigations)}</ul>
        </div>
      </div>
    </div>
  )
}
