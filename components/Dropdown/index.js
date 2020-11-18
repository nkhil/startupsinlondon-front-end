import useComponentVisible from '../../helpers/componentIsVisible'
import styles from './styles.module.css'
import { BiCaretDownSquare } from "react-icons/bi";
import { useState, useEffect } from 'react'

export default function DropDown() {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)
  const toggleDropdown = () => setIsComponentVisible(!isComponentVisible)
  return (
    <div>
      <div className={styles.container} onClick={toggleDropdown}>
        <p>Browse by category</p>
        <BiCaretDownSquare size={30} color={'#8C70FF'} />
      </div>
      <div className={styles.dropdown} ref={ref}>
        {isComponentVisible && (<p>This is the dropdown list</p>)}
      </div>
    </div>
  );
}
