export type ProjectDetail = {
  slug: string;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  exampleUrl?: string;
  sections: { heading: string; body: string }[];
};

const projectDetails: ProjectDetail[] = [
  {
    slug: "parakh",
    title: "Parakh: Building an AI GitHub PR Reviewer",
    description:
      "How Pranshu Raj built Parakh, an AI-powered GitHub pull request reviewer using Cloudflare Workers, Gemini, Upstash Redis, Neon Postgres, and a React dashboard.",
    githubUrl: "https://github.com/PranshuRaj1/Parakh",
    exampleUrl: "https://github.com/PranshuRaj1/Parakh/pull/36",
    sections: [
      {
        heading: "What it does",
        body:
          "Parakh is an AI-powered GitHub pull request review bot. It installs per organization as a GitHub App, analyzes repository changes, and posts threaded review comments through GitHub's pull request review API. Severity gating uses P0, P1, and P2 findings with progressive disclosure so developers see the most important issues first.",
      },
      {
        heading: "Architecture",
        body:
          "The review pipeline is multi-phase and incremental, with a ledger carrying findings between review phases. A creator agent generates candidate findings and a separate judge agent verifies them using an LLM-as-a-Judge pattern. Severity gating progressively discloses P0, P1, and P2 findings. Cloudflare Workers run the workflow, Upstash Redis provides a session-locked state machine, and Neon Postgres stores durable application data. Cloudflare Queues drive watchdog and stuck-detection work. Each organization installs Parakh as a GitHub App, and threaded comments are posted through GitHub's pull request review API. A React and Next.js dashboard exposes review state and results.",
      },
      {
        heading: "Recent engineering focus",
        body:
          "Recent work has focused on the creator and judge verification pattern, false-positive suppression through reviewer-corrected memory, and severity-gated review output. These mechanisms help Parakh carry useful findings forward while making lower-confidence or lower-severity feedback less disruptive.",
      }, 
      {
        heading: "Engineering problems solved",
        body:
          "A Redis type mismatch between STRING and HASH caused a 100 percent cooldown failure. The fix aligned the stored value type with the access path. A diff filename parser bug was corrected so changed-file context remained reliable. A key rotation loop was bounded after a hardcoded attempt-cap issue could keep rotation cycling. These fixes made retries, cooldowns, and recovery behavior explicit parts of the review system. The supplied notes do not include quantified downtime or failed-job counts for these incidents.",
      },
      {
        heading: "Research and methodology",
        body:
          "The design is informed by AI slop detection research, including SlopCodeBench and GitClear data, and by LLM-as-a-Judge literature from Hamel Husain, Eugene Yan, Zheng et al.'s MT-Bench paper, Who Validates the Validators, and Replacing Judges with Juries. The project also includes checkpoint-verification and anti-slop-coding skill files used to make review output more deliberate.",
      }, 
      {
        heading: "Links",
        body:
          "The source code is available on GitHub, and PR #36 provides an example review.",
      },
    ],
  },
  {
    slug: "ira",
    title: "IRA: A Memory-Augmented AI Agent",
    description:
      "IRA is a memory-augmented AI agent designed around an eight-layer guardrail pipeline and lifecycle-aware memory architecture.",
    githubUrl: "https://github.com/PranshuRaj1/ira",
    liveUrl: "https://t.me/ira_memory_bot",
    sections: [
      {
        heading: "What it does",
        body:
          "IRA combines conversational reasoning with persistent memory so useful context can survive across sessions. Its memory architecture includes spaced repetition decay, archiving, consolidation sleep cycles, and circuit breakers to keep retrieval useful and bounded over time.",
      },
      {
        heading: "Safety architecture",
        body:
          "IRA was red-teamed across seven attack categories. That work resulted in an eight-layer guardrail pipeline, with each layer addressing a different failure mode instead of relying on a single prompt or model response. The specific attack categories are not included in the available project notes.",
      },
      {
        heading: "Memory architecture",
        body:
          "IRA's memory system uses spaced repetition decay, archiving, a consolidation sleep cycle, and circuit breakers. Together, these mechanisms manage what remains useful, what can be archived, and how the agent degrades safely when part of the system is unavailable.",
      },
      {
        heading: "Links",
        body:
          "The GitHub repository is the primary implementation link. The deployed bot is available through Telegram for hands-on interaction.",
      },
    ],
  },
  {
    slug: "real-answers",
    title: "real-answer: A Voice-First AI Agent",
    description:
      "real-answer is a voice-first AI agent built by Pranshu Raj and deployed at real-answers.vercel.app.",
    githubUrl: "https://github.com/PranshuRaj1/real-answers",
    liveUrl: "https://real-answers.vercel.app",
    sections: [
      {
        heading: "What it does",
        body:
          "real-answer is a voice-first AI agent. The project explores an interaction model where voice is the primary interface for working with an AI agent.",
      },
    ],
  },
];

export default projectDetails;
