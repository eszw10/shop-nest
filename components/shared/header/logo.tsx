import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex-start">
      <Link href="/" className="flex-start">
        <Image
          src={"/logo.svg"}
          alt={`${APP_NAME} logo`}
          height={48}
          width={48}
          priority={true}
        />
        <span className="hidden text-2xl font-bold lg:block ml-3">
          {APP_NAME}
        </span>
      </Link>
    </div>
  );
};

export default Logo;
