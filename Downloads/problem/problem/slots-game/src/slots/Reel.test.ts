import { Reel } from '../slots/Reel';
import * as PIXI from 'pixi.js';

test('Reel initializes correct number of symbols', () => {
    const reel = new Reel(5, 100);
    expect(reel['symbols'].length).toBe(5);
});
