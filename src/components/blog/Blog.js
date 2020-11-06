import React from "react";
import NavBar from "../common/nav/NavBar";
import { MasonryLayout } from "../common/MasonryLayout";
import trending from "../assets/mocks/trending";
import featured from "../assets/mocks/featured";
import "./Blog.css";
import { MasonryPost } from "../common/MasonryPost";

const trendingConfig = {
  2: {
    gridArea: "1 / 2 / 3 / 3",
  },
};

const featuredConfig = {
  0: {
    gridArea: "1 / 1 / 2 / 3",
    height: "250px",
  },

  2: {
    height: "250px",
  },

  3: {
    height: "530px",
    marginLeft: "30px",
    width: "530px",
  },
};

const combineStyles = (posts, config) => {
  posts.forEach((post, index) => {
    post.style = config[index];
  });
};

combineStyles(trending, trendingConfig);
combineStyles(featured, featuredConfig);

const lastFeatured = featured.pop();

export default function Blog() {
  return (
    <>
      <NavBar />
      <main className="blog-home">
        <h2 className="page__banner-top page__title">Blog</h2>
        <section className="debug__container">
          <div className="debug__row">
            <section className="featured-posts-container">
              <MasonryLayout posts={featured} columns={2} tagsOnTop={true} />
              <MasonryPost post={lastFeatured} tagsOnTop={true} />
            </section>
          </div>
        </section>

        <section className="debug__container">
          <div className="debug__row">
            <MasonryLayout posts={trending} columns={3} />
          </div>
        </section>
      </main>
    </>
  );
}
