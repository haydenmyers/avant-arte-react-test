function ShareButton() {
  function handleClick() {
    alert("Thank you for the opportunity to complete this challenge 😀");
  }

  return (
    <button onClick={handleClick} type="button" className="w-11 h-11 rounded-full bg-white inline-flex justify-center items-center shadow-primary group">
      <svg className="group-hover:opacity-50 transition-opacity ease-out duration-150" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0_1_764" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="-1" width="20" height="20">
          <rect y="-1" width="20" height="20" fill="#D9D9D9"/>
        </mask>
        <g mask="url(#mask0_1_764)">
          <path d="M5.75052 17.5833C5.37519 17.5833 5.05905 17.4538 4.8021 17.1948C4.54516 16.9357 4.41669 16.6187 4.41669 16.2436V7.75644C4.41669 7.38132 4.5462 7.06425 4.80523 6.80523C5.06426 6.5462 5.38133 6.41668 5.75644 6.41668H7.88781V7.5H5.75644C5.69233 7.5 5.63356 7.52671 5.58012 7.58012C5.52671 7.63355 5.5 7.69232 5.5 7.75644V16.2436C5.5 16.3077 5.52671 16.3664 5.58012 16.4199C5.63356 16.4733 5.69233 16.5 5.75644 16.5H14.2436C14.3077 16.5 14.3664 16.4733 14.4199 16.4199C14.4733 16.3664 14.5 16.3077 14.5 16.2436V7.75644C14.5 7.69232 14.4733 7.63355 14.4199 7.58012C14.3664 7.52671 14.3077 7.5 14.2436 7.5H12.1122V6.41668H14.2436C14.6228 6.41668 14.941 6.5462 15.1979 6.80523C15.4548 7.06425 15.5833 7.38132 15.5833 7.75644V16.2436C15.5833 16.6187 15.4537 16.9357 15.1945 17.1948C14.9353 17.4538 14.6181 17.5833 14.2427 17.5833H5.75052ZM9.45835 11.7916V2.78685L8.0625 4.18271L7.28848 3.41668L10 0.705185L12.7115 3.41668L11.9375 4.18271L10.5416 2.78685V11.7916H9.45835Z" fill="#171717"/>
        </g>
      </svg>
    </button>
  );
}

export default ShareButton;