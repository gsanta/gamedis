CC=emcc
SOURCES=src/main.cpp
LDFLAGS=-O2 --llvm-opts 2
CFLAGS=-std=c++11  -s USE_SDL=2 -s -IC:\apps\opengl\include -O3
EMCC_DEBUG=1

# all: $(SOURCES) $(OUTPUT)

app_wasm.js: $(SOURCES) 
	$(CC) $^ $(CFLAGS) -o build/$@ 

clean:
	rm index.js
