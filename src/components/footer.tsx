import { SVGLogo } from "@/svg/logo";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className="bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-5 px-4 pt-20 md:grid-cols-2">
            <div>
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Sparkcis</span>
                <SVGLogo className="-mt-[10px] h-[70px] w-[180px] text-white" />
              </a>
            </div>
            <div className="pt-7">
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                We collaborate with ambitious brands and people. Let{"'"}s
                build. contact@sparkcis.com
              </h2>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl pb-16 pt-14">
          <div className="grid grid-cols-2 gap-5">
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
        <div className="mx-auto max-w-6xl border-t border-white/50 py-4">
          <p className="text-center text-xs opacity-70">
            Copyright © 2024 - <Link href="sparkcis.com">Sparkcis</Link>
          </p>
        </div>
      </div>
    </>
  );
}
