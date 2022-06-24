import _ from 'lodash';

// const getFreeDomainsCount = (emails) => emails.reduce((acc, object) => {
//   const domainName = object.split('@').pop();
//   console.log(domainName);
//   if (!Object.hasOwn(acc, domainName)) {
//     acc[domainName] = 0;
//   }
//   acc[domainName] = acc[domainName] + 1;
//   return acc;
// }, {});

const getFreeDomainsCount = (emails) => emails
  .map((email) => {
    const [, domain] = email.split('@');
    return domain;
  })
  .filter((domain) => freeEmailDomains.includes(domain))
  .reduce((acc, domain) => {
    const count = _.get(acc, domain, 0) + 1;
    return { ...acc, [domain]: count };
  }, {});

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

const emails = [
  'info@gmail.com',
  'info@yandex.ru',
  'info@hotmail.com',
  'mk@host.com',
  'support@hexlet.io',
  'key@yandex.ru',
  'sergey@gmail.com',
  'vovan@gmail.com',
  'vovan@hotmail.com',
];
 
console.log(getFreeDomainsCount(emails));
// {
//   'gmail.com': 3,
//   'yandex.ru': 2,
//   'hotmail.com': 2,
// };
