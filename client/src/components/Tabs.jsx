import React from 'react'
import { selectAllTabs, selectActiveTab, toggleTab } from '../features/tabs/tabSlice'
import { useSelector, useDispatch } from 'react-redux'

const Tabs = () => {
    const dispatch = useDispatch()
    const allTabs = useSelector(selectAllTabs)
    const activeTab = useSelector(selectActiveTab)
  return (
    <div className='tabs-container'>
      {allTabs.map(tab => {
        return (
            <button className={activeTab === tab ? 'active' : ''} onClick={() => dispatch(toggleTab(tab))}>{ tab }</button>
        )
      })}
    </div>
  )
}

export default Tabs
