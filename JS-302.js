let istiZnakovi = (string) => {
    let cur_count = 1;
    let  count = 0;
    for (let i = 0; i <= string.length; i++) {
        if (i < (string.length) && string.charAt(i) == string.charAt(i+1)) {
        cur_count++;
        }
        else {
            if (cur_count > count) {
                count = cur_count;
            }
            cur_count = 1;
        }
    }
    return count;
}

console.log(istiZnakovi("baaaccd"));
console.log(istiZnakovi("ba2dll"));