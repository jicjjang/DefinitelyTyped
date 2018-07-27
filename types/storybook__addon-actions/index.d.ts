// Type definitions for @storybook/addon-actions 3.4
// Project: https://github.com/storybooks/storybook
// Definitions by: Joscha Feth <https://github.com/joscha>, June <https://github.com/jicjjang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

export type HandlerFunction = (...args: any[]) => undefined;
export type DecoratorFunction = (args: any[]) => any[];

export function decorateAction(decorators: DecoratorFunction[]): (name: string, options?: object) => HandlerFunction;
export function configureActions(options: object): undefined;
export function action(name: string): HandlerFunction;
