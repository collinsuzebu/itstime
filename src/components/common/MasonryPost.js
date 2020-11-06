import React from "react";
import { categoryColors } from "./styles";
import "./MasonryPost.css";

export function MasonryPost({ post, tagsOnTop }) {
  const windowWidth = window.innerWidth;
  const imgbackground = {
    backgroundImage: `url("${require(`../assets/images/${post.image}`)}")`,
  };

  const style =
    windowWidth > 900 ? { ...imgbackground, ...post.style } : imgbackground;

  return (
    <a className="masonry-post overlay" style={style} href={post.link}>
      <div
        className="image-text"
        style={{ justifyContent: tagsOnTop ? "space-between" : "flex-end" }}
      >
        <div className="tags-container">
          {post.categories.map((tag, index) => (
            <span
              key={index}
              className="tag"
              style={{ backgroundColor: categoryColors[tag] }}
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>
        <div>
          <h2 className="image-title">{post.title}</h2>
          <span className="image-date">{post.date}</span>
        </div>
      </div>
    </a>
  );
}
