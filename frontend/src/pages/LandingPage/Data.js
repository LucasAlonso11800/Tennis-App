import Djokovic from '../../assets/miniatures/Djokovic.jpg';
import Nadal from '../../assets/miniatures/Nadal.jpg';
import Federer from '../../assets/miniatures/Federer.jpg';
import Sharapova from '../../assets/miniatures/Sharapova.jpg';
import Delpo from '../../assets/miniatures/Delpo.jpg';
import Ivanovic from '../../assets/miniatures/Ivanovic.jpg';

export const sectionOne = {
    lightbg: true,
    imgStart: true,
    heading: `Updated to ${new Date().toISOString().substring(0, 10)}`,
    title: 'Rankings ATP & WTA',
    text: 'Check the current ATP and WTA rankings, filter players by country and ranking',
    link: '/ranking',
    linkText: 'Rankings',
    img: Djokovic,
    alt: 'Djokovic'
};

export const sectionTwo = {
    lightbg: false,
    imgStart: false,
    heading: `Updated to ${new Date().toISOString().substring(0, 10)}`,
    title: 'Race to London',
    text: "Check the current season's ranking and see if your favourite player is getting into the World Tour Finals",
    link: '/race-to-london',
    linkText: 'Race to London',
    img: Nadal,
    alt: 'Nadal'
};

export const sectionThree = {
    lightbg: true,
    imgStart: true,
    heading: `Updated to ${new Date().toISOString().substring(0, 10)}`,
    title: 'Current Tournaments',
    text: "Check the matches being played today in both ATP and WTA circuits",
    link: '/current-tournaments',
    linkText: 'Current Tournaments',
    img: Federer,
    alt: 'Federer'
};

export const sectionFour = {
    lightbg: false,
    imgStart: false,
    heading: `Updated to ${new Date().toISOString().substring(0, 10)}`,
    title: 'Season Calendar',
    text: "Check the current season calendar and the dates and cities each tournament is held",
    link: '/season',
    linkText: 'Season Calendar',
    img: Sharapova,
    alt: 'Sharapova'
};

export const sectionFive = {
    lightbg: true,
    imgStart: true,
    heading: `Updated to ${new Date().toISOString().substring(0, 10)}`,
    title: 'News',
    text: "Look for the most recent news about Tennis, tournaments and your favourite players",
    link: '/news',
    linkText: 'News',
    img: Delpo,
    alt: 'Delpo'
};

export const sectionSix = {
    lightbg: false,
    imgStart: false,
    heading: `Updated to ${new Date().toISOString().substring(0, 10)}`,
    title: 'Your Articles',
    text: "Create your account and keep track of your favourite articles",
    link: '/user-articles',
    linkText: 'Your articles',
    img: Ivanovic,
    alt: 'Ivanovic'
};