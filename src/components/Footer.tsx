import Image from 'next/image'
const Footer = () => {
  return (
    <div>
        <footer className="footer p-10 bg-base-200 mt-20 text-base-content">
  <aside>
    <Image className='w-auto h-auto' width={62} height={62} src="/logo.png" alt="image" />
    <p className='text-white'>ShipForever<br/>Grow more Ship in minutes. Ship Now!</p>
    <div> &copy; Copyright 2024. All Rights Reserved by Shipforever.</div>
  </aside> 
  <nav>
    <h6 className="footer-title">Links</h6> 
    <a href='https://x.com/kapil__paliwal?t=0GbROshSxHMoRlUvHqyxgQ&s=08' target='_blank' className="link link-hover">Twitter</a>
    <a href='https://www.producthunt.com/@kapilpaliwal' target='_blank' className="link link-hover">Product Hunt</a>
    <a href='https://github.com/kapilsuham' target='_blank' className="link link-hover">GitHub</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Features</h6> 
    <a href='/docs/app/get-started' className="link link-hover">Documentation</a>
    <a href='/leaderboard' className="link link-hover">LeaderBoard</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a href='/terms&conditions' className="link link-hover">Terms & Conditions</a>
    <a href='/privacy-policy' className="link link-hover">Privacy policy</a>
    <a href='/license' className="link link-hover">Licensing</a>
  </nav>
</footer>
    </div>
  )
}

export default Footer