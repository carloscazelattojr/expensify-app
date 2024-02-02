const images = {
    1: require('../asset/1.png'),
    2: require('../asset/2.png'),
    3: require('../asset/3.png'),
    4: require('../asset/4.png'),
    5: require('../asset/5.png'),
    6: require('../asset/6.png'),
    7: require('../asset/7.png'),
    8: require('../asset/8.png'),
    9: require('../asset/9.png'),
    10: require('../asset/10.png'),
    11: require('../asset/11.png'),
    12: require('../asset/12.png'),
}

export default function randomImage() {
    let min = 1;
    let max = 12;
    let random = Math.floor(Math.random() * (max - min + 1)) + min;
    return images[random];
}