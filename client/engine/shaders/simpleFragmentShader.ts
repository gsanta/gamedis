const fragmentShaderSource = `#version 300 es

// fragment shaders don't have a default precision so we need
// to pick one. highp is a good default. It means "high precision"
precision highp float;
uniform vec4 u_color;
in vec4 v_color;

// we need to declare an output for the fragment shader
out vec4 outColor;

void main() {
  // Just set the output to a constant reddish-purple
  // outColor = vec4(1, 0, 0.5, 1);
  // outColor = u_color;
  outColor = v_color;
}
`;

export default fragmentShaderSource;
