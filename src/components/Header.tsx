import Avatar from "./Avatar";
import PageTitle from "./PageTitle";
import PageSubtitle from "./PageSubtitle";
import ShareButton from "./ShareButton";

function Header() {
  return (
    <header className="flex flex-col items-center gap-6 mb-6">
      <Avatar />
      <div>
        <PageTitle>Home</PageTitle>
        <PageSubtitle>Created 2 days ago</PageSubtitle>
      </div>
      <ShareButton />
    </header>
  )
}

export default Header;