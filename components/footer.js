import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright} from '@fortawesome/free-solid-svg-icons'

export function Footer(){
  const [dark, setDark] = useState(false)
  const [open, setOpen] = useState(false)

  return(
    <div className={dark ? "dark" : '" "'}>
      <div className="z-3 py-6 w-full border-t p-4 bg-blue-500 dark:bg-gray-900 text-white dark:text-gray-400 font-bold text-sm text-center">
      <FontAwesomeIcon icon={faCopyright} /> by ER - recipes from <a href="https://edamam.com" target="_blank" >Edamam</a>
      </div>
    </div>
  )
}