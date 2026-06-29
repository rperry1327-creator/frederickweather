import { useState } from "react";
import { BLOG_POSTS } from "../data/blogPosts";
import PostCard from "./PostCard";

const TAGS = [
  { key: "all", label: "All Posts" },
  { key: "outlook", label: "Weekly Outlook" },
  { key: "event", label: "Storm Events" },
  { key: "climate", label: "Climate Notes" },
  { key: "radar", label: "Radar Breakdown" },
];

export default function BlogView() {
  const [activeTag, setActiveTag] = useState("all");

  const posts = [...BLOG_POSTS]
    .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0))
    .filter((p) => activeTag === "all" || p.tags.includes(activeTag));

  return (
    <>
      <div className="blog-header">
        <div className="blog-header-title">
          The Frederick <span>Forecast</span> Blog
        </div>
      </div>

      <div className="tag-filter">
        {TAGS.map((t) => (
          <button
            key={t.key}
            className={`tag-pill${activeTag === t.key ? " active" : ""}`}
            onClick={() => setActiveTag(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="blog-feed">
        {posts.length === 0 ? (
          <div className="blog-empty">
            <p>No posts in this category yet.</p>
          </div>
        ) : (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>
    </>
  );
}
