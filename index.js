import React from 'react';
import { useSWR } from 'swr';
import { Accordion, Pagination } from 'react-bootstrap';
import ListingDetails from '@/components/ListingDetails/ListingDetails';
import PageHeader from '@/components/PageHeader';

const Home = () => {
  const { data, error } = useSWR('/api/listings?page=1&perPage=10');

  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <PageHeader text="Browse Listings : Sorted by Number of Ratings" />
      <Accordion>
        {data.map(listing => (
          <Accordion.Item key={listing._id} eventKey={listing._id}>
            <Accordion.Header>{listing.name}</Accordion.Header>
            <Accordion.Body>
              <ListingDetails listing={listing} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <Pagination>
        {}
      </Pagination>
    </div>
  );
};

export default Home;
