import React from 'react'
import style from './Breadcrumb.module.scss'


const Breadcrumb = ({items, icon}) => {
  return (
    <div className={style.breadcrumb}>
      {icon}
      <ul>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Breadcrumb