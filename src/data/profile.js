export const profile = {
  name: 'Himanshu Verma',
  handle: 'bitflicker64',
  age: 19,
  avatar: 'https://unavatar.io/twitter/Bitflicker64?fallback=https://github.com/bitflicker64.png',
  role: 'Backend & Infrastructure Engineer',
  tagline: 'Engineer. I love building, breaking, and shipping things.',
  bullets: [
    'Distributed systems, infrastructure, and open source excite me.',
    '19 years of uptime — I run on caffeine, sheer willpower, and an irrational fear of light mode.',
    'I firmly believe automation can save the world (or at least give me my weekends back).',
  ],
  email: 'himnshuverma10152006@gmail.com',
  socials: {
    github: 'https://github.com/bitflicker64',
    twitter: 'https://x.com/Bitflicker64',
    linkedin: 'https://www.linkedin.com/in/himanshu-verma-40755a359/',
    medium: 'https://medium.com/@bitflicker64',
  },
  stats: [
    { label: 'MERGED UPSTREAM PRs', value: '46' },
    { label: 'CONTRIBUTIONS / YR', value: '4k+' },
    { label: 'UPTIME', value: '99.9%' },
  ],
};

export const techStack = [
  'Java', 'Go', 'Python', 'JavaScript', 'Node.js', 'React',
  'Spring Boot', 'Redis', 'SQLite', 'PostgreSQL', 'Docker', 'Kubernetes',
  'Cilium / eBPF', 'gRPC', 'Kafka', 'CI/CD', 'Linux', 'Tailwind',
];

