interface PageHeadingProps {
  title: string;
  description?: string;
}

export default function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <>
      <h1 className="text-2xl font-medium font-sora">{title}</h1>
    </>
  );
}
