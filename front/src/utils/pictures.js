export default {
    getPics: (str) => {
        const pattern = /!\[(.*?)\]\((.*?)\)/mg;
        const result = [];
        let matcher;

        while ((matcher = pattern.exec(str)) !== null) {
            result.push({
                alt: matcher[1],
                url: matcher[2]
            });
        }

        console.log(result); // [{ alt: 'a', url: 'b' }, { alt: 'c', url: 'd' }]
        return result;
    },
    getPic: (str) => {
        return str.match(/!\[(.*?)\]\((.*?)\)/); // ["![a](b)", "a", "b"]
    }
}