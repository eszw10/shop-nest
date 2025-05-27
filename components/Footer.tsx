import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex-center border-t p-5">
      {APP_NAME} &copy; {currentYear} All Rights Reserved.
    </footer>
  );
};

export default Footer;
