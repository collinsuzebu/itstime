const courses = [
  {
    id: 1,
    authorId: 1,
    subjectId: 6,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
  },
  {
    id: 2,
    authorId: 1,
    subjectId: 4,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 3,
    authorId: 1,
    subjectId: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 4,
    authorId: 1,
    subjectId: 5,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
  },
  {
    id: 5,
    authorId: 1,
    subjectId: 1,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 6,
    authorId: 1,
    subjectId: 2,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
  },
  {
    id: 7,
    authorId: 1,
    subjectId: 5,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
  },
  {
    id: 8,
    authorId: 1,
    subjectId: 4,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 9,
    authorId: 1,
    subjectId: 3,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
  {
    id: 10,
    authorId: 1,
    subjectId: 1,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
  },
];

const authors = [
  { id: 1, name: "Collins Uzebu" },
  { id: 2, name: "Brian Pi" },
  { id: 3, name: "Joy Zhang" },
];

const subjects = [
  { id: 1, title: "HTML5" },
  { id: 2, title: "Career" },
  { id: 3, title: "Python" },
  { id: 4, title: "JavaScript" },
  { id: 5, title: "Electronics" },
  { id: 6, title: "Marketing" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  subjectId: null,
  description:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
  subjects,
};
