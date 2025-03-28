import {Provider} from 'react-redux'
import {store} from '../../Store/store'
import Header from './Header';
import Shop from './Shop';
import Product from './Product';
import { DUMMY_PRODUCTS } from './dummy-products';

function Parent() {
  return (
    <Provider store={store}>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </Provider>
  );
}

export default Parent;
