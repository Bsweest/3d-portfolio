import fragmentShader from "../../templates/shaders/floor/fragment.glsl";
import vertexShader from "../../templates/shaders/floor/vertex.glsl";
import {
  Color,
  DataTexture,
  LinearFilter,
  RGBAFormat,
  ShaderMaterial,
} from "three";

export default class FloorMaterial extends ShaderMaterial {
  constructor() {
    super();

    this.topLeft = "#1a2c80";
    this.topRight = "#282157";
    this.bottomRight = "#4a478a";
    this.bottomLeft = "#da8a8b";

    this.uniforms = {
      tBackground: { value: null },
    };
    this.fragmentShader = fragmentShader;
    this.vertexShader = vertexShader;

    this.updateUniforms = () => {
      const topLeft = new Color(this.topLeft).convertLinearToSRGB();
      const topRight = new Color(this.topRight).convertLinearToSRGB();
      const bottomRight = new Color(this.bottomRight).convertLinearToSRGB();
      const bottomLeft = new Color(this.bottomLeft).convertLinearToSRGB();

      const data = new Uint8Array([
        Math.round(bottomLeft.r * 255),
        Math.round(bottomLeft.g * 255),
        Math.round(bottomLeft.b * 255),
        255,
        Math.round(bottomRight.r * 255),
        Math.round(bottomRight.g * 255),
        Math.round(bottomRight.b * 255),
        255,
        Math.round(topLeft.r * 255),
        Math.round(topLeft.g * 255),
        Math.round(topLeft.b * 255),
        255,
        Math.round(topRight.r * 255),
        Math.round(topRight.g * 255),
        Math.round(topRight.b * 255),
        255,
      ]);

      const backgroundTexture = new DataTexture(data, 2, 2, RGBAFormat);
      backgroundTexture.magFilter = LinearFilter;
      backgroundTexture.needsUpdate = true;

      this.uniforms.tBackground.value = backgroundTexture;
    };

    this.updateUniforms();
  }
}
