

function Footer() {

  const year = new Date().getFullYear()
  return (
    <footer className="flex justify-center left-0  w-full">
      <p className="font-semibold text-[20px] md:text-2xl my-5 text-black ">All Right Reserved &copy;{year}</p>
    </footer>
  )
}

export default Footer