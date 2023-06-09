/* eslint-disable react/prop-types */

function Title({ children, id }) {
  return (
  <h1 
    id={id && id} 
    className="text-2xl md:text-3xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-zinc-300 hide text-center py-5"
  >
    {children}
  </h1>
  )
}

export default Title;