import organizations from "@/data/organizations";
import { redirect } from "next/navigation";

export default function OrgChat({ params }: { params: { slug: string } }) {
  const orgData = organizations.find((org) => org.slug === params.slug);

  if (orgData === undefined) {
    redirect("/");
  }

  return (
    <div>
      {params.slug}
    </div>
  )
}