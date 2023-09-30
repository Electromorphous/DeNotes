function Loader() {
  return (
    <div className="mx-auto w-fit">
      <svg
        version="1.1"
        id="L3"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="-5 -5 110 110"
        className="dark:invert"
      >
        <circle
          fill="none"
          stroke="#777"
          strokeWidth="2"
          cx="50"
          cy="50"
          r="44"
        />
        <circle fill="#000" strokeWidth="3" cx="8" cy="54" r="9">
          <animateTransform
            attributeName="transform"
            dur="2s"
            type="rotate"
            from="0 50 48"
            to="360 50 52"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}

export default Loader;
