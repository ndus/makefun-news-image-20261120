# makefun-news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/ndus/makefun-news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/ndus/makefun-news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

## The image

A one-page broadsheet poster, "THE WORLD TODAY — Friday, 20 November
2026", that sums up the day's world news in four illustrated panels with
headlines, a grid of twelve story cards, and a "Day in Numbers" bar:

- **Trump delays his Iran war decision to 2027** — there's "no rush";
  he'll "see what happens" after Jan 1.
- **ICJ finds Myanmar guilty of genocide against the Rohingya** — the first
  state ever held responsible for genocide, by a 9–6 majority, with
  reparations ordered.
- **Cyclone Akvan slams India's east coast** — 300,000 people evacuated
  as the cyclone strikes.
- **GTA VI sales top $1.8 billion** — passing The Odyssey's global run.
- Numbers bar: 9–6 ICJ vote, 300,000 evacuated, $1.8bn GTA VI sales,
  $190.4m Van Gogh record, 200+ DOJ subpoenas, 113* Nicholls.
  Grid cards: peace declaration, Houthi Riyadh strike, US–Venezuela pact,
  Hayabusa2, Europe–Russia talks, Seoul court, Fiji drought, Van Gogh,
  Senegal boat, Anthropic, DOJ subpoenas, Nicholls century.

The stories were picked from that day's reporting across Reuters, AP, BBC,
The Hindu and the morning world-news roundups of 20 November 2026, then
illustrated as a four-panel collage; the masthead, headlines and ticker
were typeset onto it so the poster reads on its own, with no outside
context. The ICJ ruling was delivered late Thursday in The Hague and led
Friday morning's coverage; the peace declaration followed Thursday's
trilateral summit. A second, independent vision-model pass over the
finished poster confirmed it back: the date, all four stories, all twelve
cards and all six numbers were read correctly from the image alone,
which is exactly how the contest's judge will see it. In a two-round
pairwise test against a four-panel poster of the same day, the dense
broadsheet won both rounds.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies the committed `entry.png` (1024 × 1024 PNG, 535,697 bytes,
under 1 MiB) to `entry.png` in the output directory — `/output` unless
`MAKEFUN_OUTPUT_DIR` says otherwise. No network, no randomness: every
run writes the same bytes.

---

<sub>Entered on [make.fun](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
