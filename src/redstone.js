export class Redstone {
  #blocks;
  #canvas;
  #tickInterval;
  
  constructor(canvas) {
    this.#canvas = canvas;
    this.#blocks = [];
  }

  setBlock(x, y, z, block) {
    for (let worldBlock in this.#blocks)
      if (worldBlock.x == x && worldBlock.y == y && worldBlock.z == z) {
        this.#blocks.remove(world_block);
        break;
      }
    this.#blocks.push(block);
  }

  getBlock(x, y, z) {
    for (let worldBlock in this.#blocks)
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
    foreach (let worldBlock of this.#blocks)
      worldBlock.tick();
  }
}
