import webpack from 'webpack'
import path from 'path'
import BabiliPlugin from 'babili-webpack-plugin'

// Conditionally return a list of plugins to use based on the current environment.
// Repeat this pattern for any other config key (ie: loaders, etc).
function getPlugins(env) {
    let plugins = []    
    plugins.push(new webpack.LoaderOptionsPlugin({ debug: true }))

    return plugins
}

// define Webpack configuration object to be exported
export default (env = {}) => {

    return {
        entry: {
            app: './app.js'
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].bundle.js',
            publicPath: '/build/'
        },
        module: {
            rules: [
                { test: /\.js?$/, exclude: /node_modules/, use: [
                    {loader: 'babel-loader', options: { babelrc: false, presets: [[ 'es2015', { modules: false }]]}}] },
                { test: /\.html$/, exclude: /node_modules/, use: [
                    {loader: 'ngtemplate-loader', options: { relativeTo: path.resolve(__dirname, './') }}, 
                    {loader: 'html-loader'}] },
                { test: /\.css$/, use: [
                    {loader: 'style-loader'}, 
                    {loader: 'css-loader'}] },
                { test: /\.html$/, exclude: /node_modules/, use: [
                    {loader: 'ngtemplate-loader', options: { relativeTo: path.resolve(__dirname, './') }}, 
                    {loader: 'html-loader'}] }
            ]
        },
        plugins: getPlugins(env),
        resolve: { // add alias for application code directory        
            alias: {
                nm: path.resolve(__dirname, 'node_modules')
            },
            extensions: [ '.js' ]
        }
    }
}