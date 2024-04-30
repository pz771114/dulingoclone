import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block w-full h-20 border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            alt="Japan"
            src="./jp.svg"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Japan
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            alt="France"
            src="./fr.svg"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          France
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            alt="Spanish"
            src="./es.svg"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Span
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            alt="Italian"
            src="./it.svg"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Italian
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            alt="Croatian"
            src="./hr.svg"
            width={40}
            height={32}
            className="mr-4 rounded-md"
          />
          Croatian
        </Button>
      </div>
    </footer>
  );
};
