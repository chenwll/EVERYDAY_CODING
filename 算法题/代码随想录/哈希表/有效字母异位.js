let  s = "anagram", t = "nagaram"
const isAnagram = function (s, t) {
    const cmp = (a, b) => {
        console.log(a,b, a > b)
        return a > b? 1:-1
    };
    console.log(t.split('').sort(cmp).join(''))
    return s.split('').sort().join('') === t.split('').sort().join('');
};

// console.log(isAnagram(s,t))



