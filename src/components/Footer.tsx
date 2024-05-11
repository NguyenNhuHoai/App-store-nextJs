import MaxWidthWraapper from "@/components/MaxWidthWraapper";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white h-20 relative">
      <MaxWidthWraapper>
        <div className="border-t border-gray-200" />
        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy;{new Date().getFullYear()} All right reserved
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <Link
                href={"#"}
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Nguyen Nhu Hoai
              </Link>
              <Link
                href={"#"}
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                nguyennhuhoai745@gmail.com
              </Link>
              <Link
                href={"#"}
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                0376681557
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWraapper>
    </footer>
  );
};

export default Footer;
