import React from 'react';
import './TodayScreen.css';
import { FiPlus } from 'react-icons/fi';
export default function TodayScreen() {
  return (
    <div className="today-main">
      <div className='today-header'>
        <h1 className='today-title'>Today</h1>
        <span className='today-count'>12</span>
      </div>
      <div className='today-additem'>
        <FiPlus/>
        <span>Add New Task</span>
      </div>
    </div>
  )
}
