---
layout: post
title:  "How to Fix Adobe Premiere Pro's 'Error Compiling Movie, Unknown Error' Problem"
date:   2014-06-03 13:13:33 -0600
categories: video
---
This isn't a complicated article, but since most of the search results for this are not so helpful Adobe knowledge base articles and people complaining about it. As things turn out, this is a really simple problem to fix. 

Sometimes, Premiere can really jumble up your graphics card's memory, and there's not much you can to do un-jumble it. Short term, this tends to slow down the program and basic functions stop behaving quite how you expect them to, but longer term, this tends to cause export errors or even crashes. It's been a problem ever since I've been using Adobe Premiere Pro, and I doubt it's going away any time soon. Worst of all, since the Adobe Dynamic Link engine and other programs share this graphics memory, you can't just close Premiere and open it again.

You guessed it: the solution here is to take a second and restart. It's worth doing every now and then when you're editing anyway, but this has fixed the "Error Compiling Movie" problem for me 9/10 times. That tenth can be a real problem, but give this a try and see if it works for you!

The other likely source of this error is a little more complicated. Sometimes, Adobe's so-called Mercury Playback Engine can get gummed up and stop working. I'm not sure why they call it a playback engine since it clearly affects final renders as well, but it's perfectly possible to be able to play the sequence in real time without a problem, but go in to export it and have this problem. 

If you tried restarting and suspect that this could be your problem, there are a few steps you can take to troubleshoot your problem. First, go to your timeline and press the enter key to render the whole thing and see if it plays. If you get the same or a similar error while rendering, then you'll need to continue to the next paragraph. If playback works there, you can try checking the "use previews" option in Premiere's export screen, which will use the editing previews you just rendered to compile your final movie instead of rendering them from scratch.

If this didn't work, it's time to pull out the big guns and disable the Mercury Playback Engine altogether. 