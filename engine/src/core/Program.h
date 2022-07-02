#ifndef PROGRAM_H
#define PROGRAM_H

#ifdef __APPLE__
  #include <GLUT/glut.h>
#else
  #include <GL/glut.h>
#endif

#include "./Shader.h";

class Program {
public:
  Program();
  ~Program();

  void initVertexShader(const GLchar* shaderSource);
  void initFragmentShader(const GLchar* shaderSource);
private:
  Shader* vertexShader;
  Shader* fragmentShader;
};

#endif
