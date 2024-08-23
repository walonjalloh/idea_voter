

function Footer() {

  const year = new Date().getFullYear()
  return (
    <footer className="flex justify-center sticky bottom-0 z-0">
      <p className="font-semibold text-2xl my-10 ">All Right Reserved Walon &copy;{year}</p>
    </footer>
  )
}

export default Footer