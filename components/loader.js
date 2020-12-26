import React from 'react'

const Loader = ({isLoading, children}) => {
  const renderLoader = () => {
    return (
      <>
        <div className='loading-container'>
          <h3 className='loading-text'>Please wait. Loading...</h3>
        </div>

        <style jsx> {`
          .loading-container {
            text-align:center;
            width:100%;
            color: #333;
          }
        `}
        </style>    
      </>
    )
  }
  
  return (
    isLoading
    ?
    renderLoader()
    :
    children
  )
}

export default Loader