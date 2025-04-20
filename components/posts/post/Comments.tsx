"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { Comment, User } from "@/app/generated/prisma";
import CommentItem from "./CommentItem";

type CommentWithAuthor = Comment & { author: User };
type CommentTree = {
  id: number;
  comment: string;
  createdAt: Date;
  author: User;
  parentId?: number | null;
  children: CommentTree[];
};

export default function Comments({
  postId,
  userId,
}: {
  postId: number;
  userId: number;
}) {
  const {
    data: comments,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["comments", postId],
    queryFn: async () => (await api.get(`/comments/${postId}`)).json(),
  });
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading comments</div>;

  // Function to build a tree structure from flat comments and sort by date
  const buildCommentTree = (comments: CommentWithAuthor[]) => {
    const commentMap: { [key: number]: CommentTree } = {};
    const roots: CommentTree[] = [];

    // Initialize comment map with children array
    comments.forEach((comment) => {
      commentMap[comment.id] = {
        id: comment.id,
        comment: comment.comment,
        createdAt: comment.createdAt,
        author: comment.author,
        parentId: comment.parentId,
        children: [],
      };
    });

    // Build the tree structure
    comments.forEach((comment) => {
      if (comment.parentId) {
        commentMap[comment.parentId]?.children.push(commentMap[comment.id]);
      } else {
        roots.push(commentMap[comment.id]);
      }
    });

    // Recursive sort function
    const sortByDate = (nodes: CommentTree[]) => {
      nodes.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      nodes.forEach((node) => {
        if (node.children.length > 0) {
          sortByDate(node.children);
        }
      });
    };

    sortByDate(roots);

    return roots;
  };

  // Build the comment tree
  const commentTree = buildCommentTree(comments?.comments || []);

  console.log("Comment Tree:", commentTree);

  return (
    <div>
      <h2>Comments</h2>
      {commentTree?.map((comment: CommentTree) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          userId={userId}
          postId={postId}
        />
      ))}
    </div>
  );
}
