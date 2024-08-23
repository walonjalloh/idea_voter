

function Footer() {

  const year = new Date().getFullYear()
  return (
    <footer className="flex justify-center">
      <p className="font-semibold md:text-2xl my-5 ">All Right Reserved Walon &copy;{year}</p>
    </footer>
  )
}

export default Footer