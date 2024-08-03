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
    name: 'Pennsylvania State University',
    position: 'Research Assistant',
    url: 'https://plaintext.psu.edu/',
    startDate: '2022-12',
    endDate: '2024-07',
    highlights: [
      'Progressed research in longitudinal quantitative analyses using large-language models.',
      'Support the PLAINTEXT Lab with software development, statistical work and writing, and research paper writing.',
      'Present research papers to the PLAINTEXT Lab on interesting and related work to our own.',
    ],
  },
  {
    name: 'Intel',
    position: 'Automation Quality Analyst',
    url: 'https://www.intel.com/content/www/us/en/homepage.html',
    startDate: '2021-7',
    endDate: '2022-11',
    highlights: [
      'Analyzed and/or patched automation test failures.',
      'Detail bugs and assign Jira tickets to appropriate team and domain owner.',
      'Provide support to adjacent teams in the form of software development to meet nearing deadlines.',
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
