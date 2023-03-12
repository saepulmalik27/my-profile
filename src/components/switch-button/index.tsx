import { useState } from 'react'
import { Switch } from '@headlessui/react'
import cx from 'classnames'

type SwitchButtonProps = {
  checked?: boolean
  onChange?: (checked: boolean) => void
}

const SwitchButton : React.FC<SwitchButtonProps> = ({checked, onChange}) => {
  

  return (
   
      <Switch
        checked={checked}
        onChange={onChange}
        className={cx(checked ?  'bg-black border-gray-400' : 'bg-white border-gray-800',
          "relative inline-flex h-[20px] w-[40px] shrink-0 cursor-pointer rounded-full border-2   transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75")}
      >
        {/* <span className="text-red-300">Use setting</span> */}
        <span
          aria-hidden="true"
          className={cx(checked ? 'translate-x-5 bg-white ' : 'translate-x-0 bg-black',
            `pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`)}
        />
      </Switch>
  )
}

export default SwitchButton
