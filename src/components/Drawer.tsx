

const Drawer = () => {
  return (

    <div className="drawer z-50 drawer-end">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      {/* Page content here */}
      <label htmlFor="my-drawer-4" className="drawer-button btn btn-ghost">Profile</label>
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 w-72 lg:w-96 min-h-full bg-base-200 text-base-content">
        {/* Sidebar content here */}
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Drawer