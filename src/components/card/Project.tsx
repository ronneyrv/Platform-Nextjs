import Image from "next/image";
import Link from "next/link";

interface IProjectProps {
    href: string;
    image: string;
    title: string;
    description: string;
}

export const Project = ({title, description, image, href}:IProjectProps) => {

  return (
    <Link href={href}>
    <article className="flex gap-2 flex-col p-2 m-3 rounded sm:hover:bg-primary">
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        draggable={false}
        className="aspect-auto rounded"
      />
      <h4 className="font-extrabold text-lg">
            {title}
        </h4>
      <p className="line-clamp-3">
        {description}
      </p>
    </article>
    </Link>
  );
};