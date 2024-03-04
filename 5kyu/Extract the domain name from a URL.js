function domainName(url) {
    return url.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/|www.|http:\/\/)?([\w\-]+)?/)[2];
}

