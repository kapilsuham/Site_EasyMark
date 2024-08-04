import Image from 'next/image'
const Footer = () => {
  return (
      <footer className="footer absolute p-10 bg-base-300 text-base-content">
        <aside>
          <Image className='w-auto h-auto' width={62} height={62} src="/logo.png" alt="image" />
          <p className='text-base'>ShipForever<br />Grow more Ship in minutes. Ship Now!</p>
          <div> &copy; Copyright 2024. All Rights Reserved by Shipforever.</div>
        </aside>
        <nav>
          <h6 className="footer-title">EasyMark</h6>
          <a href='#pricing' className="link link-hover">Pricing</a>
        </nav>
        <nav>
          <h6 className="footer-title">Links</h6>
          <a href='https://x.com/kapil__paliwal?t=0GbROshSxHMoRlUvHqyxgQ&s=08' target='_blank' className="link link-hover">Twitter</a>
          <a href='https://www.producthunt.com/@kapilpaliwal' target='_blank' className="link link-hover">Product Hunt</a>
          <a href='https://github.com/kapilsuham' target='_blank' className="link link-hover">GitHub</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a href='/terms-conditions' className="link link-hover">Terms & Conditions</a>
          <a href='/privacy-policy' className="link link-hover">Privacy policy</a>
          <a href='/license' className="link link-hover">Licensing</a>
        </nav>
        <nav>
          <h6 className="footer-title">More</h6>
          <a href='#pricing' className="link link-hover">ShipForever</a>
        </nav>
      </footer>
  )
}

export default Footer