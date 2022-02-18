/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length >= 2) {
        const firstItem = numbers[0];
        const lastItem = numbers[numbers.length - 1];
        const firstAndLast = [firstItem, lastItem];
        return firstAndLast;
    } else if (numbers.length == 1) {
        const item = numbers[0];
        const firstTwice = [item, item];
        return firstTwice;
    } else {
        const emptyArr: number[] = [];
        return emptyArr;
    }
    return numbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripledArr = numbers.map((num: number): number => num * 3);
    return tripledArr;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const numArr = numbers.map((str: string): number => parseInt(str, 10) || 0);
    return numArr;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const hasDollarSign = (str: string): boolean => {
        if (str.startsWith("$")) {
            return true;
        } else {
            return false;
        }
    };
    const numArr = amounts.map((amt: string): number => {
        if (hasDollarSign(amt)) {
            return parseInt(amt.substring(1), 10) || 0;
        } else {
            return parseInt(amt) || 0;
        }
    });
    return numArr;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const questionOrExclam = (message: string): number => {
        if (message.endsWith("?")) {
            return 1;
        } else if (message.endsWith("!")) {
            return 2;
        } else {
            return 0;
        }
    };
    const msgList = messages.map((msg: string): string => {
        if (questionOrExclam(msg) === 2) {
            return msg.toUpperCase();
        } else if (questionOrExclam(msg) === 1) {
            return "Q-Delete";
        } else {
            return msg;
        }
    });
    const finalMessage = msgList.filter((str: string): boolean => {
        if (str === "Q-Delete") {
            return false;
        } else {
            return true;
        }
    });
    return finalMessage;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => {
        if (word.length < 4) {
            return true;
        } else {
            return false;
        }
    });
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const nonRGB = colors.filter((color: string): boolean => {
            if (
                color.toLowerCase() === "red" ||
                color.toLowerCase() === "green" ||
                color.toLowerCase() === "blue"
            ) {
                return false;
            } else {
                return true;
            }
        });
        if (nonRGB.length > 0) {
            return false;
        } else {
            return true;
        }
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else {
        const arrSum = addends.reduce(
            (currentTotal: number, num: number): number => {
                return currentTotal + num;
            },
            0
        );
        return `${arrSum}=${addends.join("+")}`;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const anyNegatives = values.some((val: number): boolean => val < 0);
    if (anyNegatives) {
        const valCopy = [...values];
        const negativeIndex = values.findIndex(
            (val: number): boolean => val < 0
        );
        const negVal = valCopy[negativeIndex];
        const valUntilNeg = valCopy.slice(0, negativeIndex);
        const valAfterNeg = valCopy.slice(negativeIndex + 1, valCopy.length);
        const arrSum = valUntilNeg.reduce(
            (currentTotal: number, num: number): number => {
                return currentTotal + num;
            },
            0
        );
        return [...valUntilNeg, negVal, arrSum, ...valAfterNeg];
    } else {
        const arrSum = values.reduce(
            (currentTotal: number, num: number): number => {
                return currentTotal + num;
            },
            0
        );
        return [...values, arrSum];
    }
}
