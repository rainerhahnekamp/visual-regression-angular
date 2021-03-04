// const initStoryshots = require("@storybook/addon-storyshots");
// const storyshots = require("@storybook/addon-storyshots");
// for (let prop of storyshots) {
//   console.log(prop);
// }
import initStoryshots from '@storybook/addon-storyshots';
// const {imageSnapshot} = require("@storybook/addon-storyshots-puppeteer");
import {imageSnapshot} from '@storybook/addon-storyshots-puppeteer';

initStoryshots({suite: 'Image storyshots', test: imageSnapshot()});
