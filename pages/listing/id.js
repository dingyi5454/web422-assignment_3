import React from 'react';
import { useRouter } from 'next/router';
import { useSWR } from 'swr';
import ListingDetails from '@/components/ListingDetails/ListingDetails';
import PageHeader from '@/components/PageHeader';

const Listing = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useSWR(`/api/listings/${id}`);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Listing not found</div>;

  return (
    <div>
      <PageHeader text={data.name} />
      <ListingDetails listing={data} />
    </div>
  );
};

export default Listing;
