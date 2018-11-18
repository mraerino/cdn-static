import merge from 'webpack-merge';
import nodeExternals from 'webpack-node-externals';

const base = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    devtool: "source-map",
    optimization: {
        minimize: false
    },
    performance: {
        hints: false
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
        ],
    },
};

export default [
    // cli entrypoint
    merge(base, {
        entry: './cli/index.ts',
        output: {
            filename: "cli.js",
            path: __dirname + "/dist"
        },
        target: 'node',
        externals: [nodeExternals()],
    }),
    // worker entrypoint
    merge(base, {
        entry: './worker/index.ts',
        output: {
            filename: "worker.js",
            path: __dirname + "/dist"
        },
        target: 'webworker',
    }),
]
