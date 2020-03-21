const colors = [
  "e9eaeb",
  "05ffa1",
  "ff71ce",
  "b967ff",
  "01cdfe",
  "fffb96",
  "ff0563"
];

const tracks = [
  {
    name: "Track Name",
    date: "03/21/2020",
    description: "This track is about something",
    musicians: [
      { name: "John Gribbin", link: getTwitterLink("johngribbo") },
      { name: "Aaron Barnard", link: getTwitterLink("tarrendarnard") }
    ],
    embed: createIframe("744667294", getRandomColor())
  },
  {
    name: "Track Name",
    date: "03/22/2020",
    description: "This track is about something else",
    musicians: [
      { name: "John Gribbin", link: getTwitterLink("johngribbo") },
      { name: "Aaron Barnard", link: getTwitterLink("tarrendarnard") }
    ],
    embed: createIframe("322167648", getRandomColor())
  }
];

function createIframe(track, color) {
  return `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track}&color=%23${color}&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * (colors.length - 1 - 1));
  return colors[index];
}

function getTwitterLink(user) {
  return `https://twitter.com/${user}`;
}

export default tracks;
