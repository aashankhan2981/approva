import React from 'react';;
import dynamic from 'next/dynamic';
import { NextPage } from 'next';

import { ShowResults } from '../components/forms/end/ShowResults';



const test:NextPage = () => {
  return (
  <div>
      <ShowResults/>
  </div>
  )
};

export default test;
