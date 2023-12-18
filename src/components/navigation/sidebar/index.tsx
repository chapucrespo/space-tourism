import React from 'react'

export interface YourComponentProps {
  toggle: () => void;
  isOpen: boolean;
}

const Sidebar: React.FC<YourComponentProps> = ({toggle, isOpen}) => {
  return (
    <></>
  )
}

export default Sidebar