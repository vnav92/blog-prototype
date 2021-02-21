// Walkaround for TS compiler .scss files import error
declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}