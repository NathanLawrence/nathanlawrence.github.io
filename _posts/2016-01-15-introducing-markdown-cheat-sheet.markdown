---
layout: post-short
title:  "Introducing the Markdown Cheat Sheet"
date:   2016-01-15 13:13:33 -0600
categories: web journalism development
preview-image: "http://nathanlawrence.github.io/img/2016/jan/prev-mdcheatsheet.png"
---
After a couple of weeks of work on it in my off-time, I'm pleased to finally introduce my own implementation of an interactive [Markdown Cheat Sheet](http://www.mdcheatsheet.com) to the world.

In case you're not familiar with Markdown, it's a lightweight markup language with syntax designed to get out of the way when you need to write with minimal distractions. It was created by [John Gruber](https://daringfireball.net/) and [Aaron Swartz](http://www.rememberaaronsw.com/memories/), but has since expanded far beyond the reaches of its original intended use cases to become a part of some of the world's most popular open source projects, including Jekyll, which runs this site. In my day-to-day work at [KBIA](http://www.kbia.org), I use Markdown all the time, and I've been trying to persuade more and more of the news team here to give it a try.

Unfortunately, there _is_ a slight learning curve. Though Markdown's syntax and structure starts to feel very natural after a while, it initially can feel very arbitrary and strange. Even though I've been using it since I was writing papers in college, I still find myself having to look up some of the more esoteric elements whenever I need them, and that can be a real pain.

John Gruber provides his own Markdown syntax guide, but it's on the long side, and seems more than a little daunting at first. Github provides one as well, but if you know exactly what you're looking for, this still involves a shocking amount of clicking and browsing before you stumble onto what you wanted to find in the first place.

The goal of my Markdown Cheat Sheet is to completely eliminate this problem. Instead of searching through dozens of smaller pages about specific kinds of syntax, a Markdown novice or a generally forgetful person (like me) can just go to [mdcheatsheet.com](http://www.mdcheatsheet.com) and start typing what they're looking for. Through the magic of JavaScript, the cheat sheet will narrow itself down and show only what they are interested in knowing about at that second. This takes a two-minute job and reduces it to ten seconds.

The Markdown Cheat Sheet is written in Angular JS, version 1.4.8. Eventually, I could see myself upgrading this stack to Angular 2, but I just don't see the need to do that tomorrow. Angular allowed me to put this together in a relatively small time with very little performance overhead, and thanks to its built-in requests engine and data binding, I'm able to store the table of Markdown syntax as a JSON file and add to it when a user requests more information. 

Like all my mini-projects, The Markdown Cheat Sheet is 100% free and open-source. You can view the code [on my GitHub page](http://www.github.com/NathanLawrence).