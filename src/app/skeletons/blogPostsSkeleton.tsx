import BlogPostSkeleton from "./blogPostSkeleton";

export default function BlogPostsSkeleton() {
  return (
    <ul className="space-y-2 pt-3">
      <BlogPostSkeleton />
      <BlogPostSkeleton />
      <BlogPostSkeleton />
      <BlogPostSkeleton />
      <BlogPostSkeleton />
    </ul>
  );
}
