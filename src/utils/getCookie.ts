export const getCookie = name => {
  const matches = document.cookie.match(
    new RegExp(
      '(?:^|; )' +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
        '=([^;]*)',
    ),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;

  /*const x = Object.fromEntries(
    document.cookie.split('; ').map(cookie => cookie.split('=')),
  );
  return x[name];*/
};
