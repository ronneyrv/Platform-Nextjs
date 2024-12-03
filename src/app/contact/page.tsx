import type { Metadata } from "next";
import Link from "next/link";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export const metadata: Metadata = {
  title: "Contact",
};

export default function PageContact() {
  return (
    <div className="flex-col pt-14 sm:pt-24 h-max">
      <Link href={"https://github.com/ronneyrv"} target="blank" className="flex justify-center">
        <article className="flex gap-2 flex-row items-center justify-center p-2 m-3 rounded hover:bg-primary w-full">
          <IoLogoGithub className="size-10" />
          <h4 className="font-extrabold text-lg">{"GitHub"}</h4>
        </article>
      </Link>

      <Link href={"my/email"} className="flex justify-center">
        <article className="flex gap-2 flex-row items-center justify-center p-2 m-3 rounded hover:bg-primary w-full">
          <CgMail className="size-10" />
          <h4 className="font-extrabold text-lg">{"e-mail"}</h4>
        </article>
      </Link>

      <Link href={"https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"} target="blank" className="flex justify-center">
        <article className="flex gap-2 flex-row items-center justify-center p-2 m-3 rounded hover:bg-primary w-full">
          <FaLinkedin className="size-10" />
          <h4 className="font-extrabold text-lg">{"linkedIn"}</h4>
        </article>
      </Link>
    </div>
  );
}
