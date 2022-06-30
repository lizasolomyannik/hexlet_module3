const make = (url) => new URL(url);

const url = make('https://hexlet.io/community?q=low');

const setQueryParam = (data, key, value) => {
    let params = new URLSearchParams(data.search);
    params.set(key, value);
    data.search = params;
};

const getQueryParam = (data, paramName, def = null) => {
    let params = new URLSearchParams(data.search);
    let res = params.get(paramName);
    if (res === null) {
        return def;
    }
    return res;
};

const toString = (url) => String(url.href);

setQueryParam(url, 'page', 5);

// console.log(toString(url));

console.log(getQueryParam(url, 'low', 'user'));
