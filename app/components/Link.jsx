"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
export default function CustomLink({ children, path }) {
    const pathName = usePathname();

    return (
        <Link className={pathName == path ? "text-blue-600" : ""} href={path}>
            {children}
        </Link>
    );
}
