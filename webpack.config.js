const path = require('path');
const PugPlugin = require('pug-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        "background": './src/background.ts',
        "options": './src/options.ts',
        "content": './src/content.ts'
    },
    output: {
        path: path.resolve(__dirname, './app'),
        filename: `./[name].js`
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts', '.js'
        ]
    },
    plugins: [
        new PugPlugin({
            entry: {
                options: './src/options.pug'
            }
        }),
        new CopyWebpackPlugin({
            patterns: [
                { context: 'src', from: 'img', to: path.resolve(__dirname, 'app/img') },
                { context: 'src', from: 'manifest.json', to: path.resolve(__dirname, 'app') }
            ]
        })
    ]
};