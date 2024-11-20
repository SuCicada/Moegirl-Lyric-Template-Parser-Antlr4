const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [
                    /node_modules/,
                    /test/,
                ]
            },
            {
                test: /\.(txt|html|css)$/,
                use: 'raw-loader',
            },
            // {
            //     test: /\.ts$/,  // 处理 TypeScript 文件
            //     use: 'ts-loader',
            //     exclude: path.resolve(__dirname, 'test'),  // 排除 test 目录
            // },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            "@/gen": path.resolve(__dirname, 'gen'),
            "@": path.resolve(__dirname, 'src'),
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'MoegirlLyric',  // 设置导出的库名称
        // libraryTarget: 'var',  // 使用全局变量方式导出
        libraryTarget: 'umd',  // 通用模块定义
        globalObject: 'this',
    },
};