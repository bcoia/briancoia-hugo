+++
title = "Streaming with Remote Commentary"
description = "An attempt at solving coast-to-coast stream commentary"
date = "2014-07-31T00:06:43-05:02"
+++

Streaming with remote commentators sucks.

Due to the nature of the internet and video compression, most streaming services have a 10-30 second delay. While unnoticeable to viewers in non-interactive streams, this delay ruins interactivity between viewers and streamers. It also complicates remote commentary over voice chat services like Skype or Mumble.

## The "Solution"

I have a solution. It's not a good one.

{{% img src="/media/stream-setup.png" alt="Remote Streaming Setup" %}}

Using both XSplit and Open Broadcaster Software (OBS), both a headset and a set of earbuds with microphone, two computers, and Skype screen sharing, you can achieve near-instantaneous video output to your friends while capturing everybody's voices.

This is obviously not ideal.

Using this setup, your mumble commentators won't hear game audio. Commentators must connect to a muted Skype call. You will be wearing two sets of headphones.

But it works! I've done a couple of streams like this. It's not fun for anyone involved.

## An Audio Solution

We can already reduce the audio setup down to a single computer. Unfortunately, this requires [Virtual Audio Cable](http://software.muzychenko.net/eng/vac.htm), which is about as useful as it is arcane. We would need to mute XSplit's audio loopback (without muting it entirely, so the stream can hear game audio). We would also need to pipe the game audio to Mumble or Skype.

Looking ahead, XSplit 2.0 will include an audio mixer, allowing streamers to mute capture card audio loopback. In this setup, it will allow us to eliminate Skype and the second computer.

## A Video Solution

RTMP is a widely-used streaming protocol that most webservers can be configured to stream. I use a [RTMP module for nginx](https://github.com/arut/nginx-rtmp-module), which enables me to stream to a URL on my VPS. A simple page is set up with the Twitch video and chat embeds for my commentators to view them without an RTMP player.

Note that streaming to a personal RTMP server will not completely eliminate lag. On average, there will be a roughly 1-2 second delay. It's totally manageable for our setup, but may not be ideal for faster-pace games.
