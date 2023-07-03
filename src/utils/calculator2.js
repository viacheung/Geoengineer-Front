// 导入Math.js库
const math = require('mathjs');

// 辅助函数：判断字符是否是数字
function isNumeric(char) {
    return !isNaN(parseFloat(char)) && isFinite(char);
}


// 辅助函数：将字符串中的列数据替换为对应的数值
function replaceColumnData(expression, columnData) {
    const columnRegex = /\$[A-Z]+\d+\$/g;
    return expression.replace(columnRegex, match => {
        const columnKey = match.slice(1, -1);
        const columnIndex = parseInt(columnKey.substring(1)) - 1;
        return columnData[columnIndex];
    });
}

//计算逻辑表达式
function evaluateLogicalExpression(leftOperand, operator, rightOperand) {
    operator = String(operator); // 将运算符转换为字符串
    if (operator === '<') {
        return leftOperand < rightOperand ? 1 : 0;
    } else if (operator === '<=') {
        return leftOperand <= rightOperand ? 1 : 0;
    } else if (operator === '>') {
        return leftOperand > rightOperand ? 1 : 0;
    } else if (operator === '>=') {
        return leftOperand >= rightOperand ? 1 : 0;
    } else if (operator === '&&') {
        return leftOperand && rightOperand ? 1 : 0;
    } else if (operator === '||') {
        return leftOperand || rightOperand ? 1 : 0;
    } else if (operator === '!') {
        return !rightOperand ? 1 : 0;
    } else {
        throw new Error(`Invalid logical operator: ${operator}`);
    }
}


// 辅助函数：根据运算符计算两个操作数的结果
function evaluateArithmeticOperator(leftOperand, operator, rightOperand) {
    if (operator === '+') {
        return math.add(leftOperand, rightOperand);
    } else if (operator === '-') {
        return math.subtract(leftOperand, rightOperand);
    } else if (operator === '*') {
        return math.multiply(leftOperand, rightOperand);
    } else if (operator === '/') {
        return math.divide(leftOperand, rightOperand);
    } else {
        throw new Error(`Invalid arithmetic operator: ${operator}`);
    }
}

// 辅助函数：根据函数名称和参数计算函数结果
function calculateMathFunction(functionName, argument) {
    const sanitizedArgument = argument.replace(/\$/g, ''); // 去除参数中的$符号
    const parsedArgument = math.evaluate(sanitizedArgument); // 解析参数表达式
    let result; //返回结果

    if (functionName === 'sin') {
        result = math.sin(parsedArgument);
    } else if (functionName === 'cos') {
        result = math.cos(parsedArgument);
    } else if (functionName === 'tan') {
        result = math.tan(parsedArgument);
    } else if (functionName === 'asin') {
        result = math.asin(parsedArgument);
    } else if (functionName === 'acos') {
        result = math.acos(parsedArgument);
    } else if (functionName === 'atan') {
        result = math.atan(parsedArgument);
    } else if (functionName === 'exp') {
        result = math.exp(parsedArgument);
    } else if (functionName === 'log') {
        result = math.log(parsedArgument);
    } else if (functionName === 'pow') {
        result = math.pow(parsedArgument);
    } else {
        throw new Error(`Invalid function name: ${functionName}`);
    }

    return result;
}

// 辅助函数：解析逻辑表达式
function parseLogicalExpression(expression, columnData) {
    let result = expression;
    const logicalRegex = /(\d+)\s*([<>=!]+)\s*(\d+)/;
    let match = result.match(logicalRegex);

    while (match !== null) {
        const leftOperand = parseFloat(match[1]);
        const operator = match[2];
        const rightOperand = parseFloat(match[3]);
        const logicalResult = evaluateLogicalExpression(leftOperand, operator, rightOperand);
        result = result.replace(match[0], logicalResult);

        const newMatch = result.match(logicalRegex);
        if (newMatch !== null) {
            match = newMatch;
        } else {
            match = null;
        }
    }

    return result;
}

// 辅助函数：获取括号内的子表达式
function getSubExpression(expression, startIndex) {
    let count = 1;
    let endIndex = startIndex + 1;

    while (endIndex < expression.length && count > 0) {
        if (expression[endIndex] === '(') {
            count++;
        } else if (expression[endIndex] === ')') {
            count--;
        }
        endIndex++;
    }

    return expression.slice(startIndex + 1, endIndex - 1);
}


// 主函数：解析字符串并进行计算
function parseAndCalculate(expression, columnData) {
    // 替换列数据
    const parsedExpression = replaceColumnData(expression, columnData);

    // 解析逻辑表达式
    const logicalExpression = parseLogicalExpression(parsedExpression, columnData);

    // 使用math.evaluate计算表达式
    const result = math.evaluate(logicalExpression);

    return result;
}

export default {
    isNumeric,
    replaceColumnData,
    evaluateLogicalExpression,
    evaluateArithmeticOperator,
    calculateMathFunction,
    parseLogicalExpression,
    getSubExpression,
    parseAndCalculate
}

// 示例用法
const expression = 'sin($A1$) + 3.5 * exp($A2$) + 1';  //解析的字符串
const columnDataA1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; // 自定义A1数据，共15个数据
const columnDataA2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // 自定义A2数据，共15个数据
const columnDataA3 = []; //保存最终的结果
var len = columnDataA1.length; //或者列数据的长度

for (let i = 0; i < len; i++) {
    const result = parseAndCalculate(expression, [columnDataA1[i], columnDataA2[i]]);
    columnDataA3.push(result);
}


console.log(columnDataA3);