// Open source experience. `repo` powers the "ask this repo" box via the DeepWiki proxy.
export const experience = [
  {
    id: 'hugegraph',
    org: 'Apache HugeGraph',
    repo: 'apache/hugegraph',
    stars: '3.1k+',
    prs: '25 merged PRs',
    role: 'Contributor — deployment architecture & distributed consensus',
    summary:
      'Systematic overhaul of the deployment architecture and distributed consensus handlers. 16 merged PRs that eradicated silent zombie process leaks, neutralized asynchronous deadlocks, hardened network isolation, and introduced deterministic state checking across the cluster topology.',
    highlights: [
      {
        title: 'Bridge Networking Isolation',
        refs: 'PR #2952, #2976',
        url: 'https://github.com/apache/hugegraph/pull/2952',
        text: '2,400+ LOC architectural overhaul spanning 37 modules — migrated single-node compose files from insecure host networking to isolated bridge networks and sealed temporary volume mount data spill vectors.',
      },
      {
        title: 'gRPC Leader Election Fortification',
        refs: 'PR #2961',
        url: 'https://github.com/apache/hugegraph/pull/2961',
        text: 'Hardened the Placement Driver with strict time-bound invariants and null-safety checks in getLeaderGrpcAddress(), neutralizing transient partition faults during volatile gRPC leader elections.',
      },
      {
        title: 'DNS Resolver Integrity',
        refs: 'PR #2962',
        url: 'https://github.com/apache/hugegraph/pull/2962',
        text: 'Re-engineered the IpAuthHandler handshake to resolve DNS hostname allowlist entries dynamically, averting premature rejection of valid topology nodes in distributed clusters.',
      },
      {
        title: 'Asynchronous Deadlock Resolution',
        refs: 'PR #2941',
        url: 'https://github.com/apache/hugegraph/pull/2941',
        text: 'Diagnosed and fixed a severe await deadlock buried in consumer thread pools during ContextCallable failures, restoring async stability under high contention.',
      },
      {
        title: 'Process Supervision & Zombie Mitigation',
        refs: 'Issue #3043 · PR #3051, #3056',
        url: 'https://github.com/apache/hugegraph/issues/3043',
        text: 'Replaced fragile tail -f /dev/null daemon modes with strict Java process supervision in entrypoints — guaranteed signal propagation, no more PID 1 zombie leaks.',
      },
      {
        title: 'Schemeless URL Parser Calibration',
        refs: 'PR #3005, #2944',
        url: 'https://github.com/apache/hugegraph/pull/3005',
        text: 'Unified the check_port parser to intercept malformed or schemeless cluster endpoints, preventing silent routing failures stack-wide.',
      },
      {
        title: 'Telemetry & Pipeline Optimization',
        refs: 'PR #3052, #2980, #3025',
        url: 'https://github.com/apache/hugegraph/pull/3052',
        text: 'Native container HEALTHCHECKs, restored STDOUT multiplexing across pd/store/server binaries, and re-engineered Docker layers for aggressive build cache efficiency.',
      },
    ],
    tags: ['Java', 'Docker', 'gRPC', 'Distributed Consensus', 'Networking'],
  },
  {
    id: 'hugegraph-doc',
    org: 'Apache HugeGraph Docs',
    repo: 'apache/hugegraph-doc',
    prs: '5 PRs',
    role: 'Contributor — documentation & CI integrity',
    highlights: [
      {
        title: 'Process Supervision Model Docs',
        refs: 'PR #461',
        url: 'https://github.com/apache/hugegraph-doc/pull/461',
        text: 'Documented the new Docker process supervision model and -d flag integration.',
      },
      {
        title: 'Docker-Compose Deployment Guide',
        refs: 'PR #455',
        url: 'https://github.com/apache/hugegraph-doc/pull/455',
        text: 'Drafted a comprehensive docker-compose deployment guide and overhauled the deployment docs for containerized orchestration.',
      },
      {
        title: 'CI Link Validation Hardening',
        refs: 'PR #452, #450, #449',
        url: 'https://github.com/apache/hugegraph-doc/pull/452',
        text: 'Fortified link validation scripts in the docs CI pipeline, fixed broken navigation routes, and unified URL prefix schemas for the 1.8.0 release.',
      },
    ],
    tags: ['Documentation', 'CI/CD'],
  },
  {
    id: 'kubernetes',
    org: 'Kubernetes',
    repo: 'kubernetes/kubernetes',
    stars: '110k+',
    prs: '4 PRs',
    role: 'Contributor — kubelet cleanup & SIGs',
    highlights: [
      {
        title: 'Beta OS Architecture Label Deprecation',
        refs: 'PR #138861',
        url: 'https://github.com/kubernetes/kubernetes/pull/138861',
        text: 'Cleanup across Kubelet components dropping legacy beta OS architecture node labels to align with modern deployment primitives.',
      },
      {
        title: 'Addon-Manager Registry Re-Routing',
        refs: 'PR #138949',
        url: 'https://github.com/kubernetes/kubernetes/pull/138949',
        text: 'Patched a stale container registry reference in the GCP Addon-Manager config so cluster bootstrap pulls from validated registries.',
      },
      {
        title: 'Staging Documentation Integrity',
        refs: 'PR #138947',
        url: 'https://github.com/kubernetes/kubernetes/pull/138947',
        text: 'Resolved typographic inconsistencies across staging domain READMEs.',
      },
      {
        title: 'SIGs Contributor Playground',
        refs: 'PR #2549',
        url: 'https://github.com/kubernetes-sigs/contributor-playground/pull/2549',
        text: 'Refactored the local website development environment in kubernetes-sigs, improving onboarding for new contributors.',
      },
    ],
    tags: ['Go', 'Kubelet', 'SIGs'],
  },
  {
    id: 'chaos-mesh',
    org: 'Chaos Mesh',
    repo: 'chaos-mesh/chaos-mesh',
    stars: '6.4k+',
    prs: '4 PRs',
    role: 'Contributor — fault injection & E2E hardening',
    highlights: [
      {
        title: 'Operator Pipeline Fault Isolation',
        refs: 'PR #4958',
        url: 'https://github.com/chaos-mesh/chaos-mesh/pull/4958',
        text: 'Fixed a control-flow bug in operator loops — replaced anomalous return directives with continue to stop premature termination of cascading pipeline executions.',
      },
      {
        title: 'E2E Timeout Synchronization',
        refs: 'PR #4931',
        url: 'https://github.com/chaos-mesh/chaos-mesh/pull/4931',
        text: 'Replaced deprecated wait.Poll with context-aware wait.PollUntilContextTimeout in pod_failure.go for precise async failure testing.',
      },
      {
        title: 'BlockChaos UI + Codemod Cleanup',
        refs: 'PR #4929, #4930',
        url: 'https://github.com/chaos-mesh/chaos-mesh/pull/4929',
        text: 'Built dedicated iconography for BlockChaos experiments and purged stale jss-to-styled codemod artifacts.',
      },
    ],
    tags: ['Go', 'Chaos Engineering', 'E2E Testing', 'React'],
  },
  {
    id: 'cilium',
    org: 'Cilium',
    repo: 'cilium/cilium',
    stars: '24.4k+',
    prs: '5 merged PRs',
    role: 'Contributor — eBPF dataplane metrics & crypto docs',
    highlights: [
      {
        title: 'Hubble Metrics Parser Rectification',
        refs: 'PR #45809',
        url: 'https://github.com/cilium/cilium/pull/45809',
        text: 'Patched a parsing fault in the labelsContext telemetry subsystem — strict comma-separated delimiter enforcement for uncorrupted metric extraction in the Hubble observability mesh.',
      },
      {
        title: 'mTLS & Routing Documentation',
        refs: 'PR #45751, #45750',
        url: 'https://github.com/cilium/cilium/pull/45751',
        text: 'Fixed hyper-referencing in the mutual-authentication architecture doc and recompiled malformed code-block directives in the core eBPF routing docs.',
      },
    ],
    tags: ['eBPF', 'Observability', 'Networking'],
  },
  {
    id: 'pipecd',
    org: 'PipeCD',
    repo: 'pipe-cd/pipecd',
    stars: '2.1k+',
    prs: '2 PRs',
    role: 'Contributor — docs & codebase integrity',
    highlights: [
      {
        title: 'Contribution Protocol + Codebase Audit',
        refs: 'PR #6814, #6743',
        url: 'https://github.com/pipe-cd/pipecd/pull/6814',
        text: 'Cleaned up CONTRIBUTING.md to streamline onboarding, and swept lexical inconsistencies across the go and pipedv1 domains.',
      },
    ],
    tags: ['Go', 'CD'],
  },
  {
    id: 'kafka',
    org: 'Apache Kafka',
    repo: 'apache/kafka',
    stars: '32.7k+',
    prs: '1 PR',
    role: 'Contributor',
    highlights: [
      {
        title: 'README Syntax & Lexical Integrity',
        refs: 'PR #21389',
        url: 'https://github.com/apache/kafka/pull/21389',
        text: 'Precise refactor of the root-level README — aligned structure, grammar, and terminology for consistent onboarding.',
      },
    ],
    tags: ['Documentation'],
  },
  {
    id: 'ofbiz',
    org: 'Apache OFBiz',
    repo: 'apache/ofbiz-framework',
    stars: '1.0k+',
    prs: '1 PR',
    role: 'Contributor',
    highlights: [
      {
        title: 'Manual Typographic Harmonization',
        refs: 'PR #950',
        url: 'https://github.com/apache/ofbiz-framework/pull/950',
        text: 'Sweeping normalization across the OFBiz user manual — punctuation, formatting constraints, and typography.',
      },
    ],
    tags: ['Documentation'],
  },
];

