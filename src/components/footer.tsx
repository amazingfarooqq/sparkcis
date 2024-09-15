import { SVGLogo } from "@/svg/logo";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

export function Footer() {
  return (
    <div className="bg-[#0a0a0a] text-white ">
      <div className="mx-auto max-w-6xl ">
        <div className="grid grid-cols-2 pt-20 gap-5">
          <div>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <SVGLogo className="w-[140px] h-[55px] text-white -mt-[10px]" />
            </a>
          </div>
          <div className="pt-7">
            <h2 className=" text-white  text-2xl font-semibold tracking-tight">
              We collaborate with ambitious brands and people. Let's build. biz@basicagency.com
            </h2>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl pt-14 pb-16">
        <div className="grid grid-cols-2  gap-5">
          <div></div>
          <div className="grid grid-cols-2">
            <div>
              <h2 className="font-semibold tracking-tight">Social</h2>
              <ul className="my-3 ml-6 list-disc text-sm [&>li]:mt-2">
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
              </ul>
            </div>
            <div>
              <h2 className="font-semibold tracking-tight">Links</h2>
              <ul className="my-3 ml-6 list-disc text-sm [&>li]:mt-2">
                <li>Instagram</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl py-4 border-white/50 border-t">
        <p className="text-center text-xs opacity-70 ">
          The king, seeing how much happier his subjects were, realized the error of his ways and
          repealed the joke tax.
        </p>
      </div>
    </div>
  );
}
