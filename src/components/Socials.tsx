import SocialMediaLink from "./SocialMediaLink";

function Socials() {
  return (
    <div className="flex justify-center gap-3">
      <SocialMediaLink platform="facebook" />
      <SocialMediaLink platform="twitter" />
    </div>
  );
}

export default Socials;