import React, { useState } from "react";

const App = () => {
  const [isExpand, setIsExpand] = useState({})
  const menuConfig = [
    {
      title: 'Home'
    },
    {
      title: 'Services',
      subItems: ['Cooking', 'Cleaning']
    },
    {
      title: 'Contact',
      subItems: ['Phone', 'Mail']
    }
  ]

  const renderObj = (menu) => {
    if (menu.subItems) {
      return (
        <>
          <button
            onClick={() => {
              setIsExpand({
                ...isExpand,
                [menu.title]: !isExpand?.[menu.title]
              })
            }}
          >
            {!isExpand?.[menu.title] ? 'Hide' : 'Expand'}
          </button>
          {
            !isExpand?.[menu.title] ? (
              <ul key={menu.title}>
                {menu.subItems.map((subitem) => {
                  return <li key={subitem}>{subitem}</li>
                })}
              </ul>
            ) : null
          }
        </>
      )
    } else return null;
  }

  return (
    <div className="menu-wrapper">
      {menuConfig.map((menu) => {
        return (
          <div key={menu.title}>
            <span>{menu.title}</span>
            {renderObj(menu)}
          </div>
        )
      })
      }
    </div>
  )
}

export default App;
