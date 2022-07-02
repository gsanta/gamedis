
#include "./Shader.h";

Shader::Shader(const GLchar* shaderSource, GLenum type): shaderSource(shaderSource) {
  GLuint shader = glCreateShader(type);

  GLchar const* files[] = { shaderSource };
  GLint lengths[] = { sizeof(shaderSource) };

  glShaderSource(shader, 1, files, lengths);
  glCompileShader(shader);

  m_shader = shader;
}
