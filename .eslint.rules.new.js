/**
 * 新规则，待推行
 */
module.exports = {
    base: {
        // 禁止条件表达式中出现赋值操作符
        'no-cond-assign': 2,
        // 禁用 console
        'no-console': 0,
        // 禁止在条件中使用常量表达式
        // if (false) {
        // doSomethingUnfinished();
        // }
        'no-constant-condition': [
            2,
            {
                checkLoops: false,
            },
        ],
        // 禁止在正则表达式中使用控制字符 ：new RegExp("\x1f")
        'no-control-regex': 2,
        // 数组和对象键值对最后一个逗号
        'comma-dangle': [2, {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
        }],
        // 禁用 debugger
        'no-debugger': 2,
        // 禁止 function 定义中出现重名参数
        'no-dupe-args': 2,
        // 禁止对象字面量中出现重复的 key
        'no-dupe-keys': 2,
        // 禁止重复的 case 标签
        'no-duplicate-case': 2,
        // 禁止空语句块
        'no-empty': [
            1,
            {
                allowEmptyCatch: true,
            },
        ],
        // 禁止将 async 函数做为 new Promise 的回调函数,出现这种情况时，一般不需要使用 new Promise 实现异步了
        'no-async-promise-executor': 0,
        // 禁止在正则表达式中使用空字符集 (/^abc[]/)
        'no-empty-character-class': 2,
        // 禁止对 catch 子句的参数重新赋值
        'no-ex-assign': 2,
        // 禁止不必要的布尔转换
        'no-extra-boolean-cast': 2,
        // 禁止不必要的括号 //(a * b) + c;//报错
        'no-extra-parens': 0,
        // 禁止不必要的分号
        'no-extra-semi': 2,
        // 禁止对 function 声明重新赋值
        'no-func-assign': 2,
        // 禁止在嵌套的块中出现 function 或 var 声明
        'no-inner-declarations': [2, 'functions'],
        // 禁止 RegExp 构造函数中无效的正则表达式字符串
        'no-invalid-regexp': 2,
        // 禁止在字符串和注释之外不规则的空白
        'no-irregular-whitespace': 2,
        // 禁止在 in 表达式中出现否定的左操作数
        'no-negated-in-lhs': 2,
        // 禁止把全局对象 (Math 和 JSON) 作为函数调用 错误：var math = Math();
        'no-obj-calls': 2,
        // 禁止直接使用 Object.prototypes 的内置属性
        'no-prototype-builtins': 0,
        // 禁止正则表达式字面量中出现多个空格
        'no-regex-spaces': 2,
        // 禁用稀疏数组
        'no-sparse-arrays': 2,
        // 禁止出现令人困惑的多行表达式
        'no-unexpected-multiline': 2,
        // 禁止在return、throw、continue 和 break语句之后出现不可达代码
        'no-unreachable': 2,
        // 要求使用 isNaN() 检查 NaN
        'use-isnan': 2,
        // 强制使用有效的 JSDoc 注释
        'valid-jsdoc': 0,
        // 强制 typeof 表达式与有效的字符串进行比较
        // typeof foo === "undefined" 错误
        'valid-typeof': 2,
        // 定义对象的set存取器属性时，强制定义get
        'accessor-pairs': 2,
        // 强制数组方法的回调函数中有 return 语句
        'array-callback-return': 0,
        // 强制把变量的使用限制在其定义的作用域范围内
        'block-scoped-var': 2,
        // 限制圈复杂度，也就是类似if else能连续接多少个
        complexity: [0, 30],
        // 要求 return 语句要么总是指定返回的值，要么不指定
        'consistent-return': 0,
        // 强制所有控制语句使用一致的括号风格
        curly: [2, 'all'],
        // switch 语句强制 default 分支，也可添加 // no default 注释取消此次警告
        'default-case': 2,
        // 强制object.key 中 . 的位置，参数:
        'dot-location': [2, 'property'],
        // 强制使用.号取属性
        'dot-notation': [
            0,
            {
                allowKeywords: false,
            },
        ],
        // 使用 === 替代 == allow-null允许null和undefined==
        eqeqeq: [0, 'allow-null'],
        // 要求 for-in 循环中有一个 if 语句
        'guard-for-in': 0,
        // 禁用 tab
        'no-tabs': 2,
        // 禁用 alert、confirm 和 prompt
        'no-alert': 1,
        // 禁用 arguments.caller 或 arguments.callee
        'no-caller': 2,
        // 不允许在 case 子句中使用词法声明
        'no-case-declarations': 2,
        // 禁止除法操作符显式的出现在正则表达式开始的位置
        'no-div-regex': 2,
        // 禁止 if 语句中有 return 之后有 else
        'no-else-return': 2,
        // 禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题。
        'no-empty-function': 0,
        // 禁止使用空解构模式no-empty-pattern
        'no-empty-pattern': 2,
        // 禁止在没有类型检查操作符的情况下与 null 进行比较
        'no-eq-null': 0,
        // 禁用 eval()
        'no-eval': 2,
        // 禁止扩展原生类型
        'no-extend-native': 2,
        // 禁止不必要的 .bind() 调用
        'no-extra-bind': 2,
        // 禁用不必要的标签
        'no-extra-label': 1,
        // 禁止 case 语句落空
        'no-fallthrough': 2,
        // 禁止数字字面量中使用前导和末尾小数点
        'no-floating-decimal': 2,
        // 禁止使用短符号进行类型转换(!!fOO)
        'no-implicit-coercion': 0,
        // 禁止在全局范围内使用 var 和命名的 function 声明
        'no-implicit-globals': 2,
        // 禁止使用类似 eval() 的方法
        'no-implied-eval': 2,
        // 禁止 this 关键字出现在类和类对象之外
        'no-invalid-this': 0,
        // 禁用 __iterator__ 属性
        'no-iterator': 2,
        // 禁用标签语句
        'no-labels': 2,
        // 禁用不必要的嵌套块
        'no-lone-blocks': 2,
        // 禁止在循环中出现 function 声明和表达式
        'no-loop-func': 2,
        // 禁用魔术数字(3.14什么的用常量代替)
        'no-magic-numbers': [0],
        // 禁止使用多个空格
        'no-multi-spaces': 2,
        // 禁止使用多行字符串，在 JavaScript 中，可以在新行之前使用斜线创建多行字符串
        'no-multi-str': 2,
        // 禁止对原生对象赋值
        'no-native-reassign': 2,
        // 禁止在非赋值或条件语句中使用 new 操作符
        'no-new': 2,
        // 禁止对 Function 对象使用 new 操作符
        'no-new-func': 0,
        // 禁止对 String，Number 和 Boolean 使用 new 操作符
        'no-new-wrappers': 2,
        // 禁用八进制字面量
        'no-octal': 2,
        // 禁止在字符串中使用八进制转义序列
        'no-octal-escape': 2,
        // 不允许对 function 的参数进行重新赋值
        'no-param-reassign': 2,
        // 禁用 __proto__ 属性
        'no-proto': 2,
        // 禁止使用 var 多次声明同一变量
        'no-redeclare': 2,
        // 禁用指定的通过 require 加载的模块
        'no-return-assign': 0,
        // 禁止使用 javascript: url
        'no-script-url': 0,
        // 禁止自我赋值
        'no-self-assign': 2,
        // 禁止自身比较
        'no-self-compare': 2,
        // 禁用逗号操作符
        'no-sequences': 2,
        // 禁止抛出非异常字面量
        'no-throw-literal': 2,
        // 禁用一成不变的循环条件
        'no-unmodified-loop-condition': 2,
        // 禁止出现未使用过的表达式
        'no-unused-expressions': 0,
        // 禁用未使用过的标签
        'no-unused-labels': 2,
        // 禁止不必要的 .call() 和 .apply()
        'no-useless-call': 2,
        // 禁止不必要的字符串字面量或模板字面量的连接
        'no-useless-concat': 0,
        // 禁用不必要的转义字符
        'no-useless-escape': 0,
        // 禁用 void 操作符
        'no-void': 2,
        // 禁止在注释中使用特定的警告术语
        'no-warning-comments': 0,
        // 禁用 with 语句
        'no-with': 2,
        // 强制在parseInt()使用基数参数
        radix: 0,
        // 要求所有的 var 声明出现在它们所在的作用域顶部
        'vars-on-top': 0,
        // 要求 IIFE 使用括号括起来
        'wrap-iife': [2, 'any'],
        // 要求或禁止 “Yoda” 条件
        yoda: [2, 'never'],
        // 要求或禁止使用严格模式指令
        strict: 0,
        // 要求或禁止 var 声明中的初始化(初值)
        'init-declarations': 0,
        // 不允许 catch 子句的参数与外层作用域中的变量同名
        'no-catch-shadow': 0,
        // 禁止删除变量
        'no-delete-var': 1,
        // 不允许标签与变量同名
        'no-label-var': 2,
        // 禁用特定的全局变量
        'no-restricted-globals': 0,
        // 禁止 var 声明 与外层作用域的变量同名
        'no-shadow': 2,
        // 禁止覆盖受限制的标识符
        'no-shadow-restricted-names': 2,
        // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
        'no-undef': 2,
        // 禁止将变量初始化为 undefined
        'no-undef-init': 2,
        // 禁止将 undefined 作为标识符
        'no-undefined': 0,
        // 禁止出现未使用过的变量
        'no-unused-vars': [
            2,
            {
                vars: 'all',
                args: 'none',
                varsIgnorePattern: '^React$',
            },
        ],
        // 不允许在变量定义之前使用它们
        'no-use-before-define': 0,
        // require return statements after callbacks
        'callback-return': 0,
        // 要求 require() 出现在顶层模块作用域中
        'global-require': 0,
        // 禁止混合常规 var 声明和 require 调用
        'no-mixed-requires': 0,
        // 禁止调用 require 时使用 new 操作符
        'no-new-require': 2,
        // 禁止对 __dirname 和 __filename进行字符串连接
        'no-path-concat': 0,
        // 禁用 process.env
        'no-process-env': 0,
        // 禁用 process.exit()
        'no-process-exit': 0,
        // 禁用同步方法
        'no-sync': 0,
        // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
        'array-bracket-spacing': [2, 'never'],
        // 强制使用一致的换行风格
        'linebreak-style': [0, 'unix'],
        // 禁止或强制在单行代码块中使用空格(禁用)
        'block-spacing': [2, 'always'],
        //强制使用一致的缩进 第二个参数为 "tab" 时，会使用tab，
        // if while function 后面的{必须与if在同一行，java风格。
        'brace-style': [
            2,
            '1tbs',
            {
                allowSingleLine: true,
            },
        ],
        // 双峰驼命名格式
        camelcase: 0,
        // 控制逗号前后的空格
        'comma-spacing': [
            2,
            {
                before: false,
                after: true,
            },
        ],
        // 控制逗号在行尾出现还是在行首出现 (默认行尾)
        'comma-style': [2, 'last'],
        // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
        'computed-property-spacing': [2, 'never'],
        // 用于指统一在回调函数中指向this的变量名，箭头函数中的this已经可以指向外层调用者，应该没卵用了
        // e.g [0,"that"] 指定只能 var that = this. that不能指向其他任何值，this也不能赋值给that以外的其他值
        'consistent-this': [2, 'that'],
        // 强制使用命名的 function 表达式
        'func-names': 0,
        // 文件末尾强制换行
        'eol-last': 2,
        // indent: [
        //     2,
        //     {
        //         SwitchCase: 1,
        //     },
        // ],
        // 强制在对象字面量的属性中键和值之间使用一致的间距
        'key-spacing': [
            2,
            {
                beforeColon: false,
                afterColon: true,
            },
        ],
        // 要求在注释周围有空行 ( 要求在块级注释之前有一空行)
        'lines-around-comment': [
            2,
            {
                beforeBlockComment: true,
            },
        ],
        // 强制一致地使用函数声明或函数表达式，方法定义风格，参数：
        'func-style': 0,
        // 强制回调函数最大嵌套深度 5层
        'max-nested-callbacks': [1, 5],
        // 禁止使用指定的标识符
        'id-blacklist': 0,
        // 强制标识符的最新和最大长度
        'id-length': 0,
        // 要求标识符匹配一个指定的正则表达式
        'id-match': 0,
        // 强制在 JSX 属性中一致地使用双引号或单引号
        'jsx-quotes': 2,
        // 强制在关键字前后使用一致的空格 (前后腰需要)
        'keyword-spacing': 2,
        // 强制一行的最大长度
        'max-len': [0, 200, { ignoreUrls: true }],
        // 强制最大行数
        'max-lines': 0,
        // 强制 function 定义中最多允许的参数数量
        'max-params': [2, 7],
        // 强制 function 块最多允许的的语句数量
        'max-statements': [2, 200],
        // 强制每一行中所允许的最大语句数量
        'max-statements-per-line': 0,
        // 要求构造函数首字母大写 （要求调用 new 操作符时有首字母大小的函数，允许调用首字母大写的函数时没有 new 操作符。）
        'new-cap': [
            0,
            {
                newIsCap: true,
                capIsNew: false,
            },
        ],
        // 要求调用无参构造函数时有圆括号
        'new-parens': 2,
        // 要求或禁止 var 声明语句后有一行空行
        'newline-after-var': 0,
        // 禁止使用 Array 构造函数
        'no-array-constructor': 2,
        // 禁用按位运算符
        'no-bitwise': 0,
        // 要求 return 语句之前有一空行
        'newline-before-return': 0,
        // 要求方法链中每个调用都有一个换行符
        'newline-per-chained-call': 0,
        // 禁用 continue 语句
        'no-continue': 0,
        // 禁止在代码行后使用内联注释
        'no-inline-comments': 0,
        // 禁止 if 作为唯一的语句出现在 else 语句中
        'no-lonely-if': 0,
        // 禁止混合使用不同的操作符
        'no-mixed-operators': 0,
        // 不允许空格和 tab 混合缩进
        'no-mixed-spaces-and-tabs': 2,
        // 不允许多个空行
        'no-multiple-empty-lines': [
            2,
            {
                max: 3,
            },
        ],
        // 不允许否定的表达式
        'no-negated-condition': 0,
        // 不允许使用嵌套的三元表达式
        'no-nested-ternary': 0,
        // 禁止使用 Object 的构造函数
        'no-new-object': 2,
        // 禁止使用一元操作符 ++ 和 --
        'no-plusplus': 0,
        // 禁止使用特定的语法
        'no-restricted-syntax': [
            2,
            {
                selector: 'ForOfStatement',
                message: 'don`t use for...of anymore',
            },
        ],
        // 禁止 function 标识符和括号之间出现空格
        'no-spaced-func': 2,
        // 不允许使用三元操作符
        'no-ternary': 0,
        // 禁用行尾空格
        'no-trailing-spaces': 0,
        // 禁止标识符中有悬空下划线_bar
        'no-underscore-dangle': 0,
        // 禁止可以在有更简单的可替代的表达式时使用三元操作符
        'no-unneeded-ternary': 2,
        // 禁止属性前有空白
        'no-whitespace-before-property': 2,
        // 强制花括号内换行符的一致性
        'object-curly-newline': [
            2,
            {
                minProperties: 7,
                consistent: true,
            },
        ],
        // 强制在花括号中使用一致的空格
        'object-curly-spacing': 0,
        // 强制将对象的属性放在不同的行上
        'object-property-newline': 0,
        // 强制函数中的变量要么一起声明要么分开声明
        'one-var': [
            0,
            {
                initialized: 'never',
            },
        ],
        // 要求或禁止在 var 声明周围换行
        'one-var-declaration-per-line': 0,
        // 要求或禁止在可能的情况下要求使用简化的赋值操作符
        'operator-assignment': 0,
        // 强制操作符使用一致的换行符
        'operator-linebreak': [2, 'before'],
        // 要求或禁止块内填充
        'padded-blocks': 0,
        // 要求对象字面量属性名称用引号括起来
        'quote-props': 0,
        // 强制使用一致的反勾号、双引号或单引号
        quotes: [
            0,
            'single',
            {
                avoidEscape: true,
            },
        ],
        // 要求使用 JSDoc 注释
        'require-jsdoc': 0,
        // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
        semi: [2, 'always'],
        // 强制分号之前和之后使用一致的空格
        'semi-spacing': 0,
        // 要求同一个声明块中的变量按顺序排列
        'sort-vars': 0,
        // 强制在块之前使用一致的空格
        'space-before-blocks': [2, 'always'],
        // 强制在 function的左括号之前使用一致的空格
        'space-before-function-paren': [2, 'never'],
        // 强制在圆括号内使用一致的空格
        'space-in-parens': [2, 'never'],
        // 要求操作符周围有空格
        'space-infix-ops': 2,
        // 强制在一元操作符前后使用一致的空格
        'space-unary-ops': [
            2,
            {
                words: true,
                nonwords: false,
            },
        ],
        // 强制在注释中 // 或 /* 使用一致的空格
        'spaced-comment': [
            2,
            'always',
            {
                markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!'],
            },
        ],
        // 要求或禁止 Unicode BOM
        'unicode-bom': 0,
        // 要求正则表达式被括号括起来
        'wrap-regex': 0,
        // 要求箭头函数体使用大括号
        'arrow-body-style': 0,
        // 要求箭头函数的参数使用圆括号
        'arrow-parens': 0,
        // 要求箭头函数的箭头之前或之后有空格
        'arrow-spacing': [
            2,
            {
                before: true,
                after: true,
            },
        ],
        // 强制在子类构造函数中用super()调用父类构造函数，TypeScrip的编译器也会提示
        'constructor-super': 0,
        // 强制 generator 函数中 * 号周围使用一致的空格
        'generator-star-spacing': [
            2,
            {
                before: true,
                after: true,
            },
        ],
        // 禁止修改类声明的变量
        'no-class-assign': 2,
        // 不允许箭头功能，在那里他们可以混淆的比较
        'no-confusing-arrow': 0,
        // 禁止修改 const 声明的变量
        'no-const-assign': 2,
        // 禁止类成员中出现重复的名称
        'no-dupe-class-members': 2,
        // 不允许复制模块的进口
        'no-duplicate-imports': 2,
        // 禁止 Symbol 的构造函数
        'no-new-symbol': 2,
        // 允许指定模块加载时的进口
        'no-restricted-imports': 0,
        // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
        'no-this-before-super': 2,
        // 禁止不必要的计算性能键对象的文字
        'no-useless-computed-key': 1,
        // 要求使用 let 或 const 而不是 var
        'no-var': 2,
        // 要求或禁止对象字面量中方法和属性使用简写语法
        'object-shorthand': 0,
        // 要求使用箭头函数作为回调
        'prefer-arrow-callback': 0,
        // 要求使用 const 声明那些声明后不再被修改的变量
        'prefer-const': 1,
        // 要求在合适的地方使用 Reflect 方法
        'prefer-reflect': 0,
        // 要求使用扩展运算符而非 .apply()
        'prefer-spread': 0,
        // 要求使用模板字面量而非字符串连接
        'prefer-template': 0,
        // Suggest using the rest parameters instead of arguments
        'prefer-rest-params': 0,
        // 要求generator 函数内有 yield
        'require-yield': 0,
        // enforce spacing between rest and spread operators and their expressions
        'rest-spread-spacing': 0,
        // 强制模块内的 import 排序
        'sort-imports': 0,
        // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
        'template-curly-spacing': 1,
        // 强制在 yield* 表达式中 * 周围使用空格
        'yield-star-spacing': 2,
    },
    react: {
        /**
         * 布尔值类型的 propTypes 的 name 必须为 is 或 has 开头
         * @reason 类型相关的约束交给 TypeScript
         */
        'react/boolean-prop-naming': 0,
        /**
         * <button> 必须有 type 属性
         */
        'react/button-has-type': 0,
        /**
         * 一个 defaultProps 必须有对应的 propTypes
         * @reason 类型相关的约束交给 TypeScript
         */
        'react/default-props-match-prop-types': 0,
        /**
         * props, state, context 必须用解构赋值
         */
        'react/destructuring-assignment': 0,
        /**
         * 组件必须有 displayName 属性
         * @reason 不强制要求写 displayName
         */
        'react/display-name': 0,
        /**
         * 禁止在自定义组件中使用指定的 props
         */
        'react/forbid-component-props': 0,
        /**
         * 禁止在 dom 组件中使用指定的 props
         */
        'react/forbid-dom-props': 0,
        /**
         * 禁止使用指定的组件
         */
        'react/forbid-elements': 0,
        /**
         * 禁止使用另一个组件的 propTypes
         * @reason 类型相关的约束交给 TypeScript
         */
        'react/forbid-foreign-prop-types': 0,
        /**
         * 禁止使用 PropTypes.any PropTypes.array 和 PropTypes.object
         * @reason 类型相关的约束交给 TypeScript
         */
        'react/forbid-prop-types': 0,
        /**
         * 限制函数式组件的函数形式（函数声明、函数表达式或箭头函数）
         * @reason 一些场景还不能覆盖，如 export default function，自动修复功能在 ts 中有些问题
         */
        'react/function-component-definition': 0,
        /**
         * 布尔值的属性必须显式的声明值为 true
         */
        'react/jsx-boolean-value': 0,
        /**
         * 禁止 jsx 中使用无用的引号
         */
        'react/jsx-curly-brace-presence': [2, 'never'],
        /**
         * 限制文件后缀
         */
        'react/jsx-filename-extension': 0,
        /**
         * 必须使用 <></> 而不是 React.Fragment
         * @reason <></> 不需要额外引入 Fragment 组件
         */
        'react/jsx-fragments': [2, 'syntax'],
        /**
         * handler 的名称必须是 onXXX 或 handleXXX
         */
        'react/jsx-handler-names': 0,
        /**
         * 数组中的 jsx 必须有 key
         */
        'react/jsx-key': [
            2,
            {
                checkFragmentShorthand: true,
            },
        ],
        /**
         * 限制 jsx 层级
         */
        'react/jsx-max-depth': 0,
        /**
         * jsx 中禁止使用 bind
         */
        'react/jsx-no-bind': 0,
        /**
         * 禁止在 jsx 中使用像注释的字符串
         */
        'react/jsx-no-comment-textnodes': 2,
        /**
         * 禁止使用不稳定的值作为 Context.Provider 的 value
         */
        'react/jsx-no-constructed-context-values': 2,
        /**
         * 禁止出现重复的 props
         */
        'react/jsx-no-duplicate-props': 2,
        /**
         * 禁止在 jsx 中出现字符串
         */
        'react/jsx-no-literals': 0,
        /**
         * 禁止出现 href="javascript:void(0)"
         * @reason React 已经有 warning 了，并且会在将来禁止此类属性值
         */
        'react/jsx-no-script-url': 2,
        /**
         * 禁止使用 target="_blank"
         */
        'react/jsx-no-target-blank': 0,
        /**
         * 禁止使用未定义的组件
         */
        'react/jsx-no-undef': 2,
        /**
         * 禁止无意义的 Fragment 组件
         */
        'react/jsx-no-useless-fragment': 2,
        /**
         * 组件的名称必须符合 PascalCase
         */
        'react/jsx-pascal-case': 2,
        /**
         * 禁止使用 {...props}
         */
        'react/jsx-props-no-spreading': 0,
        /**
         * defaultProps 必须按字母排序
         */
        'react/jsx-sort-default-props': 0,
        /**
         * props 必须按字母排序
         */
        'react/jsx-sort-props': 0,
        /**
         * 修复 React 被误报为未使用的变量的问题（仅在开启 no-unused-vars 时有效）
         */
        'react/jsx-uses-react': 2,
        /**
         * 修复 no-unused-vars 不检查 jsx 的问题
         */
        'react/jsx-uses-vars': 2,
        /**
         * 禁止在 setState 中使用 this.state
         */
        'react/no-access-state-in-setstate': 0,
        /**
         * 两个 inline 元素之间必须有空格，否则视觉上它们就贴在一起了
         * @reason 这是样式的问题，不应该由空格约束
         */
        'react/no-adjacent-inline-elements': 0,
        /**
         * 禁止使用数组的索引作为 key
         */
        'react/no-array-index-key': 0,
        /**
         * 禁止将 children 作为一个 prop
         */
        'react/no-children-prop': 2,
        /**
         * 禁止使用 dangerouslySetInnerHTML
         */
        'react/no-danger': 0,
        /**
         * 禁止在使用了 dangerouslySetInnerHTML 的组件内添加 children
         */
        'react/no-danger-with-children': 2,
        /**
         * 禁止使用已废弃的 api
         */
        'react/no-deprecated': 2,
        /**
         * 禁止在 componentDidMount 里使用 setState
         * @reason 同构应用需要在 didMount 里使用 setState
         */
        'react/no-did-mount-set-state': 0,
        /**
         * 禁止在 componentDidUpdate 里使用 setState
         */
        'react/no-did-update-set-state': 2,
        /**
         * 禁止直接修改 this.state
         */
        'react/no-direct-mutation-state': 2,
        /**
         * 禁止使用 findDOMNode
         */
        'react/no-find-dom-node': 2,
        /**
         * 禁止使用 isMounted
         * @reason 它是已废弃的语法
         */
        'react/no-is-mounted': 2,
        /**
         * 禁止在一个文件创建两个组件
         * @reason 有一个 bug：https://github.com/yannickcr/eslint-plugin-react/issues/1181
         */
        'react/no-multi-comp': 0,
        /**
         * 禁止在 React.PureComponent 中使用 shouldComponentUpdate
         */
        'react/no-redundant-should-component-update': 2,
        /**
         * 禁止使用 ReactDOM.render 的返回值
         */
        'react/no-render-return-value': 2,
        /**
         * 禁止使用 setState
         */
        'react/no-set-state': 0,
        /**
         * 禁止使用字符串 ref
         */
        'react/no-string-refs': 2,
        /**
         * 禁止在函数组件中使用 this
         */
        'react/no-this-in-sfc': 2,
        /**
         * 禁止组件的属性或生命周期大小写错误
         */
        'react/no-typos': 2,
        /**
         * 禁止在组件的内部存在未转义的 >, ", ' 或 }
         */
        'react/no-unescaped-entities': 2,
        /**
         * 禁止出现 HTML 中的属性，如 class
         */
        'react/no-unknown-property': 2,
        /**
         * 禁止使用不安全的生命周期方法 componentWillMount, componentWillReceiveProps, componentWillUpdate
         */
        'react/no-unsafe': [
            2,
            {
                checkAliases: true,
            },
        ],
        /**
         * 禁止在组件内使用不稳定的组件
         */
        'react/no-unstable-nested-components': 2,
        /**
         * 禁止出现未使用的 propTypes
         * @reason 类型相关的约束交给 TypeScript
         */
        'react/no-unused-prop-types': 0,
        /**
         * 已定义的 state 必须使用
         * @reason 没有官方文档，并且存在很多 bug：https://github.com/yannickcr/eslint-plugin-react/search?q=no-unused-state&type=Issues&utf8=%E2%9C%93
         */
        'react/no-unused-state': 0,
        /**
         * 禁止在 componentWillUpdate 中使用 setState
         * @reason 已经禁止使用 componentWillUpdate 了
         */
        'react/no-will-update-set-state': 0,
        /**
         * 必须使用 Class 的形式创建组件
         */
        'react/prefer-es6-class': [2, 'always'],
        /**
         * 使用 Flow 时，props 必须设置为精确的类型
         */
        'react/prefer-exact-props': 0,
        /**
         * 使用 Flow 时，props 必须设置为只读的
         */
        'react/prefer-read-only-props': 0,
        /**
         * 必须使用函数式组件
         */
        'react/prefer-stateless-function': 0,
        /**
         * 组件必须写 propTypes
         * @reason 类型相关的约束交给 TypeScript
         */
        'react/prop-types': 0,
        /**
         * 出现 jsx 的地方必须导入 React
         * @reason 已经在 no-undef 中限制了
         */
        'react/react-in-jsx-scope': 0,
        /**
         * 非 required 的 prop 必须有 defaultProps
         * @reason 类型相关的约束交给 TypeScript
         */
        'react/require-default-props': 0,
        /**
         * 组件必须有 shouldComponentUpdate
         */
        'react/require-optimization': 0,
        /**
         * render 方法中必须有返回值
         */
        'react/require-render-return': 2,
        /**
         * 组件内没有 children 时，必须使用自闭和写法
         *
         */
        'react/self-closing-comp': 2,
        /**
             * 组件内方法必须按照一定规则排序，默认顺序如下
             * {
                order: [
                    'static-methods',
                    'lifecycle',
                    'everything-else',
                    'render'
                ],
                groups: {
                    lifecycle: [
                        'displayName',
                        'propTypes',
                        'contextTypes',
                        'childContextTypes',
                        'mixins',
                        'statics',
                        'defaultProps',
                        'constructor',
                        'getDefaultProps',
                        'state',
                        'getInitialState',
                        'getChildContext',
                        'getDerivedStateFromProps',
                        'componentWillMount',
                        'UNSAFE_componentWillMount',
                        'componentDidMount',
                        'componentWillReceiveProps',
                        'UNSAFE_componentWillReceiveProps',
                        'shouldComponentUpdate',
                        'componentWillUpdate',
                        'UNSAFE_componentWillUpdate',
                        'getSnapshotBeforeUpdate',
                        'componentDidUpdate',
                        'componentDidCatch',
                        'componentWillUnmount'
                    ]
                  }
                }
             */
        'react/sort-comp': 2,
        /**
         * propTypes 的属性必须按照字母排序
         * @reason 类型相关的约束交给 TypeScript
         */
        'react/sort-prop-types': 0,
        /**
         * 必须在构造函数中初始化 state
         */
        'react/state-in-constructor': 0,
        /**
         * 类的静态属性必须使用 static 关键字定义
         */
        'react/static-property-placement': 2,
        /**
         * style 属性的取值必须是 object
         */
        'react/style-prop-object': 2,
        /**
         * img, br 标签中禁止有 children
         */
        'react/void-dom-elements-no-children': 2,
    },
    reactHooks: {
        /**
         * 检查 Hook 的规则
         */
        'react-hooks/rules-of-hooks': 2,
        /**
         * 检查 effect 的依赖
         */
        'react-hooks/exhaustive-deps': 2,
    },
    typescript: {
        /**
         * 重载的函数必须写在一起
         * @reason 增加可读性
         */
        '@typescript-eslint/adjacent-overload-signatures': 2,
        /**
         * 限制数组类型必须使用 Array<T> 或 T[]
         * @reason 允许灵活运用两者
         */
        '@typescript-eslint/array-type': 0,
        /**
         * 禁止对没有 then 方法的对象使用 await
         */
        '@typescript-eslint/await-thenable': 0,
        /**
         * 禁止使用 // @ts-ignore // @ts-nocheck // @ts-check
         * @reason 这种注释本身就是对特殊代码的说明
         */
        '@typescript-eslint/ban-ts-comment': 0,
        /**
         * 禁止使用类似 tslint:disable-next-line 这样的注释
         */
        '@typescript-eslint/ban-tslint-comment': 0,
        /**
         * 禁止使用指定的类型
         */
        '@typescript-eslint/ban-types': 0,
        /**
         * 类的只读属性若是一个字面量，则必须使用只读属性而不是 getter
         */
        '@typescript-eslint/class-literal-property-style': [2, 'fields'],
        /**
         * 必须使用内置的 Record<K, T> 来描述仅包含可索引成员的接口
         */
        '@typescript-eslint/consistent-indexed-object-style': 0,
        /**
         * 类型断言必须使用 as Type，禁止使用 <Type>，禁止对对象字面量进行类型断言（断言成 any 是允许的）
         * @reason <Type> 容易被理解为 jsx
         */
        '@typescript-eslint/consistent-type-assertions': [
            2,
            {
                assertionStyle: 'as',
                objectLiteralTypeAssertions: 'never',
            },
        ],
        /**
         * 优先使用 interface 而不是 type
         * @reason interface 可以 implement, extend 和 merge
         */
        '@typescript-eslint/consistent-type-definitions': [2, 'interface'],
        /**
         * 必须使用 import type 导入类型
         */
        '@typescript-eslint/consistent-type-imports': 2,
        /**
         * 有默认值或可选的参数必须放到最后
         */
        'default-param-last': 0,
        '@typescript-eslint/default-param-last': 0,
        /**
         * 禁止使用 foo['bar']，必须写成 foo.bar
         * @reason 当需要写一系列属性的时候，可以更统一
         */
        'dot-notation': 0,
        '@typescript-eslint/dot-notation': 0,
        /**
         * 函数返回值必须与声明的类型一致
         * @reason 编译阶段检查就足够了
         */
        '@typescript-eslint/explicit-function-return-type': 0,
        /**
         * 必须设置类的成员的可访问性
         * @reason 将不需要公开的成员设为私有的，可以增强代码的可理解性，对文档输出也很友好
         */
        '@typescript-eslint/explicit-member-accessibility': 2,
        /**
         * 导出的函数或类中的 public 方法必须定义输入输出参数的类型
         */
        '@typescript-eslint/explicit-module-boundary-types': 0,
        /**
         * 变量必须在定义的时候赋值
         */
        'init-declarations': 0,
        '@typescript-eslint/init-declarations': 0,
        /**
         * 类的成员之间是否需要空行
         * @reason 有时为了紧凑需要挨在一起，有时为了可读性需要空一行
         */
        'lines-between-class-members': 2,
        '@typescript-eslint/lines-between-class-members': 2,
        /**
         * 指定类成员的排序规则
         * @reason 优先级：
         * 1. static > instance
         * 2. field > constructor > method
         * 3. public > protected > private
         */
        '@typescript-eslint/member-ordering': [
            2,
            {
                default: [
                    'public-static-field',
                    'protected-static-field',
                    'private-static-field',
                    'static-field',
                    'public-static-method',
                    'protected-static-method',
                    'private-static-method',
                    'static-method',
                    'public-instance-field',
                    'protected-instance-field',
                    'private-instance-field',
                    'public-field',
                    'protected-field',
                    'private-field',
                    'instance-field',
                    'field',
                    'constructor',
                    'public-instance-method',
                    'protected-instance-method',
                    'private-instance-method',
                    'public-method',
                    'protected-method',
                    'private-method',
                    'instance-method',
                    'method',
                ],
            },
        ],
        /**
         * 接口中的方法必须用属性的方式定义
         * @reason 配置了 strictFunctionTypes 之后，用属性的方式定义方法可以获得更严格的检查
         */
        '@typescript-eslint/method-signature-style': 2,
        /**
         * 限制各种变量或类型的命名规则
         */
        '@typescript-eslint/naming-convention': 0,
        /**
         * 禁止使用 Array 构造函数
         */
        'no-array-constructor': 0,
        '@typescript-eslint/no-array-constructor': 2,
        /**
         * 禁止滥用 toString 方法
         */
        '@typescript-eslint/no-base-to-string': 0,
        /**
         * 禁止使用容易混淆的非空断言
         */
        '@typescript-eslint/no-confusing-non-null-assertion': 0,
        /**
         * 禁止使用返回值为 void 的函数的返回值
         */
        '@typescript-eslint/no-confusing-void-expression': 0,
        /**
         * 禁止重复定义类的成员
         */
        'no-dupe-class-members': 0,
        '@typescript-eslint/no-dupe-class-members': 2,
        /**
         * 禁止重复导入模块
         */
        'no-duplicate-imports': 0,
        '@typescript-eslint/no-duplicate-imports': 2,
        /**
         * 禁止 delete 时传入的 key 是动态的
         */
        '@typescript-eslint/no-dynamic-delete': 0,
        /**
         * 不允许有空函数
         * @reason 有时需要将一个空函数设置为某个项的默认值
         */
        'no-empty-function': 0,
        '@typescript-eslint/no-empty-function': 0,
        /**
         * 禁止定义空的接口
         */
        '@typescript-eslint/no-empty-interface': 2,
        /**
         * 禁止使用 any
         * @reason 考虑到项目大部分代码都是 js 过渡到 typescript，暂时不开
         */
        '@typescript-eslint/no-explicit-any': 0,
        /**
         * 禁止多余的 non-null 断言
         */
        '@typescript-eslint/no-extra-non-null-assertion': 0,
        /**
         * 禁止定义没必要的类，比如只有静态方法的类
         */
        '@typescript-eslint/no-extraneous-class': 0,
        /**
         * 禁止调用 Promise 时没有处理异常情况
         */
        '@typescript-eslint/no-floating-promises': 0,
        /**
         * 禁止对 array 使用 for in 循环
         */
        '@typescript-eslint/no-for-in-array': 0,
        /**
         * catch 的参数必须指定具体类型
         */
        '@typescript-eslint/no-implicit-any-catch': 0,
        /**
         * 禁止给一个初始化时直接赋值为 number, string 的变量显式的声明类型
         * @reason 可以简化代码
         */
        '@typescript-eslint/no-inferrable-types': 2,
        /**
         * 禁止在类之外的地方使用 this
         * @reason 只允许在 class 中使用 this
         */
        'no-invalid-this': 0,
        '@typescript-eslint/no-invalid-this': 2,
        /**
         * 禁止使用无意义的 void 类型
         * @reason void 只能用在函数的返回值中
         */
        '@typescript-eslint/no-invalid-void-type': 2,
        /**
         * 禁止在循环内的函数内部出现循环体条件语句中定义的变量
         * @reason 使用 let 就已经解决了这个问题了
         */
        'no-loop-func': 0,
        '@typescript-eslint/no-loop-func': 0,
        /**
         * 禁止使用超出 js 精度范围的数字
         */
        'no-loss-of-precision': 0,
        '@typescript-eslint/no-loss-of-precision': 2,
        /**
         * 禁止使用 magic numbers
         */
        'no-magic-numbers': 0,
        '@typescript-eslint/no-magic-numbers': 0,
        /**
         * 禁止在接口中定义 constructor，或在类中定义 new
         */
        '@typescript-eslint/no-misused-new': 0,
        /**
         * 禁止使用 namespace 来定义命名空间
         * @reason 使用 es6 引入模块，才是更标准的方式。
         * 但是允许使用 declare namespace ... {} 来定义外部命名空间
         */
        '@typescript-eslint/no-namespace': [
            2,
            {
                allowDeclarations: true,
                allowDefinitionFiles: true,
            },
        ],
        /**
         * 禁止在 optional chaining 之后使用 non-null 断言（感叹号）
         * @reason optional chaining 后面的属性一定是非空的
         */
        '@typescript-eslint/no-non-null-asserted-optional-chain': 2,
        /**
         * 禁止使用 non-null 断言（感叹号）
         * @reason 使用 non-null 断言时就已经清楚了风险
         */
        '@typescript-eslint/no-non-null-assertion': 0,
        /**
         * 禁止给类的构造函数的参数添加修饰符
         * @reason 强制所有属性都定义到类里面，比较统一
         */
        '@typescript-eslint/no-parameter-properties': 2,
        /**
         * 禁止重复定义变量
         */
        'no-redeclare': 0,
        '@typescript-eslint/no-redeclare': 2,
        /**
         * 禁止使用 require
         * @reason 统一使用 import 来引入模块，特殊情况使用单行注释允许 require 引入
         */
        '@typescript-eslint/no-require-imports': 2,
        /**
         * 禁止变量名与上层作用域内的已定义的变量重复
         * @reason 很多时候函数的形参和传参是同名的
         */
        'no-shadow': 0,
        '@typescript-eslint/no-shadow': 0,
        /**
         * 禁止将 this 赋值给其他变量，除非是解构赋值
         */
        '@typescript-eslint/no-this-alias': [
            2,
            {
                allowDestructuring: true,
            },
        ],
        /**
         * 禁止使用类型别名
         */
        '@typescript-eslint/no-type-alias': 0,
        /**
         * 测试表达式中的布尔类型禁止与 true 或 false 直接比较
         */
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': 0,
        /**
         * 条件表达式禁止是永远为真（或永远为假）的
         */
        '@typescript-eslint/no-unnecessary-condition': 0,
        /**
         * 在命名空间中，可以直接使用内部变量，不需要添加命名空间前缀
         */
        '@typescript-eslint/no-unnecessary-qualifier': 0,
        /**
         * 禁止范型的类型有默认值时，将范型设置为该默认值
         */
        '@typescript-eslint/no-unnecessary-type-arguments': 0,
        /**
         * 禁止无用的类型断言
         */
        '@typescript-eslint/no-unnecessary-type-assertion': 0,
        /**
         * 禁止没用的类型限制
         */
        '@typescript-eslint/no-unnecessary-type-constraint': 2,
        /**
         * 禁止将 any 类型的变量作为函数参数调用
         */
        '@typescript-eslint/no-unsafe-argument': 0,
        /**
         * 禁止将变量或属性的类型设置为 any
         */
        '@typescript-eslint/no-unsafe-assignment': 0,
        /**
         * 禁止调用 any 类型的变量上的方法
         */
        '@typescript-eslint/no-unsafe-call': 0,
        /**
         * 禁止获取 any 类型的变量中的属性
         */
        '@typescript-eslint/no-unsafe-member-access': 0,
        /**
         * 禁止函数的返回值的类型是 any
         */
        '@typescript-eslint/no-unsafe-return': 0,
        /**
         * 禁止无用的表达式
         */
        'no-unused-expressions': 0,
        '@typescript-eslint/no-unused-expressions': [
            2,
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true,
            },
        ],
        /**
         * 已定义的变量必须使用
         */
        '@typescript-eslint/no-unused-vars': 2,
        /**
         * 禁止在定义变量之前就使用它
         */
        'no-use-before-define': 0,
        '@typescript-eslint/no-use-before-define': 2,
        /**
         * 禁止出现没必要的 constructor
         */
        'no-useless-constructor': 0,
        '@typescript-eslint/no-useless-constructor': 2,
        /**
         * 禁止使用 require 来引入模块
         * @reason no-require-imports 规则已经约束了 require
         */
        '@typescript-eslint/no-var-requires': 0,
        /**
         * 必须使用 ! 而不是 as
         */
        '@typescript-eslint/non-nullable-type-assertion-style': 0,
        /**
         * 使用 as const 替代 as 'bar'
         * @reason as const 是新语法，不是很常见
         */
        '@typescript-eslint/prefer-as-const': 0,
        /**
         * 枚举值必须初始化
         */
        '@typescript-eslint/prefer-enum-initializers': 0,
        /**
         * 使用 for 循环遍历数组时，如果索引仅用于获取成员，则必须使用 for of 循环替代 for 循环
         * @reason for of 循环更加易读
         */
        '@typescript-eslint/prefer-for-of': 2,
        /**
         * 使用函数类型别名替代包含函数调用声明的接口
         */
        '@typescript-eslint/prefer-function-type': 2,
        /**
         * 使用 includes 而不是 indexOf
         */
        '@typescript-eslint/prefer-includes': 0,
        /**
         * 枚举类型的值必须是字面量，禁止是计算值
         * @reason 编译阶段检查就足够了
         */
        '@typescript-eslint/prefer-literal-enum-member': 0,
        /**
         * 禁止使用 module 来定义命名空间
         * @reason module 已成为 js 的关键字
         */
        '@typescript-eslint/prefer-namespace-keyword': 2,
        /**
         * 使用 ?? 替代 ||
         */
        '@typescript-eslint/prefer-nullish-coalescing': 0,
        /**
         * 使用 optional chaining 替代 &&
         */
        '@typescript-eslint/prefer-optional-chain': 2,
        /**
         * 私有变量如果没有在构造函数外被赋值，则必须设为 readonly
         */
        '@typescript-eslint/prefer-readonly': 0,
        /**
         * 函数的参数必须设置为 readonly
         */
        '@typescript-eslint/prefer-readonly-parameter-types': 0,
        /**
         * 使用 reduce 方法时，必须传入范型，而不是对第二个参数使用 as
         */
        '@typescript-eslint/prefer-reduce-type-parameter': 0,
        /**
         * 使用 RegExp#exec 而不是 String#match
         */
        '@typescript-eslint/prefer-regexp-exec': 0,
        /**
         * 类的方法返回值是 this 时，类型必须设置为 this
         */
        '@typescript-eslint/prefer-return-this-type': 0,
        /**
         * 使用 String#startsWith 而不是其他方式
         */
        '@typescript-eslint/prefer-string-starts-ends-with': 0,
        /**
         * 当需要忽略下一行的 ts 错误时，必须使用 @ts-expect-error 而不是 @ts-ignore
         * @reason 使用 @ts-expect-error 可以避免对不会报错的代码设置了 @ts-ignore
         */
        '@typescript-eslint/prefer-ts-expect-error': 0,
        /**
         * async 函数的返回值必须是 Promise
         */
        '@typescript-eslint/promise-function-async': 0,
        /**
         * 使用 sort 时必须传入比较函数
         */
        '@typescript-eslint/require-array-sort-compare': 0,
        /**
         * async 函数中必须存在 await 语句
         */
        'require-await': 0,
        '@typescript-eslint/require-await': 0,
        /**
         * 使用加号时，两者必须同为数字或同为字符串
         */
        '@typescript-eslint/restrict-plus-operands': 0,
        /**
         * 模版字符串中的变量类型必须是字符串
         */
        '@typescript-eslint/restrict-template-expressions': 0,
        /**
         * 禁止在 return 语句里使用 await
         */
        'no-return-await': 0,
        '@typescript-eslint/return-await': 0,
        /**
         * 联合类型和交叉类型的每一项必须按字母排序
         */
        '@typescript-eslint/sort-type-union-intersection-members': 0,
        /**
         * 条件判断必须传入布尔值
         */
        '@typescript-eslint/strict-boolean-expressions': 0,
        /**
         * 使用联合类型作为 switch 的对象时，必须包含每一个类型的 case
         */
        '@typescript-eslint/switch-exhaustiveness-check': 0,
        /**
         * 禁止使用三斜杠导入文件
         * @reason 三斜杠是已废弃的语法，但在类型声明文件中还是可以使用的
         */
        '@typescript-eslint/triple-slash-reference': [
            2,
            {
                path: 'never',
                types: 'always',
                lib: 'always',
            },
        ],
        /**
         * interface 和 type 定义时必须声明成员的类型
         */
        '@typescript-eslint/typedef': [
            2,
            {
                arrayDestructuring: false,
                arrowParameter: false,
                memberVariableDeclaration: false,
                objectDestructuring: false,
                parameter: false,
                propertyDeclaration: true,
                variableDeclaration: false,
            },
        ],
        /**
         * 方法调用时需要绑定到正确的 this 上
         */
        '@typescript-eslint/unbound-method': 0,
        /**
         * 函数重载时，若能通过联合类型将两个函数的类型声明合为一个，则使用联合类型而不是两个函数声明
         */
        '@typescript-eslint/unified-signatures': 2,
    },
    import: {
        /**
         * 禁止循环引用
         */
        'import/no-cycle': 2,
        /**
         * 检查模块是否引用正确
         * 方便无编译环境时修改
         */
        'import/no-unresolved': 2,
    },
};
