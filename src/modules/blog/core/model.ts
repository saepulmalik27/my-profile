export type TMediumResponse = {
    status : string,
    feed : TMediumFeed,
    items : Array<TMediumPost>
}

export type TMediumFeed = {
    url : string,
    title : string,
    link : string,
    author : string,
    description : string,
    image : string,
}

export type TMediumPost = {
    title : string,
    pubDate : string,
    link : string,
    guid : string,
    author : string,
    thumbnail : string,
    description : string,
    content : string,
    enclosure : {
        link : string,
        type : string,
        length : string,
    },
    categories : Array<string>
}