import Australia from '../../assets/miniatures/Australian-Open.jpg';
import RolandGarros from '../../assets/miniatures/Roland-garros.jpg';
import Wimbledon from '../../assets/miniatures/Wimbledon.jpg';
import UsOpen from '../../assets/miniatures/Us-Open.jpg';
import Davis from '../../assets/miniatures/Davis.jpg';
import GoldMedal from '../../assets/miniatures/Gold-medal.jpg';

export const sectionOne = {
    lightBg: true,
    imgStart: true,
    heading: `Updated to ${new Date().toISOString().substring(0, 10)}`,
    title: 'Rankings ATP & WTA',
    text: 'Check the current ATP and WTA rankings, filter players by country and ranking',
    link: '/ranking',
    linkText: 'Rankings',
    img: Australia,
    alt: 'Australian Open'
};

export const sectionTwo = {
    lightBg: false,
    imgStart: false,
    heading: `Updated to ${new Date().toISOString().substring(0, 10)}`,
    title: 'Race to London',
    text: "Check the current season's ranking and see if your favourite player is getting into the World Tour Finals",
    link: '/race-to-london',
    linkText: 'Race to London',
    img: RolandGarros,
    alt: 'Roland Garros'
};

export const sectionThree = {
    lightBg: true,
    imgStart: true,
    heading: `Updated to ${new Date().toISOString().substring(0, 10)}`,
    title: 'Current Tournaments',
    text: "Check the matches being played today in both ATP and WTA circuits",
    link: '/current-tournaments',
    linkText: 'Current Tournaments',
    img: Wimbledon,
    alt: 'Wimbledon'
};

export const sectionFour = {
    lightBg: false,
    imgStart: false,
    heading: `Updated to ${new Date().toISOString().substring(0, 10)}`,
    title: 'Season Calendar',
    text: "Check the current season calendar and the dates and cities each tournament is held",
    link: '/season',
    linkText: 'Season Calendar',
    img: UsOpen,
    alt: 'Us Open'
};

export const sectionFive = {
    lightBg: true,
    imgStart: true,
    heading: `Updated to ${new Date().toISOString().substring(0, 10)}`,
    title: 'News',
    text: "Look for the most recent news about Tennis, tournaments and your favourite players",
    link: '/news',
    linkText: 'News',
    img: Davis,
    alt: 'Davis'
};

export const sectionSix = {
    lightBg: false,
    imgStart: false,
    heading: `Updated to ${new Date().toISOString().substring(0, 10)}`,
    title: 'Your Articles',
    text: "Create your account and keep track of your favourite articles",
    link: '/user-articles',
    linkText: 'Your articles',
    img: GoldMedal,
    alt: 'Gold Medal'
};