export default function Pagination(props) {
  const pageNumbers = []

  for (let i = 1; i < 11; i++) {
    pageNumbers.push(i)
  }

  return (
    <nav className="py-20">
      <ul className="flex bg-teal-700 w-fit mx-auto">
        {pageNumbers.map((num) => (
          <li
            key={num}
            className="mx-auto border-[1px] border-slate-900"
            onClick={() => props.sendPages(num)}
          >
            <a className=" text-slate-900 font-semibold bg-yellow-300 block w-8">
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
