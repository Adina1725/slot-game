import * as PIXI from 'pixi.js';
import { SlotMachine } from './SlotMachine';

jest.mock('../utils/sound', () => ({
  sound: { play: jest.fn() }
}));

jest.mock('../utils/AssetLoader', () => ({
  AssetLoader: {
    getTexture: jest.fn().mockReturnValue({}),
    getSpine: jest.fn().mockReturnValue({ spineData: {} }),
  }
}));

jest.mock('./Reel', () => {
  return {
    Reel: jest.fn().mockImplementation(() => ({
      container: new PIXI.Container(),
      update: jest.fn(),
      startSpin: jest.fn(),
      stopSpin: jest.fn()
    }))
  };
});

describe('SlotMachine', () => {
  let app: PIXI.Application;
  let slotMachine: SlotMachine;

  beforeEach(() => {
    app = new PIXI.Application({ width: 800, height: 600 });
    slotMachine = new SlotMachine(app);
  });

  test('should create SlotMachine instance', () => {
    expect(slotMachine).toBeDefined();
    expect(slotMachine.container).toBeInstanceOf(PIXI.Container);
  });

  test('should start spinning and set isSpinning flag', () => {
    slotMachine.spin();
    expect(slotMachine['isSpinning']).toBe(true);
  });

  test('should not start spinning if already spinning', () => {
    slotMachine['isSpinning'] = true;
    slotMachine.spin();
    // isSpinning остается true и startSpin не вызывается у катушек
    expect(slotMachine['isSpinning']).toBe(true);
  });

  test('should update reels', () => {
    const spyUpdate = jest.spyOn(slotMachine['reels'][0], 'update');
    slotMachine.update(1);
    expect(spyUpdate).toHaveBeenCalled();
  });
});
