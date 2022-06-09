---
title: "Modern CSS rendering performance: The internals of web pages optimization "
date: "2022-04-28"
time: "5PM CEST"
speaker: "Michael Hladky"
speakerImage: "michael-hladky"
videoId: "adRawKeHi90"
videoTitle: "Modern CSS rendering performance: The internals of web pages optimization "
speakerBio: |-
  Michael Hladky is a Google Developer Expert (GDE), Microsoft MVP, trainer, and consultant with a focus on Angular and RxJS. For years he has been helping companies and developers to set up scalable architectures and performant processes enabling teams to keep up with state-of-the-art development. A vibrant member of the tech community, he organizes multiple community events and workshops each year to give back.
twitter:
  url: "https://twitter.com/Michael_Hladky"
  text: "@Michael_Hladky"
meetupLink: #
shared:
  websites:
    - url: "https://docs.google.com/presentation/d/1PWzVz1eqo78WpTgXuihBfnA8Fb4qDbZHVjSzk-m82qY/edit#slide=id.p "
      text: "Talk Slides"
    - url: "https://css-containment-debug.stackblitz.io/"
      text: "Demo"
    - url: "https://github.com/push-based/"
      text: "GitHub"
    - url: "https://github.com/push-based/css-contain-research"
      text: "Contain Research Repo"
    - url: "https://github.com/push-based/observable-hq--audit"
      text: "Observable HQ - Performance Audit"
    - url: "https://github.com/push-based/angular-movies-audits"
      text: "Audit on Angular movies project"
    - url: "https://bugs.chromium.org/p/chromium/issues/detail?id=1308319&q=content-visibility&can=2"
      text: "content-visibility bug that turned out not be a bug"
    - url: "https://drafts.csswg.org/css-sizing-4/#propdef-contain-intrinsic-size"
      text: "W3C spec draft for content-visibility"
---

In this talk, we demystify the browser’s rendering pipeline and explore the different ways you can enhance the user experience by improving your CSS rendering performance. We will get to the core of browser rendering optimization, uncover what’s hidden under the hood there, and identify the opportunities for improvement that one can seize with a few lines of CSS only and RenderingNG architecture on hand. During this session, we will take a look at how the web page is rendered in a browser, go over the basic Chrome DevTools’ workflow for analyzing runtime performance and see how to benefit from these metrics by introducing only small changes in the CSS. All of the covered implementations will be demoed for you to see their real-world application.
