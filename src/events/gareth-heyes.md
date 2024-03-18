---
title: "Stealing user data from unknown web pages via CSS"
date: "2024-01-25"
time: "5PM CET"
speaker: "Gareth Heyes"
speakerImage: "gareth-heyes"
videoId: "3WjDnnmLlKo"
videoTitle: "Stealing user data from unknown web pages via CSS"
speakerBio: |-
  Gareth is a security researcher and probably best known for his work escaping JavaScript sandboxes, and creating super-elegant cross-site scripting (XSS) vectors. In his daily life, Gareth can often be found creating new XSS vectors, researching new techniques to attack web applications, and preparing to speak at conferences around the globe. In his spare time he can often be found experimenting with pure 3D CSS on his website https://garethheyes.co.uk.
meetupLink: https://www.meetup.com/de-DE/css-cafe/events/298480761/
shared:
  websites:
    - url: "https://garethheyes.co.uk"
      text: "Gareth's Website"
  slides:
    - url: "https://portswigger.net/kb/papers/blind-css-exfiltration-exfiltrate-unknown-web-pages-slides.pdf"
      text: "Slides"
---

This talk delves into a new hacking attack class of Blind CSS Exfiltration! A method to extract data using pure CSS from unknown web pages even when executing scripts is not an option due to strict Content Security Policy (CSP) or sanitization mechanisms like DOMPurify.

I'll begin by discussing the landscape of current CSS exfiltration techniques and their limitations. The talk then introduces the concept of Blind CSS Exfiltration, focusing on its reliance on CSS variables and attribute selectors to extract data. A key aspect of this technique is the novel use of the :has CSS selector, which significantly broadens the scope of data that can be exfiltrated from unknown web page structures.
Throughout the presentation, I will demonstrate how CSS variables can be employed as triggers for conditional requests using background images, and how attribute selectors can be used to extract specific data based on the presence or absence of certain characters.

I will also explore using the combination of :has and :not selectors to skip already exfiltrated data, and the utilisation of @import chaining for extracting a large amount of data. The session will culminate with practical demonstrations, including the use of a server to initiate the exfiltration process and display the results in the browser in pure CSS.
Attendees will leave with a deeper understanding of CSS's potential for exfiltration and the skills to test for and protect against this new attack.
