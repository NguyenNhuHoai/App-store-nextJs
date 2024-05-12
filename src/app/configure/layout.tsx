import MaxWidthWraapper from "@/components/MaxWidthWraapper";
import Steps from "@/components/Steps";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWraapper className="flex-1 flex flex-col">
      <Steps/>
      {children}
    </MaxWidthWraapper>
  );
};

export default Layout;
