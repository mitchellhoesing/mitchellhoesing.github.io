/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Independent AI Research',
    position: 'Applied AI Engineer',
    url: '',
    startDate: '2024-07',
    endDate: 'Present',
    highlights: [
      'Developed Alfred, a Python-based Model Context Protocol (MCP) server that exposes enterprise APIs to LLM engines.',
      'Implemented a decoupled SourceAdapter interface to synchronize information and reinforce infrastructure scalability.',
      'Evaluated deep reinforcement learning policies using Ray RLlib and SimulationCraft to optimize agent decision-making logic.',
      'Benchmarked reinforcement learning policies against deterministic baseline strategies to measure performance.',
      'Fine-tuned Qwen2.5-1.5B-Instruct using 4-bit QLoRA on a single 8GB GPU for a specialized persona-adaptation task.',
      'Reduced held-out model perplexity by 54% through the implementation of completion-only loss masking.',
      'Architected an automated RAG pipeline to ingest, index, and optimize text-chunking for software documentation.',
      'Designed semantic search strategies to maximize retrieval precision and reduce downstream LLM hallucination.',
    ],
  },
  {
    name: 'Pennsylvania State University',
    position: 'Research Assistant',
    url: 'https://plaintext.psu.edu/',
    startDate: '2022-12',
    endDate: '2024-07',
    highlights: [
      'Engineered an automated multi-class text classification pipeline using Python, SQL, and commercial LLM APIs.',
      'Mapped 37 years of historical research corpora across 6,607 documents using LLM classification pipelines.',
      'Developed custom regex, tokenization, stop-word filtering, and lemmatization pipelines in SpaCy and NLTK.',
      'Cleaned raw text strings to optimize computational efficiency and token context-window density.',
      'Implemented Latent Dirichlet Allocation (LDA) modeling with asymmetric alpha priors to extract latent word-over-topic distributions.',
      'Validated and iterated a 15-tier methodological taxonomy using unsupervised topic modeling.',
      'Architected validation frameworks to benchmark LLM accuracy against a human-annotated ground truth matrix.',
      'Optimized classification confidence via token-level logprob thresholding.',
      'Calculated quantitative validation metrics including the Jaccard Index, precision, recall, and F1 scores.',
    ],
  },
  {
    name: 'Intel',
    position: 'Automation Quality Analyst',
    url: 'https://www.intel.com/content/www/us/en/homepage.html',
    startDate: '2021-7',
    endDate: '2022-11',
    highlights: [
      'Reviewed and analyzed automated test execution logs daily to isolate root causes of failures.',
      'Distinguished accurately between true system regressions and internal automation framework errors.',
      'Summarized log findings and escalated actionable technical details to relevant domain managers.',
      'Communicated cross-functionally across domain groups to ensure swift resolution of development blockers.',
    ],
  },
  {
    name: 'School of Civil and Construction Engineering at Oregon State University',
    position: 'Industry Liaison Assistant',
    url: 'https://engineering.oregonstate.edu/CCE',
    startDate: '2018-8',
    endDate: '2019-8',
    highlights: [
      'Compile, calculate, and visualize school graduation and employment statistics.',
      'Maintain a directory of industry contacts in Salesforce.',
      'Support the organization and execution of events with industry partners.',
      'Automate frequent tasks with Python scripts.',
    ],
  },
  {
    name: 'Top Deck Hobbies',
    position: 'Store Manager',
    startDate: '2014-5',
    endDate: '2016-5',
    highlights: [
      'Cultivated an efficient shipping team through leadership and coworking.',
      'Ship an average of 600 online orders of trading-card game cards daily.',
      'Maintain relationships with and place orders to product distributors.',
      'Cultivated an efficient shipping team through leadership and coworking.',
      'Operate in-store weekly and regional trading-card game tournaments.',
      'Travel the West Coast of the United States to represent the company at Magic: the Gathering tournaments by hosting a booth to buy and sell trading cards.',
    ],
  },
];

export default work;
