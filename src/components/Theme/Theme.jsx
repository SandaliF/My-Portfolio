import './Theme.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-solid-svg-icons'

import { useEffect,useState } from 'react'


const  getLocalStorageTheme =()=>{
  let theme = 'light-theme';

  if (localStorage.getItem('theme')){
    theme = localStorage.getItem('theme');
  }
  return theme;
}

export default function Theme() {

  const [Theme,setTheme] = useState(getLocalStorageTheme());
  
  let toggleTheme=()=>{
    if(Theme === 'light-theme'){
      setTheme('dark-theme')
    }else{
      setTheme('light-theme')
    }
  }

  useEffect(()=>{
    document.documentElement.className = Theme;
    localStorage.setItem('theme',Theme);
  }, [Theme])

  return (
    <span className='Bg-toggler' onClick={toggleTheme}>
      <FontAwesomeIcon icon={faMoon} />

    </span>
  )
}
