import * as PIXI from 'pixi.js';
const SYMBOL_TEXTURES = [
    'symbol1.png',
    'symbol2.png',
    'symbol3.png',
    'symbol4.png',
    'symbol5.png',
];

const SPIN_SPEED = 50; // Pixels per frame
const SLOWDOWN_RATE = 0.95; // Rate at which the reel slows down

export class Reel {
    public container: PIXI.Container;
    private symbols: PIXI.Sprite[];
    private symbolSize: number;
    private symbolCount: number;
    private speed: number = 0;
    private isSpinning: boolean = false;

    constructor(symbolCount: number, symbolSize: number) {
        this.container = new PIXI.Container();
        this.symbols = [];
        this.symbolSize = symbolSize;
        this.symbolCount = symbolCount;

        this.createSymbols();
    }

private createSymbols(): void {
    // Create symbols for the reel, arranged horizontally
    for (let i = 0; i < this.symbolCount; i++) {
        const symbol = this.createRandomSymbol();
        symbol.x = i * this.symbolSize; 
        symbol.y = 0;
        this.container.addChild(symbol);
        this.symbols.push(symbol);
    }
}

private createRandomSymbol(): PIXI.Sprite {
    // Get a random symbol texture
    const randomIndex = Math.floor(Math.random() * SYMBOL_TEXTURES.length);
    const textureName = SYMBOL_TEXTURES[randomIndex];
    const texture = PIXI.Texture.from(textureName);
    const sprite = new PIXI.Sprite(texture);

    // Create a sprite with the texture
    sprite.width = this.symbolSize;
    sprite.height = this.symbolSize;

    return sprite;
}

   public update(delta: number): void {
    if (!this.isSpinning && this.speed === 0) return;

    // Move symbols horizontally
    for (const symbol of this.symbols) {
        symbol.x -= this.speed * delta;
    }

    // Recycle symbols that move off-screen (to the left)
    for (let i = 0; i < this.symbols.length; i++) {
        const symbol = this.symbols[i];
        if (symbol.x + this.symbolSize < 0) {
            // Move it to the right of the last symbol
            const maxX = Math.max(...this.symbols.map(s => s.x));
            symbol.x = maxX + this.symbolSize;

            // Optionally change to a new symbol texture
            const newTexture = PIXI.Texture.from(
                SYMBOL_TEXTURES[Math.floor(Math.random() * SYMBOL_TEXTURES.length)]
            );
            symbol.texture = newTexture;
        }
    }

    // Slow down if stopping
    if (!this.isSpinning && this.speed > 0) {
        this.speed *= SLOWDOWN_RATE;
        if (this.speed < 0.5) {
            this.speed = 0;
            this.snapToGrid();
        }
    }
}

    private snapToGrid(): void {
        // TODO: Snap symbols to horizontal grid positions
    for (const symbol of this.symbols) {
        const snappedX = Math.round(symbol.x / this.symbolSize) * this.symbolSize;
        symbol.x = snappedX;
    }


    }

    public startSpin(): void {
        this.isSpinning = true;
        this.speed = SPIN_SPEED;
    }

    public stopSpin(): void {
        this.isSpinning = false;
        // The reel will gradually slow down in the update method
    }
} 
