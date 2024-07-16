import Avatar from './Avatar'
const TestimonialMultiple = () => {
  return (
    <div className='justify-center mt-32 text-center flex'>
      <Avatar />
      <div> <div className="rating mt-10 mx-4">
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked readOnly />
      </div>
        <div>Devlopers Review</div>
      </div>
    </div>
  )
}

export default TestimonialMultiple