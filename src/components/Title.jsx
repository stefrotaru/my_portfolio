/* eslint-disable react/prop-types */

function Title({ children, id }) {
  return (
    <h1
      id={id && id}
      className="title text-2xl md:text-3xl font-bold mb-8 text-stone-900 dark:text-zinc-300 hide text-center py-5"
    >
      {children}
    </h1>
  );
}

export default Title;
