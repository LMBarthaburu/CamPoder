import React from 'react'
import './instagram.css'

function Instagram() {
  return (
    <div className='container text-center d-none d-lg-block'>
      <h1 className='pb-3'>Ultimas publicaciones</h1>
      <script src="https://snapwidget.com/js/snapwidget.js"></script>
      <iframe src="https://snapwidget.com/embed/1022914" className="snapwidget-widget instagram-grid" allowtransparency="true" frameBorder="0" title='instagram'></iframe>   
    </div>
  )
}

export default Instagram