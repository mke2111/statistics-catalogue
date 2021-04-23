import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCoProfile } from '../Actions';
import ItemInfo from '../Components/itemInfo';

export default function Info() {
  const { ticker } = useParams();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchCoProfile(ticker));
  }, [dispatch]);

  // eslint-disable-next-line no-nested-ternary
  return loading ? (
    <h2 className="text-center pt-5">Loading Info......</h2>
  ) : profile === undefined ? (
    <div>
      <h2 className="text-center pt-5 pb-5">Stock Item Not Found!</h2>
    </div>
  ) : (
    <ItemInfo profile={profile} />
  );
}
