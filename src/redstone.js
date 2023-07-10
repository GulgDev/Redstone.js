import {World} from "./world/world.js"; 

export class Redstone {
  #canvas;
  #tickInterval;
  #world;
  
  constructor(canvas) {
    this.#canvas = canvas;
    this.#world = World();
  }

  setBlock(x, y, z, block) {
    for (let worldBlock in this.#world.blocks)
      if (worldBlock.x == x && worldBlock.y == y && worldBlock.z == z) {
        this.#world.blocks.remove(world_block);
        break;
      }
    this.#world.blocks.push(block);
  }

  getBlock(x, y, z) {
    for (let worldBlock in this.#world.blocks)
      if (worldBlock.x == x && worldBlock.y == y && worldBlock.z == z)
        return worldBlock;
  }

  start() {
    this.#tickInterval = setInterval(this.#tick, 50);
  }

  stop() {
    clearInterval(this.#tickInterval);
  }

  #tick() {
    this.world.tick();
  }
}
