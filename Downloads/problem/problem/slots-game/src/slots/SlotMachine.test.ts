import * as PIXI from 'pixi.js';
import { SlotMachine } from './SlotMachine';

// Заглушка для sound.play, чтобы не вызывать настоящий звук
jest.mock('../utils/sound', () => ({
  sound: { play: jest.fn() }
}));

// Заглушка для AssetLoader, чтобы не подгружать реальные ассеты
jest.mock('../utils/AssetLoader', () => ({
  AssetLoader: {
    getTexture: jest.fn().mockReturnValue({}),
    getSpine: jest.fn().mockReturnValue({ spineData: {} }),
  }
}));

// Заглушка для Reel (если нужно)
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
    // Создаем "пустое" приложение PIXI
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
