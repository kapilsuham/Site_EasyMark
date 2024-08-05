import Image from 'next/image'
const Footer = () => {
  return (
      <footer className="footer absolute p-10 bg-base-300 text-base-content">
        <aside>
          <Image quality={10} className='w-auto h-auto' width={62} height={62} src="https://lemonsqueezy.imgix.net/design/112348/e14b4f14-f29c-4d19-83de-104808f7eda6.png?fit=clip&h=100&ixlib=php-3.3.1&w=100&s=3724ef4df78ce51df6f700522edee435" alt="image" />
          <p className='text-base'>ShipForever<br />Grow more Ship in minutes. Ship Now!</p>
          <div> &copy; Copyright 2024. All Rights Reserved by Shipforever.</div>
        </aside>
        <nav>
          <h6 className="footer-title">EasyMark</h6>
          <a href='/' className="link link-hover">Home</a>
          <a href='/#pricing' className="link link-hover">Pricing</a>
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
          <a href='/#pricing' className="link link-hover">ShipForever</a>
        </nav>
      </footer>
  )
}

export default Footer