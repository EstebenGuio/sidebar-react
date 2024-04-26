import React, { useState } from "react";

const App = () => {

  //Create states for button
  const [isExpand, setIsExpand] = useState({})

  //Create basic menu with subitems
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

  /**
   * Menu to render 
   * 
   * 1. Check if item has subItems
   * 2. Creatae a button with its statuses
   * 3. Create the event to expand or hide subitems on click
   * 4. Create dinamically the text of the button based on the status
   * 5. Print the subItems list if affly
   * 
   * 
   * @param {*} menu 
   * @returns 
   */
  const renderObj = (menu) => {
    //1
    if (menu.subItems) {

      return (
        <>
          <button
          data-test-id={"button-"+menu.title.toLowerCase()}
            //3
            onClick={() => {
              setIsExpand({
                ...isExpand,
                [menu.title]: !isExpand?.[menu.title]
              })
            }}
          >
            { //4
              !isExpand?.[menu.title] ? 'Hide' : 'Expand'
            }
          </button>
          {
            //5
            !isExpand?.[menu.title] ? (
              <ul
              key={menu.title}
              data-test-id={"ul-"+menu.title.toLowerCase()}
              >
                {menu.subItems.map((subitem) => {
                  return <li 
                  key={subitem}
                  data-test-id={"li-"+menu.title.toLowerCase()}
                  >{subitem}</li>
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
