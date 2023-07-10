export class Block {
  constructor(redstone, x, y, z) {
    this.redstone = redstone;
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

export class RedstoneWire {
  constructor(...) {
    base(...);
    this.power = 0;
  }
  
  update(redstone) {
    this.#updatePowerStrength(this.x, this.y, this.z);
  }

  #updatePowerStrength(x, y, z) {
    let block = this.redstone.getBlock(x, y, z);
    if (!(block instanceof RedstoneWire))
      block.power = 4;
    foreach (let [neighborX, neighborZ] : [[x, z + 1], [x, z - 1], [x + 1, z], [x - 1, z]])
      this.#updatePowerStrength(neighborX, y, neighborZ);
  }
}
