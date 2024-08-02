const path = require('path');

module.exports = {
    mode: 'development', // Set this to 'production' for production builds
    entry: './src/index.js', // Adjust if your entry point is different
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output file name
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Apply the following rules to .js files
                exclude: /node_modules/, // Exclude node_modules
                use: {
                    loader: 'babel-loader', // Transpile JavaScript files
                    options: {
                        presets: ['@babel/preset-react'], // Use React preset
                    },
                },
            },
            {
                test: /\.css$/, // Apply the following rules to .css files
                use: ['style-loader', 'css-loader'], // Load CSS files
            },
        ],
    },
    devServer: {
        static: path.resolve(__dirname, 'dist'), // Serve content from the dist directory
        port: 8081, // Port to run the dev server on
    },
};
