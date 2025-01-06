const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members || typeof members[Symbol.iterator] !== 'function') return false;

  let names = [];
  for (const member of members) {
    if (typeof member !== 'string') continue;
    else { names.push(member.replaceAll(' ', '')[0]); }
  }

  return names.sort().join('').toUpperCase().split('').sort().join('');
}

module.exports = {
  createDreamTeam
};
