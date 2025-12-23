interface StructuredDataProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
