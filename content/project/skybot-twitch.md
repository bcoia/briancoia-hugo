+++
title = "Skybot Twitch plugin"
description = "Unfurl Twitch URLs"
date = "2014-02-20T12:00:00+02:00"
tags = ["bots", "python"]
+++

[Skybot](https://github.com/rmmh/skybot) is an extensible Python-based IRC bot. This Skybot plugin unfurls Twitch URLs with title, game, status and viewers.

### Usage
```
<bcoia> twitch.tv/twitchplayspokemon
<skybot> TwitchPlaysPokemon is LIVE playing Pokémon Battle Revolution | Twitch Plays Pokemon (Enter moves via chat!!!) | 557 viewers
```

Also adds `.twitch [username]` command to search a username manually. Output includes the channel's URL.
```
<bcoia> .twitch saltybet
<skybot> SaltyBet is LIVE playing M.U.G.E.N | Salty's Dream Cast Casino! Place your bets at www.saltybet.com | 351 viewers | http://www.twitch.tv/saltybet
```

### Installation

Place `twitch.py` in your Skybot's `/plugins/` directory. That's it!

**[Download from GitHub](https://github.com/bcoia/skybot-plugins/raw/master/twitch.py)**
