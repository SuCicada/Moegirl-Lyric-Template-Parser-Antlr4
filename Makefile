gen-antlr4:
	#npx rimraf gen/*
	cd antlr4 && \
	antlr4 -v 4.13.2 \
		-Dlanguage=TypeScript -visitor -o ../gen Moegirl.g4


clean:
	ts-clean-built --built

build:
	yarn build

watch:
	npx webpack watch
