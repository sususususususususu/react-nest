import React from 'react';
import ProductListLayout from '../../components/ProductListLayout';
import { InitialStateProvider } from '../../context/InitialStateContext';

const ProductListEntry = (props: any) => (
  <InitialStateProvider value={props}>
    <ProductListLayout {...props} />
  </InitialStateProvider>
);

export default ProductListEntry; 