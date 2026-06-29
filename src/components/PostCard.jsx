import { useState } from "react";

const TAG_LABELS = {
  outlook: "Weekly Outlook",
  event: "Storm Event",
  climate: "Climate Notes",
  radar: "Radar Breakdown",
};

export default function PostCard({ post }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`post-card${post.pinned ? " pinned" : ""}`}>
      <div className="post-card-inner">
        <div className="post-meta">
          {post.pinned && <span className="pinned-label">📌 Pinned</span>}
          <span className={`author-badge ${post.type}`}>
            <span className="badge-dot" />
            {post.type === "ai" ? "🤖 AI Generated" : "✍️ Editor Analysis"}
          </span>
          {post.tags.map((tag) => (
            <span key={tag} className={`post-tag ${tag}`}>
              {TAG_LABELS[tag] || tag}
            </span>
          ))}
          <span className="post-date">{post.date}</span>
        </div>

        <h2 className="post-title">{post.title}</h2>
        <p className="post-summary">{post.summary}</p>

        {open && (
          <div
            className="post-body open"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
        )}

        <button className={`read-more-btn${open ? " open" : ""}`} onClick={() => setOpen(!open)}>
          {open ? "Show less" : "Read more"} <span className="arrow">▾</span>
        </button>
      </div>
    </div>
  );
}
