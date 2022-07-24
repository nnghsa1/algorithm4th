// const path = require('path');
// const rules = require('./.eslint.rules');
const rules = require('./.eslint.rules.new');

const baseRules = Object.assign(rules.base, rules.import, rules.react, rules.reactHooks);
const basePlugins = ['react', 'react-hooks', 'import', 'prettier'];
const extensions = ['.js', '.jsx'];

module.exports = {
    root: true,
    settings: {
        react: {
            version: 'detect',
        },
        'import/extensions': extensions,
        'import/external-module-folders': ['node_modules', 'node_modules/@types'],
        'import/resolver': {
            node: {
                extensions: extensions,
            },
            typescript: {
                // 从 <roo/>@types 读取类型定义
                alwaysTryTypes: true,
            },
        },
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    // 环境定义了预定义的全局变量。
    env: {
        // 环境定义了预定义的全局变量。更多在官网查看
        browser: true,
        node: true,
        commonjs: true,
        amd: true,
        es6: true,
        mocha: true,
    },
    // JavaScript 语言选项
    parserOptions: {
        // ECMAScript 版本
        ecmaVersion: 6,
        sourceType: 'module',

        /*
         * 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
         * 想使用的额外的语言特性:
         */
        ecmaFeatures: {
            // 允许在全局作用域下使用 return 语句
            globalReturn: true,
            // impliedStrict
            impliedStrict: true,
            // 启用 JSX
            jsx: true,
            modules: true,
            legacyDecorators: true,
        },
        // project: path.join(__dirname, './tsconfig.json')
    },
    globals: {
        jest: true,
        expect: true,
        _i18n: true,
    },
    overrides: [
        {
            files: ['**/*.{js,jsx}'],
            parser: 'babel-eslint',
            plugins: [...basePlugins],
            rules: { ...baseRules },
        },
        {
            files: ['**/*.{ts,tsx}'],
            parser: '@typescript-eslint/parser',
            settings: {
                'import/extensions': ['.ts', '.tsx'],
                'import/parsers': {
                    '@typescript-eslint/parser': ['.ts', '.tsx'],
                },
                'import/resolver': {
                    node: {
                        extensions: ['.ts', '.tsx', ...extensions],
                    },
                },
            },
            plugins: ['@typescript-eslint', ...basePlugins],
            rules: { ...baseRules, ...rules.typescript },
        },
    ],
};
