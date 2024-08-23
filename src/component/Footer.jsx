

function Footer() {

  const year = new Date().getFullYear()
  return (
    <footer className="flex justify-center ">
      <p>All right reserved Walon &copy;{year}</p>
    </footer>
  )
}

export default Footer