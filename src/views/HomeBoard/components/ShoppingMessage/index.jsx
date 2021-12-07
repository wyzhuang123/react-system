import React from 'react'
import './index.less'
import ShoppingMessage from '@/components/ShoppingMessage'

const shoppingData = [
  {
    name: 'New Visits',
    number: 102400,
    icon: 'personal'
  },
  {
    name: 'Messages',
    number: 81810,
    icon: 'message-square'
  },
  {
    name: 'Purchases',
    number: 92800,
    icon: 'RMB'
  },
  {
    name: 'Shoppings',
    number: 136660,
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
