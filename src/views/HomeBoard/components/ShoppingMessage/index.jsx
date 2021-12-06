import React,{ useEffect } from 'react'
import './index.less'
import ShoppingMessage from '@/components/ShoppingMessage'

const shoppingData = [
  {
    name: 'New Visits',
    number: 1024,
    icon: 'personal'
  },
  {
    name: 'Messages',
    number: 8181,
    icon: 'message-square'
  },
  {
    name: 'Purchases',
    number: 9280,
    icon: 'RMB'
  },
  {
    name: 'Shoppings',
    number: 13666,
    icon: 'Shopping_Bag'
  }
]


export default function Index() {
  return (
    <div>
      <div className="shopping-main-box">
        {
          shoppingData.map((item) => {
              return <ShoppingMessage data={item} key={item.name}/>
          })
        }
      </div>
    </div>
  )
}
