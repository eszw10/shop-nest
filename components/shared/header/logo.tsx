import { APP_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  width?: number;
  height?: number;
  withLabel?: boolean;
  className?: string;
};

const Logo = ({
  width = 48,
  height = 48,
  withLabel = true,
  className,
}: LogoProps) => {
  return (
    <div className={cn("flex-start", className)}>
      <Link href="/" className="flex-start">
        <Image
          src={"/logo.svg"}
          alt={`${APP_NAME} logo`}
          height={height}
          width={width}
          priority={true}
        />
        {withLabel && (
          <span className="hidden text-2xl font-bold lg:block ml-3">
            {APP_NAME}
          </span>
        )}
      </Link>
    </div>
  );
};

export default Logo;
