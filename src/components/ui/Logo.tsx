import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/public/logo.png"; // Ensure correct path

interface LogoProps {
  height?: number;
  width?: number;
  href?: string; // Optional link destination
  altText?: string;
}

const Logo = ({ height, width, href = "/", altText = "Logo" }: LogoProps) => {
  return (
    <Link href={href} className="flex items-center cursor-pointer">
      <Image
        src={LogoImage}
         height={height}
          width={width}
           alt={altText} 
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
          />
    </Link>
  );
};

export default Logo;
