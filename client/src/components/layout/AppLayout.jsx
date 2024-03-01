import React from 'react'

const AppLayout = () => WrappedComponent => {
  return (props) =>{
    <div>
        <div>Header</div>
        <WrappedComponent {...props}></WrappedComponent>
        <div>Footer</div>
    </div>
  }
}

export default AppLayout