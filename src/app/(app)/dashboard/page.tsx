import CheckoutButton from '@/components/CheckoutButton'
import {products} from '@/ConfigApp'
const Page = () => {
  return (
    <div>
      <CheckoutButton mode='subscription' productId={products[0].productId1}/>
    </div>
  )
}
export default Page