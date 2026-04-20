import React from 'react'

export const Footer = () => {
  let footerStyle = {
    top: "70vh",
    position: "relative",
    width: "100%" ,
    border: "2px solid grey"
  }
  return (
    <div className="bg-dark text-light py-4" style={footerStyle}>
      <p className="text-center " >
        Copyright &copy; My TodoList.com
      </p>
    </div>
  )
}

export default Footer