export const projects = [
  {
    id: 'termstory',
    name: 'TermStory',
    repo: 'bitflicker64/Termstory',
    status: 'LIVE',
    version: 'v2.0.4',
    description:
      'A forensic CLI tool acting as a personal developer memory engine. Parses shell history to create an AI-narrated timeline of your development life — recovering real timestamps of old commands via git log correlation, filesystem metadata, and linear Anchor Interpolation. Privacy-first: local credential redaction before any AI call.',
    tech: ['Python', 'SQLite (WAL)', 'Textual TUI', 'Zero-Dep LLM Client'],
    links: [
      { label: 'Code', url: 'https://github.com/bitflicker64/Termstory' },
      { label: 'PyPI', url: 'https://pypi.org/project/termstory/' },
    ],
  },
  {
    id: 'rate-limiting',
    name: 'Rate Limiting API',
    repo: 'bitflicker64/rate-limiting-api',
    status: 'LIVE',
    description:
      'Ultra-low latency rate limiting daemon for volatile distributed topologies. Zero-allocation Token Bucket and temporal Sliding Window algorithms, backed by clustered Redis with atomic Lua scripting — dropping Layer 7 brute-force traffic at the edge in sub-millisecond time.',
    tech: ['Java 21', 'Spring Boot 3', 'Redis / Lua', 'Docker'],
    links: [{ label: 'Code', url: 'https://github.com/bitflicker64/rate-limiting-api' }],
  },
  {
    id: 'lark-discord',
    name: 'Lark Discord Bridge',
    repo: 'bitflicker64/lark-discord-bridge',
    status: 'LIVE',
    description:
      'Cross-protocol translation bridge for bi-directional syncing between Lark (Feishu) and Discord. Born in the Apache HugeGraph community to prevent fragmentation across language and platform barriers — fault-tolerant with stateful buffering and exponential backoff with jitter. Designed around local LLMs so communities own their infrastructure.',
    tech: ['Node.js', 'Express', 'Discord.js', 'Lark OpenAPI'],
    links: [{ label: 'Code', url: 'https://github.com/bitflicker64/lark-discord-bridge' }],
  },
];

export const writing = [
  {
    title: "I ran Apache HugeGraph on MacOS, Big Mistake, Here's what happened",
    url: 'https://medium.com/@bitflicker64/i-ran-apache-hugegraph-on-macos-big-mistake-heres-what-happened-dc7d19f7828e',
    meta: '7 min read · Medium',
    preview:
      'Compiling a distributed graph database natively on ARM MacOS sounded like a fun weekend challenge. It escalated into broken JNI, rogue background processes, and Docker network isolation quirks.',
  },
];
