import { Post, User } from "@/generated/prisma";
import PostListItem from "./PostListItem";

export default async function PostList({
  posts,
  user,
}: {
  posts: (Post & { author: User; _count: { comments: number } })[];
  user: User | null;
}) {
  return (
    <div>
      {posts.map((post) => {
        const isOwner = user?.id === post.author.id;
        const isAdmin = user?.isAdmin;
        const isPublished = post.status === "published";
        const isReviewOrRejected =
          post.status === "review" || post.status === "rejected";

        const canView =
          isOwner || // Owner can see all their posts
          isPublished || // All can see published posts
          (isAdmin && isReviewOrRejected); // Admin can see review/rejected posts

        if (!canView) return null;

        return (
          <PostListItem
            key={post.id}
            post={post}
            user={post.author}
            isAdmin={isAdmin}
            isOwner={isOwner}
          />
        );
      })}
    </div>
  );
}
