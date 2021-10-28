import React from 'react'
import {Helmet} from 'react-helmet'

const Meta = ({title,description,keywords}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to ProShop',
  description: 'ProShop is a place to buy and sell used products',
  keywords: 'electronics, buy electronics, sell electronics'
}

export default Meta
