import React from 'react'
import { FiUpload } from 'react-icons/fi';
import  classes  from "./Header.module.css"

function Header() {
  return (
    <header className={classes.header}>
      <h2>הסרת רקע מתמונות</h2>
      <div className={classes.headerBtns}>
        <h6>פורמטים נתמכים: png, jpeg, jpg</h6>
        <button>  <FiUpload /> העלאת תמונה</button>
        {/* <Button /> */}
      </div>
   </header>
  )
}

export default Header