//function that return empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

function renderLicenseLink(license) {
  // 'Apache', 'MIT', 'GNU', 'Mozilla'
  switch (license) {
    case 'Apache':
      return 'https://choosealicense.com/licenses/apache-2.0/';
    case 'MIT':
      return 'https://choosealicense.com/licenses/mit/';
    case 'GNU':
      return 'https://choosealicense.com/licenses/gpl-3.0/';
    case 'Mozilla':
      return 'https://choosealicense.com/licenses/mpl-2.0/';
  }
}

// function that returns the license section of README
function renderLicenseSection(license) {
  switch (license) {
    case 'Apache':
      return 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
    case 'MIT':
      return 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
    case 'GNU':
      return 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.';
    case 'Mozilla':
      return 'Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.';
  }
}
//  function to generate markdown for README
const Template = ({
  title,
  license,
  description,
  installation,
  usage,
  contribution,
  github,
  email,
}) =>
  `# ${title}
  ### License
  ${renderLicenseBadge(license)}
  ${renderLicenseSection(license)}
  ${renderLicenseLink(license)}
  ***
  
  ## Description
  ${description}
  ***
  
  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [Contribution](#contribution)
  4. [Test](#test)
  5. [Questions](#questions)
  ***
  
  <a name="installation"></a>
  ## Installation Instructions
  
  ${installation}
  ***
  
  <a name="usage"></a>
  ## Usage Information
  
  ${usage}
  ***
  
  <a name="contribution"></a>
  ## Contribution guidelines
  ${contribution}
  ***
  
  <a name="questions"></a>
  ## Questions
  
  ### GitHub Profile:
  https://github.com/${github}
  
  ### Contact Me:
  If you have any additional questions, please send me an email.
  #### ${email} 
  `

export default Template;