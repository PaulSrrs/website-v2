import { A as ActiveRouter } from './active-router-ea67e57d.js';
import './match-path-760e1797.js';
import './index-d056c7a9.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
