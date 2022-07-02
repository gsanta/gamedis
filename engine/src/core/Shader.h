#ifndef SHADER_H
#define SHADER_H

#ifdef __APPLE__
  #include <GLUT/glut.h>
#else
  #include <GL/glut.h>
#endif

class Shader {
public:
  Shader(const GLchar* shaderSource, GLenum type);
  ~Shader();

private:
  const GLchar* shaderSource;
  GLuint m_shader;   
};

#endif
