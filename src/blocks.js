export class Block {
  constructor(redstone, x, y, z) {
    this.redstone = redstone;
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

export class RedstoneWire {
  update(redstone) {
    redstone.updateBlock(this.x, this.y, this.z + 1);
    redstone.updateBlock(this.x, this.y, this.z - 1);
    redstone.updateBlock(this.x + 1, this.y, this.z);
    redstone.updateBlock(this.x - 1, this.y, this.z);
  }
}
