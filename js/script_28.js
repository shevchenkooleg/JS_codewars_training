var uniqueInOrder=function(iterable){
    let initialData;

    if (Array.isArray(iterable)) {
        initialData = [...iterable];
    } else {
        initialData = iterable.split('');
    }


    let res = [];

    initialData.forEach(e => {

        if (res[(res.length) - 1] !== e) {
            res.push(e);
        }
    });
    return res;
};