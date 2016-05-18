+++
title = "Skybot Hearthstone plugin"
description = "Search for Hearthstone cards"
date = "2014-08-16T12:00:00+02:00"
tags = ["bots", "python"]
+++

[Skybot](https://github.com/rmmh/skybot) is an extensible Python-based IRC bot. This Skybot plugin queries a local Hearthstone JSON database (provided by [hearthstonejson.com](hearthstonejson.com)) for a given card name and returns information. Returns closest match for partial names.

### Usage
```
<bcoia> .hs argent
<skybot> (6) Argent Commander | Rare Neutral Minion, Expert set | 4/2, Charge, Divine Shield
```

### Installation
1. Place `AllSets.json` from [hearthstonejson.com](hearthstonejson.com) in your Skybot's root directory.
2. Place `hearthstone.py` into your Skybot's `/plugins/` directory.

**[Download from GitHub](https://github.com/bcoia/skybot-plugins/raw/master/hearthstone.py)**
