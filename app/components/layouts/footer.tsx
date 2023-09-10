import { Divider } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-center text-white px-4">
      <Divider className="bg-white" />
      <div className="py-3 text-[15px]">

      <p>
        ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are
        trademarks of Gameloft in the U.S. and/or other countries.
      </p>
      <p> All other trademarks are the property of their respective owners.</p>
      </div>
    </footer>
  );
};

export default Footer;
