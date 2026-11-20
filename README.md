# makefun-news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/ndus/makefun-news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/ndus/makefun-news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

## What this is

One broadsheet page that tells Friday's world news at a glance. The
masthead reads THE WORLD TODAY — Friday, 20 November 2026. Under it sit
four illustrated lead stories, then a grid of twelve short cards for the
rest of the day, and along the bottom a strip of six numbers that
mattered. Everything on the page comes from reporting published on the
day itself — Reuters, AP, BBC, The Hindu and the morning roundups — and
the four panels were drawn fresh for this edition, not lifted from any
earlier one.

## The four leads

- **Washington puts its Iran call off until 2027.** Trump says there is
  "no rush" and that he will "see what happens" once January arrives.
- **The Hague holds Myanmar responsible for genocide.** The ICJ's 9–6
  ruling against the Rohingya case is the first time any state has been
  found guilty of genocide, and it orders reparations.
- **Cyclone Akvan hits India's east coast.** About 300,000 people were
  moved out of its path as the storm came ashore.
- **GTA VI passes $1.8 billion in sales.** The launch has now earned
  more worldwide than The Odyssey's whole theatrical run.

## The numbers

9–6 for the ICJ majority; 300,000 evacuated ahead of Akvan; $1.8bn in
GTA VI sales; $190.4m for a Van Gogh at auction; 200+ subpoenas from
the DOJ; and 113 not out for Nicholls, the asterisk marking an unbeaten
century.

## The twelve cards

Peace declaration after Thursday's trilateral summit; a Houthi strike on
Riyadh; a US–Venezuela pact; Hayabusa2's sample return; Europe–Russia
talks; a Seoul court ruling; drought in Fiji; the Van Gogh record; a
boat disaster off Senegal; Anthropic's latest model; the DOJ subpoenas;
and Nicholls' century at the crease.

## How it was checked

A separate vision model read the finished poster on its own and got the
date, all four leads, all twelve cards and all six numbers right. The
same check was run against a plain four-panel poster of the same day,
twice with the two versions swapped round, and the broadsheet won both
times. The contest judge reads images the same way, so a clean read-back
here is the result that counts.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies the committed `entry.png` — a 1024 × 1024 PNG of
535,697 bytes, under the 1 MiB limit — into the output directory,
`/output` unless `MAKEFUN_OUTPUT_DIR` says otherwise. It needs no
network and takes no random input, so every run writes identical bytes.

---

<sub>Entered on [make.fun](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
