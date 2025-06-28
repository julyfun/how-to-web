export const SITE = {
  title: {
    en: "« Minimal Replication »",
    zh: "『最小化可复现』",
  },
  description: {
    en: "A how-to blog",
    zh: "复现问题，解决问题",
  },
  url: "https://how-to.fun",
  og: {
    imageUrl: "/ogimage.jpg",
  },
  analytics: {
    umami: {
      id: "61c1c4cf-ada2-4371-8131-a4a70bdd93c7",
    },
  },
  searchEngine: {
    bing: "90E919A44E934714DF5640B4D8631CC9",
    baidu: "codeva-IdRrdx3ejJ",
    sogou: "d61GLZA6rw",
    threeSixZero: "3df8dc4fd80a1899f65048a77e408c40",
  },
};

export const AUTHOR = {
  name: "Julyfun",
  avatarUrl: "https://avatars.githubusercontent.com/u/43675484?v=4",
  link: "https://github.com/julyfun",
  email: "julyfun.collect@outlook.com",
  bio: {
    en: "A student majoring in computer science and technology.",
    zh: "一名计算机科学与技术专业的学生。",
  },
};

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/julyfun",
    linkTitle: `${AUTHOR.name} on Github`,
  },
  {
    name: "Email",
    href: `mailto:${AUTHOR.email}`,
    linkTitle: `Send an email to ${AUTHOR.name}`,
  },
];

export const MISC = {
  more: {
    marks: ["<!--more-->", "<!-- more -->"],
  },
  dateTag: {
    daysToBeGreen: 7,
    daysToBeRed: 365,
  },
  license: {
    enabled: true,
    default: {
      name: "CC BY-NC-SA 4.0",
      link: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    },
  },
  toc: {
    minHeadings: 3,
  },
  postStack: {
    initialLimit: 5,
    limitIncrement: 10,
    searchResultsLimit: 5,
  },
};
