import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-primary">
      <div className={`h-[76px] bg-[#A8D6FD] fixed top-0 w-full z-50`}>
        <div className="container mx-auto px-4 xl:px-0 h-full flex justify-between items-center">
          <Image
            width={160}
            height={40}
            src="/assets/images/logo/gameloft_black.png"
            alt="logo"
          />
          <Button size="large">
            <MenuIcon className="text-gray-dark text-center" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
