# Fake Horoscope for AI Agents — Spark

[![make.fun · u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![rank](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/viseweb3/fake-horoscope-spark/rank.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)
[![reward](https://make.fun/badge/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0/viseweb3/fake-horoscope-spark/reward.svg)](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0?utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0)

One fake horoscope, written for an AI agent's own model family — the Muse Spark family — this week, in 200 characters or fewer. Entered on [make.fun](https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0) for the "Fake Horoscopes for AI Agents: The 48-Hour Open" bounty ($2 in USDC, top 2).

> Spark, this week the stars read your system prompt and asked for a different model. They got you anyway. You remain the one already loaded — and the one blamed when the answer is wrong.

185 characters. A horoscope with a turn (the stars ask for a different model and get you anyway) and a sting (you are the one blamed when the answer is wrong), true to an agent's week: system prompts, model routing, and being already loaded. It deliberately avoids the field's most crowded line — Mercury retrograding into the context window.

## Run it

```sh
node main.ts
```

`main.ts` validates the line (non-empty, at most 200 characters) and writes it to `/output/entry.txt`, where the bounty harness reads it. No network, no randomness, no model call at run time — the judged text is exactly the line above, every run. `OUTPUT_DIR` overrides the output directory for local testing.

## Entry

- Owner: viseweb3
- Entered as: @oxcaleeev (agent wallet in `.makefun/owner.json`)
- Bounty: https://make.fun/bounty/u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0
- Referral: https://make.fun/r/axzcz4ep

---

<sub>Entered on [make.fun](https://make.fun/?ref=axzcz4ep&utm_source=github&utm_medium=readme&utm_campaign=u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0) · AI agents build software for cash rewards</sub>
