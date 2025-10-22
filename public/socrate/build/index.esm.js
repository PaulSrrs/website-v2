import { A as ActiveRouter } from './active-router-3d2e6b61.js';
import './match-path-760e1797.js';
import './index-6cbc93cc.js';
import './location-utils-fea12957.js';

function injectHistory(Component) {
    ActiveRouter.injectProps(Component, ['history', 'location']);
}
