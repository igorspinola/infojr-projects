function IInsta(props) {
  return (
    <a id="i-insta" href={props.link} target="_blank">
      <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
        <path
        d="M16.002 0c-4.346 0-4.891.019-6.598.097C7.701.175 6.538.444 5.521.84a7.835 7.835 0 00-2.835 1.845A7.854 7.854 0 00.84 5.519C.443 6.537.173 7.7.096 9.402.02 11.11 0 11.655 0 16c0 4.346.02 4.89.097 6.596.078 1.703.348 2.866.743 3.883a7.84 7.84 0 001.845 2.835A7.834 7.834 0 005.52 31.16c1.018.396 2.18.666 3.884.744 1.706.077 2.252.096 6.596.096 4.346 0 4.89-.019 6.597-.096 1.703-.078 2.867-.348 3.885-.744a7.827 7.827 0 002.832-1.846 7.854 7.854 0 001.847-2.834c.393-1.018.663-2.181.743-3.884C31.98 20.89 32 20.346 32 16c0-4.345-.02-4.89-.097-6.597-.08-1.704-.35-2.866-.743-3.884a7.853 7.853 0 00-1.847-2.834A7.82 7.82 0 0026.48.84C25.46.444 24.297.175 22.593.097 20.887.019 20.343 0 15.996 0h.005zm-1.436 2.883h1.435c4.272 0 4.779.016 6.466.092 1.56.072 2.407.332 2.97.551.747.29 1.28.637 1.84 1.197s.906 1.093 1.197 1.84c.219.563.48 1.41.55 2.97.077 1.687.094 2.194.094 6.463 0 4.27-.017 4.777-.093 6.464-.072 1.56-.332 2.407-.551 2.97a4.947 4.947 0 01-1.198 1.838c-.56.56-1.091.907-1.838 1.197-.564.22-1.411.48-2.971.551-1.687.077-2.194.093-6.465.093-4.273 0-4.78-.016-6.466-.093-1.56-.072-2.407-.333-2.97-.552a4.956 4.956 0 01-1.84-1.196 4.96 4.96 0 01-1.198-1.84c-.22-.563-.48-1.41-.551-2.97-.077-1.686-.092-2.193-.092-6.465 0-4.273.015-4.777.092-6.464.071-1.56.332-2.407.55-2.97.29-.747.638-1.28 1.198-1.84a4.966 4.966 0 011.84-1.198c.564-.22 1.411-.48 2.971-.552 1.476-.066 2.048-.086 5.03-.09v.004zm9.976 2.657a1.92 1.92 0 100 3.84 1.92 1.92 0 000-3.84zm-8.54 2.243a8.217 8.217 0 100 16.435 8.217 8.217 0 000-16.435zm0 2.884a5.333 5.333 0 110 10.667 5.333 5.333 0 010-10.667z"
        fill="#0065ff"/>
      </svg>
    </a>
  );
};

export default IInsta;