import React from "react";
import { MasonryPost } from "./MasonryPost";
import "./MasonryLayout.css";

export function MasonryLayout({ posts, columns, tagsOnTop }) {
  return (
    <section
      className="masonry-layout"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(275px, 1fr))` }}
    >
      {posts.map((post, index) => (
        <MasonryPost {...{ post, index, tagsOnTop, key: index }} />
      ))}
    </section>
  );
}
