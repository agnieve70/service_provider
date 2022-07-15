import React from 'react'
import CustomerNavbar from '../components/CustomerNavbar'
import CustomerSidebar from '../components/CustomerSidebar'
import ServiceCard from '../components/ServiceCard'

function ServiceProviderServices() {
  return (
    <div>
      <CustomerNavbar />
      <CustomerSidebar />
      <div className="container">
        <h1 className="text-secondary">Available Services</h1>
        
        <div className="row">
          <div className="row row-cols-1 row-cols-md-3 g-3">
            <ServiceCard
              image={'https://random.imagecdn.app/500/350'}
              title={'Hair Rebond'}
              price={'160.00'}
              description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'}
              category={'salon'}
            />
            <ServiceCard
              image={'https://random.imagecdn.app/500/350'}
              title={'Hair Rebond'}
              price={'160.00'}
              description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'}
              category={'salon'}
            />
            <ServiceCard
              image={'https://random.imagecdn.app/500/350'}
              title={'Hair Rebond'}
              price={'160.00'}
              description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'}
              category={'salon'}
            />
            <ServiceCard
              image={'https://random.imagecdn.app/500/350'}
              title={'Hair Rebond'}
              price={'160.00'}
              description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'}
              category={'salon'}
            />
            <ServiceCard
              image={'https://random.imagecdn.app/500/350'}
              title={'Hair Rebond'}
              price={'160.00'}
              description={'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'}
              category={'salon'}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ServiceProviderServices