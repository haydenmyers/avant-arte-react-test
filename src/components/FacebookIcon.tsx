type Props = {
  className?: string;
}

function FacebookIcon({ className = "" }: Props) {
 return (
  <svg className={className} width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.25 4.66667H0.5V7H2.25V14H5.16667V7H7.29117L7.5 4.66667H5.16667V3.69425C5.16667 3.13717 5.27867 2.91667 5.81704 2.91667H7.5V0H5.27867C3.181 0 2.25 0.923417 2.25 2.69208V4.66667Z" fill="#171717"/>
  </svg>
 );
}

export default FacebookIcon;