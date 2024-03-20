type Props = {
  className?: string;
}

function TwitterIcon({ className = ""}: Props) {
 return (
  <svg className={className} width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.9436 0H13.0465L8.45229 5.08316L13.8571 12H9.62505L6.31056 7.80487L2.51792 12H0.41363L5.3276 6.56309L0.142853 0H4.48211L7.47825 3.83441L10.9436 0ZM10.2055 10.7815H11.3708L3.849 1.15455H2.59865L10.2055 10.7815Z" fill="#171717"/>
  </svg>
 );
}

export default TwitterIcon;